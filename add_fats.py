import re

with open('src/data/foodDatabase.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Update n-1 and n-2 to 'oils'
content = content.replace("id: 'n-1',\n    nameAr: 'لوز نيء/محمص',\n    nameEn: 'Almonds',\n    category: 'nuts',", "id: 'n-1',\n    nameAr: 'لوز نيء/محمص',\n    nameEn: 'Almonds',\n    category: 'oils',")
content = content.replace("id: 'n-2',\n    nameAr: 'جوز (عين جمل)',\n    nameEn: 'Walnuts',\n    category: 'nuts',", "id: 'n-2',\n    nameAr: 'جوز (عين جمل)',\n    nameEn: 'Walnuts',\n    category: 'oils',")

new_items = """
  {
    id: 'o-5',
    nameAr: 'كاجو نيء/محمص',
    nameEn: 'Cashews',
    category: 'oils',
    calories: 553,
    protein: 18.2,
    carbs: 30.2,
    fat: 43.8,
    fiber: 3.3,
    defaultUnitWeight: 15,
    unitNameAr: 'حفنة (15 حبة)',
    micros: {
      vitA_mcg: 0, vitC_mg: 0.5, vitD_mcg: 0, vitE_mg: 0.9, vitK_mcg: 34.1,
      vitB1_mg: 0.42, vitB2_mg: 0.06, vitB3_mg: 1.1, vitB6_mg: 0.42, vitB12_mcg: 0,
      folate_mcg: 25, calcium_mg: 37, iron_mg: 6.7, potassium_mg: 660, magnesium_mg: 292, zinc_mg: 5.8, sodium_mg: 12
    }
  },
  {
    id: 'o-6',
    nameAr: 'بذور دوار الشمس',
    nameEn: 'Sunflower Seeds',
    category: 'oils',
    calories: 584,
    protein: 20.8,
    carbs: 20,
    fat: 51.5,
    fiber: 8.6,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 3, vitC_mg: 1.4, vitD_mcg: 0, vitE_mg: 35.2, vitK_mcg: 2.7,
      vitB1_mg: 1.48, vitB2_mg: 0.35, vitB3_mg: 8.3, vitB6_mg: 1.34, vitB12_mcg: 0,
      folate_mcg: 227, calcium_mg: 78, iron_mg: 5.3, potassium_mg: 645, magnesium_mg: 325, zinc_mg: 5, sodium_mg: 9
    }
  },
  {
    id: 'o-7',
    nameAr: 'زيت جوز الهند',
    nameEn: 'Coconut Oil',
    category: 'oils',
    calories: 862,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.1, vitK_mcg: 0.5,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 1, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    }
  },
  {
    id: 'o-8',
    nameAr: 'سمنة (سمن حيواني)',
    nameEn: 'Ghee',
    category: 'oils',
    calories: 900,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 840, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 2.8, vitK_mcg: 8.6,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 4, iron_mg: 0, potassium_mg: 5, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    }
  },
  {
    id: 'o-9',
    nameAr: 'زبدة نباتية (مارجرين)',
    nameEn: 'Margarine',
    category: 'oils',
    calories: 717,
    protein: 0.2,
    carbs: 0.7,
    fat: 80.5,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 819, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 9, vitK_mcg: 93,
      vitB1_mg: 0.01, vitB2_mg: 0.02, vitB3_mg: 0.01, vitB6_mg: 0.01, vitB12_mcg: 0.07,
      folate_mcg: 1, calcium_mg: 3, iron_mg: 0.03, potassium_mg: 18, magnesium_mg: 1, zinc_mg: 0.01, sodium_mg: 743
    }
  },
  {
    id: 'o-10',
    nameAr: 'زيت الذرة',
    nameEn: 'Corn Oil',
    category: 'oils',
    calories: 900,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 14.3, vitK_mcg: 1.9,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    }
  },
  {
    id: 'o-11',
    nameAr: 'زيت الكانولا',
    nameEn: 'Canola Oil',
    category: 'oils',
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 17.5, vitK_mcg: 71.3,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    }
  },
  {
    id: 'o-12',
    nameAr: 'زيت دوار الشمس',
    nameEn: 'Sunflower Oil',
    category: 'oils',
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 41, vitK_mcg: 5.4,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    }
  },
  {
    id: 'o-13',
    nameAr: 'بذور اليقطين (قرع)',
    nameEn: 'Pumpkin Seeds',
    category: 'oils',
    calories: 574,
    protein: 29.8,
    carbs: 14.7,
    fat: 49,
    fiber: 6.5,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 1, vitC_mg: 0.3, vitD_mcg: 0, vitE_mg: 0.6, vitK_mcg: 4.5,
      vitB1_mg: 0.21, vitB2_mg: 0.32, vitB3_mg: 1.7, vitB6_mg: 0.22, vitB12_mcg: 0,
      folate_mcg: 57, calcium_mg: 55, iron_mg: 8, potassium_mg: 788, magnesium_mg: 550, zinc_mg: 7.6, sodium_mg: 18
    }
  }
"""

content = content.replace("];\n", new_items + "\n];\n")

with open('src/data/foodDatabase.ts', 'w', encoding='utf-8') as f:
    f.write(content)
