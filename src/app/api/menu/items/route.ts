import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { MenuItem } from '@/data/menu/items';

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

function slugify(str: string) {
  return str
    .toLowerCase() // Convert the string to lowercase
    .replace(/\s+e\s+/g, '-') // Remove non-word characters and '&', 'e'
    .replace(/\s+&\s+/g, '-') // Remove non-word characters and '&', 'e'
    .replace(/\s+/g, '-') // Replace spaces with a dash
    .replace(/--+/g, '-') // Replace multiple dashes with a single dash
    .trim(); // Trim leading and trailing whitespace
}

const normalizeRow = (row: ItemsTableRow, index: number) => {
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
  normalized.slug = slugify(normalized.label);
  normalized.description = row.description.trim();
  normalized.price = parseFloat(
    row.price.replace(/[^\d,.-]/g, '').replace(',', '.')
  );
  normalized.image = row.image;
  normalized.available = row.available === 'Si' ? true : false;
  normalized.category_id = slugify(row.category);
  normalized.allergens = row.allergens.length ? row.allergens.split(',') : [];
  normalized.ingredients = row.ingredients.length
    ? row.ingredients.split(',')
    : [];

  return normalized;
};

export async function GET(): Promise<Response> {
  const filePath = path.join(process.cwd(), 'public', 'data.csv');

  const results: MenuItem[] = [];
  let currentItemId = 1;
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        console.info('row', data);
        const normalizedRow = normalizeRow(data, currentItemId);
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
