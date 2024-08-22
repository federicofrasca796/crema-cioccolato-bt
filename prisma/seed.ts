import { Prisma, PrismaClient } from '@prisma/client';
import csvParser from 'csv-parser';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { categories } from './data/categories';
import { topics } from './data/topics';
import { extraItems } from './data/extras';

interface CSVItem {
  label: string;
  description: string;
  price: string;
  image: string;
  ingredients: string;
  allergens: string;
  available: string;
  category: string;
}

const prisma = new PrismaClient();

async function main() {
  try {
    await seedTopics(topics);
    await seedItemsAndCategories();
    await seedExtraItems();

    console.log('Seeding complete.');
  } catch (error: Error | any) {
    console.error('Error seeding data: ', error.message);
  }
}

async function seedTopics(topics: Prisma.TopicCreateInput[]) {
  try {
    for (const topic of topics) {
      await prisma.topic.upsert({
        update: {},
        where: {
          slug: topic.slug
        },
        create: topic
      });
    }

    console.log('Topics seeded successfully.');
  } catch (error: Error | any) {
    throw new Error(error.message, { cause: 'topics' });
  }
}

function seedItemsAndCategories() {
  const filePath = path.join(process.cwd(), 'public', 'items.csv');

  // TODO - add type safety
  let items: any[] = [];

  return new Promise((res, rej) =>
    fs
      .createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (item: CSVItem) => {
        if (!item.label || !item.category) return;

        const connectedCategory = categories.find(
          (category) =>
            category.slug ===
            slugify(item.category, { lower: true, strict: true })
        );
        if (!connectedCategory)
          throw new Error(
            `Invalid category '${slugify(item.category, { lower: true, strict: true })}'.`
          );

        const parsedItem = {
          label: item.label.trim(),
          description: item.description.trim() || null,
          price: parseFloat(
            item.price.replace(/[^\d,.-]/g, '').replace(',', '.')
          ),
          image: item.image.trim() || null,
          ingredients: item.ingredients.length
            ? item.ingredients.split(',')
            : [],
          allergens: item.allergens.length ? item.allergens.split(',') : [],
          available: item.available === 'Si',
          slug: slugify(item.label, { lower: true, strict: true }),
          category: connectedCategory
        };
        items.push(parsedItem);
      })
      .on('end', async () => {
        for (const item of items) {
          try {
            await prisma.item.upsert({
              update: {},
              where: {
                slug: slugify(item.label, { lower: true, strict: true })
              },
              create: {
                ...item,
                category: {
                  connectOrCreate: {
                    where: {
                      slug: slugify(item.category.slug, {
                        lower: true,
                        strict: true
                      })
                    },
                    create: {
                      ...item.category
                    }
                  }
                }
              }
            });
          } catch (error: Error | any) {
            throw new Error(
              `Cannot create item '${item.slug}' with category '${slugify(item.category.slug, { lower: true, strict: true })}' :: \n ${error.message}`,
              {
                cause: {
                  ...item,
                  category: {
                    connectOrCreate: JSON.stringify({
                      where: {
                        slug: slugify(item.category, {
                          lower: true,
                          strict: true
                        })
                      },
                      create: {
                        ...item.category
                      }
                    })
                  }
                }
              }
            );
          }
        }

        console.log('Items seeded successfully.');
        res(items);
      })
      .on('error', (error) => {
        console.error('Error reading CSV file:', error);
        rej(error);
      })
  );
}

async function seedExtraItems() {
  try {
    for (const extra of extraItems) {
      await prisma.extraItem.upsert({
        update: {},
        where: {
          slug: extra.slug
        },
        create: extra
      });
    }

    console.log('Extra items seeded successfully.');
  } catch (error: Error | any) {
    throw new Error(error.message, { cause: 'extra' });
  }
}

// Execute
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
