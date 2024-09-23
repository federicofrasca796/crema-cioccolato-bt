import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { MenuItem } from '@/data/menu/items';
import slugify from 'slugify';

interface ItemsTableRow {
  label: string;
  description: string;
  price: string;
  image: string;
  ingredients: string;
  allergens: string;
  available: string;
  category: string;
}

const normalizeItem = (row: ItemsTableRow, index: number) => {
  if (!row.label) return;

  const normalized: MenuItem = {
    id: index,
    label: '',
    description: '',
    price: 0,
    image: '',
    ingredients: [],
    allergens: [],
    available: false,
    category_id: '',
    slug: ''
  };

  normalized.label = row.label.trim();
  normalized.slug = slugify(normalized.label, {
    lower: true,
    trim: true,
    strict: true
  });
  normalized.description = row.description.trim();
  normalized.price = parseFloat(
    row.price.replace(/[^\d,.-]/g, '').replace(',', '.')
  );
  normalized.image = row.image;
  normalized.available = row.available === 'Si';
  normalized.category_id = slugify(row.category, {
    lower: true,
    trim: true,
    strict: true
  });
  normalized.allergens = row.allergens.length ? row.allergens.split(',') : [];
  normalized.ingredients = row.ingredients.length
    ? row.ingredients.split(',')
    : [];

  return normalized;
};

export async function GET(): Promise<Response> {
  const filePath = path.join(process.cwd(), 'public', 'items.csv');

  const results: MenuItem[] = [];
  let currentItemId = 1;
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        const normalizedRow = normalizeItem(data, currentItemId);
        if (!normalizedRow) return;

        currentItemId++;
        return results.push(normalizedRow);
      })
      .on('end', () => {
        resolve(
          new Response(JSON.stringify(results), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      })
      .on('error', (err) => {
        reject(
          new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      });
  });
}
