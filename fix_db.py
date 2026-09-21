with open('src/data/foodDatabase.ts', 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split("export const INITIAL_FOOD_DATABASE: FoodItem[] = [")
categories_part = parts[0]
items_part = parts[1]

# In categories_part, remove everything from '  ,\n  {\n    id: \'v-7\'' to the end
idx = categories_part.find("  ,\n  {\n    id: 'v-7'")
if idx != -1:
    categories_part = categories_part[:idx] + "];\n\n"

# In items_part, it has the v-7 ... v-28 at the end if I replaced all `];`
# Wait, I used text.replace("];", new_veggies + "\n];") so it replaced ALL occurrences!
# So it appended to CATEGORIES and INITIAL_FOOD_DATABASE.
# Let's just fix both arrays.

# First, restore original Categories
idx_v7_cat = categories_part.find("  ,\n  {\n    id: 'v-7'")
if idx_v7_cat != -1:
    categories_part = categories_part[:idx_v7_cat] + "];\n\n"

# Then in items_part, find the first v-7
idx_v7_item = items_part.find("  ,\n  {\n    id: 'v-7'")
# we want to KEEP the one in items_part, assuming it's correctly placed at the end before ];
# Wait, items_part now contains new_veggies and ends with `\n];`

with open('src/data/foodDatabase.ts', 'w', encoding='utf-8') as f:
    f.write(categories_part + "export const INITIAL_FOOD_DATABASE: FoodItem[] = [" + items_part)

