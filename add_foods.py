import re

with open('src/data/foodDatabase.ts', 'r', encoding='utf-8') as f:
    text = f.read()

new_foods = """
  {
    id: 'd-6',
    nameAr: 'بيض',
    nameEn: 'Egg',
    category: 'dairy',
    calories: 143,
    protein: 12.6,
    carbs: 0.7,
    fat: 9.5,
    fiber: 0,
    defaultUnitWeight: 50,
    unitNameAr: 'بيضة',
    micros: {
      vitA_mcg: 140, vitC_mg: 0, vitD_mcg: 2, vitE_mg: 1, vitK_mcg: 0.3,
      vitB1_mg: 0.04, vitB2_mg: 0.5, vitB3_mg: 0.1, vitB6_mg: 0.17, vitB12_mcg: 0.89,
      folate_mcg: 47, calcium_mg: 56, iron_mg: 1.75, potassium_mg: 138, magnesium_mg: 12, zinc_mg: 1.29, sodium_mg: 142
    }
  },
  {
    id: 'd-7',
    nameAr: 'لبن زبادي',
    nameEn: 'Yogurt',
    category: 'dairy',
    calories: 61,
    protein: 3.5,
    carbs: 4.7,
    fat: 3.3,
    fiber: 0,
    defaultUnitWeight: 170,
    unitNameAr: 'علبة زبادي',
    micros: {
      vitA_mcg: 46, vitC_mg: 0, vitD_mcg: 1.3, vitE_mg: 0.07, vitK_mcg: 0.3,
      vitB1_mg: 0.04, vitB2_mg: 0.18, vitB3_mg: 0.1, vitB6_mg: 0.04, vitB12_mcg: 0.45,
      folate_mcg: 5, calcium_mg: 113, iron_mg: 0.03, potassium_mg: 132, magnesium_mg: 10, zinc_mg: 0.4, sodium_mg: 43
    }
  },
  {
    id: 'd-8',
    nameAr: 'جبن بلدي',
    nameEn: 'Baladi Cheese',
    category: 'dairy',
    calories: 250,
    protein: 15,
    carbs: 2,
    fat: 20,
    fiber: 0,
    defaultUnitWeight: 30,
    unitNameAr: 'شريحة',
    micros: {
      vitA_mcg: 100, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.2, vitK_mcg: 1.5,
      vitB1_mg: 0.05, vitB2_mg: 0.4, vitB3_mg: 0.1, vitB6_mg: 0.1, vitB12_mcg: 1,
      folate_mcg: 15, calcium_mg: 500, iron_mg: 0.5, potassium_mg: 70, magnesium_mg: 20, zinc_mg: 2, sodium_mg: 600
    }
  },
  {
    id: 'd-9',
    nameAr: 'جبن موزاريلا',
    nameEn: 'Mozzarella Cheese',
    category: 'dairy',
    calories: 300,
    protein: 22,
    carbs: 2.2,
    fat: 22,
    fiber: 0,
    defaultUnitWeight: 30,
    unitNameAr: 'شريحة',
    micros: {
      vitA_mcg: 150, vitC_mg: 0, vitD_mcg: 0.5, vitE_mg: 0.3, vitK_mcg: 2,
      vitB1_mg: 0.03, vitB2_mg: 0.3, vitB3_mg: 0.1, vitB6_mg: 0.1, vitB12_mcg: 1.5,
      folate_mcg: 10, calcium_mg: 700, iron_mg: 0.3, potassium_mg: 80, magnesium_mg: 25, zinc_mg: 3, sodium_mg: 500
    }
  },
  {
    id: 'd-10',
    nameAr: 'حليب كامل الدسم',
    nameEn: 'Whole Milk',
    category: 'dairy',
    calories: 61,
    protein: 3.2,
    carbs: 4.8,
    fat: 3.3,
    fiber: 0,
    defaultUnitWeight: 240,
    unitNameAr: 'كوب حليب',
    micros: {
      vitA_mcg: 46, vitC_mg: 0, vitD_mcg: 1.3, vitE_mg: 0.07, vitK_mcg: 0.3,
      vitB1_mg: 0.04, vitB2_mg: 0.18, vitB3_mg: 0.1, vitB6_mg: 0.04, vitB12_mcg: 0.45,
      folate_mcg: 5, calcium_mg: 113, iron_mg: 0.03, potassium_mg: 132, magnesium_mg: 10, zinc_mg: 0.4, sodium_mg: 43
    }
  },
  {
    id: 'd-11',
    nameAr: 'لبنة',
    nameEn: 'Labneh',
    category: 'dairy',
    calories: 150,
    protein: 8.5,
    carbs: 5.0,
    fat: 10,
    fiber: 0,
    defaultUnitWeight: 30,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 90, vitC_mg: 0, vitD_mcg: 0.1, vitE_mg: 0.1, vitK_mcg: 0.5,
      vitB1_mg: 0.03, vitB2_mg: 0.2, vitB3_mg: 0.15, vitB6_mg: 0.05, vitB12_mcg: 0.5,
      folate_mcg: 10, calcium_mg: 210, iron_mg: 0.1, potassium_mg: 160, magnesium_mg: 15, zinc_mg: 0.6, sodium_mg: 220
    }
  },
  {
    id: 'd-12',
    nameAr: 'جبنة سائلة',
    nameEn: 'Liquid Cheese',
    category: 'dairy',
    calories: 330,
    protein: 10,
    carbs: 5,
    fat: 30,
    fiber: 0,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 100, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.2, vitK_mcg: 1,
      vitB1_mg: 0.02, vitB2_mg: 0.2, vitB3_mg: 0.1, vitB6_mg: 0.05, vitB12_mcg: 0.5,
      folate_mcg: 5, calcium_mg: 300, iron_mg: 0.2, potassium_mg: 50, magnesium_mg: 10, zinc_mg: 1, sodium_mg: 800
    }
  },
"""

text = text.replace(
"""  // --- 5. مكسرات وبذور (NUTS & SEEDS) ---""",
new_foods + """  // --- 5. مكسرات وبذور (NUTS & SEEDS) ---"""
)

with open('src/data/foodDatabase.ts', 'w', encoding='utf-8') as f:
    f.write(text)
