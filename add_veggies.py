with open('src/data/foodDatabase.ts', 'r', encoding='utf-8') as f:
    text = f.read()

new_veggies = """
  ,
  {
    id: 'v-7',
    nameAr: 'خس',
    nameEn: 'Lettuce',
    category: 'vegetables',
    calories: 15,
    protein: 1.4,
    carbs: 2.9,
    fat: 0.2,
    fiber: 1.3,
    defaultUnitWeight: 36,
    unitNameAr: 'كوب مقطع',
    micros: {
      vitA_mcg: 370, vitC_mg: 9.2, vitD_mcg: 0, vitE_mg: 0.2, vitK_mcg: 126.3,
      vitB1_mg: 0.07, vitB2_mg: 0.08, vitB3_mg: 0.38, vitB6_mg: 0.09, vitB12_mcg: 0,
      folate_mcg: 38, calcium_mg: 36, iron_mg: 0.86, potassium_mg: 194, magnesium_mg: 13, zinc_mg: 0.18, sodium_mg: 28
    }
  },
  {
    id: 'v-8',
    nameAr: 'فلفل رومي (حلو)',
    nameEn: 'Bell Pepper',
    category: 'vegetables',
    calories: 20,
    protein: 0.9,
    carbs: 4.6,
    fat: 0.2,
    fiber: 1.7,
    defaultUnitWeight: 119,
    unitNameAr: 'ثمرة متوسطة',
    micros: {
      vitA_mcg: 18, vitC_mg: 80.4, vitD_mcg: 0, vitE_mg: 0.4, vitK_mcg: 7.4,
      vitB1_mg: 0.05, vitB2_mg: 0.03, vitB3_mg: 0.48, vitB6_mg: 0.22, vitB12_mcg: 0,
      folate_mcg: 10, calcium_mg: 10, iron_mg: 0.34, potassium_mg: 175, magnesium_mg: 10, zinc_mg: 0.13, sodium_mg: 3
    }
  },
  {
    id: 'v-9',
    nameAr: 'بصل أخضر',
    nameEn: 'Green Onion',
    category: 'vegetables',
    calories: 32,
    protein: 1.8,
    carbs: 7.3,
    fat: 0.2,
    fiber: 2.6,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 50, vitC_mg: 18.8, vitD_mcg: 0, vitE_mg: 0.5, vitK_mcg: 207,
      vitB1_mg: 0.05, vitB2_mg: 0.08, vitB3_mg: 0.52, vitB6_mg: 0.06, vitB12_mcg: 0,
      folate_mcg: 64, calcium_mg: 72, iron_mg: 1.48, potassium_mg: 276, magnesium_mg: 20, zinc_mg: 0.39, sodium_mg: 16
    }
  },
  {
    id: 'v-10',
    nameAr: 'بصل',
    nameEn: 'Onion',
    category: 'vegetables',
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    fiber: 1.7,
    defaultUnitWeight: 110,
    unitNameAr: 'بصلة متوسطة',
    micros: {
      vitA_mcg: 0, vitC_mg: 7.4, vitD_mcg: 0, vitE_mg: 0.02, vitK_mcg: 0.4,
      vitB1_mg: 0.05, vitB2_mg: 0.03, vitB3_mg: 0.12, vitB6_mg: 0.12, vitB12_mcg: 0,
      folate_mcg: 19, calcium_mg: 23, iron_mg: 0.21, potassium_mg: 146, magnesium_mg: 10, zinc_mg: 0.17, sodium_mg: 4
    }
  },
  {
    id: 'v-11',
    nameAr: 'بقدونس',
    nameEn: 'Parsley',
    category: 'vegetables',
    calories: 36,
    protein: 3,
    carbs: 6.3,
    fat: 0.8,
    fiber: 3.3,
    defaultUnitWeight: 10,
    unitNameAr: 'ملعقة كبيرة (مفروم)',
    micros: {
      vitA_mcg: 421, vitC_mg: 133, vitD_mcg: 0, vitE_mg: 0.7, vitK_mcg: 1640,
      vitB1_mg: 0.09, vitB2_mg: 0.1, vitB3_mg: 1.3, vitB6_mg: 0.09, vitB12_mcg: 0,
      folate_mcg: 152, calcium_mg: 138, iron_mg: 6.2, potassium_mg: 554, magnesium_mg: 50, zinc_mg: 1.1, sodium_mg: 56
    }
  },
  {
    id: 'v-12',
    nameAr: 'فجل',
    nameEn: 'Radish',
    category: 'vegetables',
    calories: 16,
    protein: 0.7,
    carbs: 3.4,
    fat: 0.1,
    fiber: 1.6,
    defaultUnitWeight: 9,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 0, vitC_mg: 14.8, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 1.3,
      vitB1_mg: 0.01, vitB2_mg: 0.04, vitB3_mg: 0.25, vitB6_mg: 0.07, vitB12_mcg: 0,
      folate_mcg: 25, calcium_mg: 25, iron_mg: 0.34, potassium_mg: 233, magnesium_mg: 10, zinc_mg: 0.28, sodium_mg: 39
    }
  },
  {
    id: 'v-13',
    nameAr: 'جرجير',
    nameEn: 'Arugula',
    category: 'vegetables',
    calories: 25,
    protein: 2.6,
    carbs: 3.7,
    fat: 0.7,
    fiber: 1.6,
    defaultUnitWeight: 20,
    unitNameAr: 'كوب (أوراق)',
    micros: {
      vitA_mcg: 119, vitC_mg: 15, vitD_mcg: 0, vitE_mg: 0.43, vitK_mcg: 108.6,
      vitB1_mg: 0.04, vitB2_mg: 0.09, vitB3_mg: 0.3, vitB6_mg: 0.07, vitB12_mcg: 0,
      folate_mcg: 97, calcium_mg: 160, iron_mg: 1.46, potassium_mg: 369, magnesium_mg: 47, zinc_mg: 0.47, sodium_mg: 27
    }
  },
  {
    id: 'v-14',
    nameAr: 'كزبرة',
    nameEn: 'Coriander/Cilantro',
    category: 'vegetables',
    calories: 23,
    protein: 2.1,
    carbs: 3.7,
    fat: 0.5,
    fiber: 2.8,
    defaultUnitWeight: 10,
    unitNameAr: 'ملعقة كبيرة (مفروم)',
    micros: {
      vitA_mcg: 337, vitC_mg: 27, vitD_mcg: 0, vitE_mg: 2.5, vitK_mcg: 310,
      vitB1_mg: 0.07, vitB2_mg: 0.16, vitB3_mg: 1.1, vitB6_mg: 0.15, vitB12_mcg: 0,
      folate_mcg: 62, calcium_mg: 67, iron_mg: 1.77, potassium_mg: 521, magnesium_mg: 26, zinc_mg: 0.5, sodium_mg: 46
    }
  },
  {
    id: 'v-15',
    nameAr: 'شمندر',
    nameEn: 'Beetroot',
    category: 'vegetables',
    calories: 43,
    protein: 1.6,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    defaultUnitWeight: 82,
    unitNameAr: 'ثمرة متوسطة',
    micros: {
      vitA_mcg: 2, vitC_mg: 4.9, vitD_mcg: 0, vitE_mg: 0.04, vitK_mcg: 0.2,
      vitB1_mg: 0.03, vitB2_mg: 0.04, vitB3_mg: 0.33, vitB6_mg: 0.07, vitB12_mcg: 0,
      folate_mcg: 109, calcium_mg: 16, iron_mg: 0.8, potassium_mg: 325, magnesium_mg: 23, zinc_mg: 0.35, sodium_mg: 78
    }
  },
  {
    id: 'v-16',
    nameAr: 'يقطين',
    nameEn: 'Pumpkin',
    category: 'vegetables',
    calories: 26,
    protein: 1,
    carbs: 6.5,
    fat: 0.1,
    fiber: 0.5,
    defaultUnitWeight: 245,
    unitNameAr: 'كوب مقطع',
    micros: {
      vitA_mcg: 426, vitC_mg: 9, vitD_mcg: 0, vitE_mg: 1.06, vitK_mcg: 1.1,
      vitB1_mg: 0.05, vitB2_mg: 0.11, vitB3_mg: 0.6, vitB6_mg: 0.06, vitB12_mcg: 0,
      folate_mcg: 16, calcium_mg: 21, iron_mg: 0.8, potassium_mg: 340, magnesium_mg: 12, zinc_mg: 0.32, sodium_mg: 1
    }
  },
  {
    id: 'v-17',
    nameAr: 'ملفوف أخضر',
    nameEn: 'Green Cabbage',
    category: 'vegetables',
    calories: 25,
    protein: 1.3,
    carbs: 5.8,
    fat: 0.1,
    fiber: 2.5,
    defaultUnitWeight: 89,
    unitNameAr: 'كوب مقطع',
    micros: {
      vitA_mcg: 5, vitC_mg: 36.6, vitD_mcg: 0, vitE_mg: 0.15, vitK_mcg: 76,
      vitB1_mg: 0.06, vitB2_mg: 0.04, vitB3_mg: 0.23, vitB6_mg: 0.12, vitB12_mcg: 0,
      folate_mcg: 43, calcium_mg: 40, iron_mg: 0.47, potassium_mg: 170, magnesium_mg: 12, zinc_mg: 0.18, sodium_mg: 18
    }
  },
  {
    id: 'v-18',
    nameAr: 'ملفوف أحمر',
    nameEn: 'Red Cabbage',
    category: 'vegetables',
    calories: 31,
    protein: 1.4,
    carbs: 7.4,
    fat: 0.2,
    fiber: 2.1,
    defaultUnitWeight: 89,
    unitNameAr: 'كوب مقطع',
    micros: {
      vitA_mcg: 56, vitC_mg: 57, vitD_mcg: 0, vitE_mg: 0.11, vitK_mcg: 38.2,
      vitB1_mg: 0.06, vitB2_mg: 0.07, vitB3_mg: 0.42, vitB6_mg: 0.21, vitB12_mcg: 0,
      folate_mcg: 18, calcium_mg: 45, iron_mg: 0.8, potassium_mg: 243, magnesium_mg: 16, zinc_mg: 0.22, sodium_mg: 27
    }
  },
  {
    id: 'v-19',
    nameAr: 'كوسا',
    nameEn: 'Zucchini',
    category: 'vegetables',
    calories: 17,
    protein: 1.2,
    carbs: 3.1,
    fat: 0.3,
    fiber: 1,
    defaultUnitWeight: 196,
    unitNameAr: 'ثمرة متوسطة',
    micros: {
      vitA_mcg: 10, vitC_mg: 17.9, vitD_mcg: 0, vitE_mg: 0.12, vitK_mcg: 4.3,
      vitB1_mg: 0.04, vitB2_mg: 0.09, vitB3_mg: 0.45, vitB6_mg: 0.16, vitB12_mcg: 0,
      folate_mcg: 24, calcium_mg: 16, iron_mg: 0.37, potassium_mg: 261, magnesium_mg: 18, zinc_mg: 0.32, sodium_mg: 8
    }
  },
  {
    id: 'v-20',
    nameAr: 'باذنجان',
    nameEn: 'Eggplant',
    category: 'vegetables',
    calories: 25,
    protein: 1,
    carbs: 5.9,
    fat: 0.2,
    fiber: 3,
    defaultUnitWeight: 82,
    unitNameAr: 'كوب مقطع',
    micros: {
      vitA_mcg: 1, vitC_mg: 2.2, vitD_mcg: 0, vitE_mg: 0.3, vitK_mcg: 3.5,
      vitB1_mg: 0.04, vitB2_mg: 0.04, vitB3_mg: 0.65, vitB6_mg: 0.08, vitB12_mcg: 0,
      folate_mcg: 22, calcium_mg: 9, iron_mg: 0.24, potassium_mg: 229, magnesium_mg: 14, zinc_mg: 0.16, sodium_mg: 2
    }
  },
  {
    id: 'v-21',
    nameAr: 'فاصوليا خضراء',
    nameEn: 'Green Beans',
    category: 'vegetables',
    calories: 31,
    protein: 1.8,
    carbs: 7,
    fat: 0.2,
    fiber: 2.7,
    defaultUnitWeight: 100,
    unitNameAr: 'كوب مقطع',
    micros: {
      vitA_mcg: 35, vitC_mg: 12.2, vitD_mcg: 0, vitE_mg: 0.41, vitK_mcg: 14.4,
      vitB1_mg: 0.08, vitB2_mg: 0.1, vitB3_mg: 0.73, vitB6_mg: 0.14, vitB12_mcg: 0,
      folate_mcg: 33, calcium_mg: 37, iron_mg: 1.03, potassium_mg: 211, magnesium_mg: 25, zinc_mg: 0.24, sodium_mg: 6
    }
  },
  {
    id: 'v-22',
    nameAr: 'بازلاء خضراء',
    nameEn: 'Green Peas',
    category: 'vegetables',
    calories: 81,
    protein: 5.4,
    carbs: 14.5,
    fat: 0.4,
    fiber: 5.7,
    defaultUnitWeight: 145,
    unitNameAr: 'كوب',
    micros: {
      vitA_mcg: 38, vitC_mg: 40, vitD_mcg: 0, vitE_mg: 0.13, vitK_mcg: 24.8,
      vitB1_mg: 0.27, vitB2_mg: 0.13, vitB3_mg: 2.09, vitB6_mg: 0.17, vitB12_mcg: 0,
      folate_mcg: 65, calcium_mg: 25, iron_mg: 1.47, potassium_mg: 244, magnesium_mg: 33, zinc_mg: 1.24, sodium_mg: 5
    }
  },
  {
    id: 'v-23',
    nameAr: 'ثوم',
    nameEn: 'Garlic',
    category: 'vegetables',
    calories: 149,
    protein: 6.4,
    carbs: 33.1,
    fat: 0.5,
    fiber: 2.1,
    defaultUnitWeight: 3,
    unitNameAr: 'فص ثوم',
    micros: {
      vitA_mcg: 0, vitC_mg: 31.2, vitD_mcg: 0, vitE_mg: 0.08, vitK_mcg: 1.7,
      vitB1_mg: 0.2, vitB2_mg: 0.11, vitB3_mg: 0.6, vitB6_mg: 1.24, vitB12_mcg: 0,
      folate_mcg: 3, calcium_mg: 181, iron_mg: 1.7, potassium_mg: 401, magnesium_mg: 25, zinc_mg: 1.16, sodium_mg: 17
    }
  },
  {
    id: 'v-24',
    nameAr: 'بطاطا حلوة',
    nameEn: 'Sweet Potato',
    category: 'vegetables',
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    fiber: 3,
    defaultUnitWeight: 130,
    unitNameAr: 'ثمرة متوسطة',
    micros: {
      vitA_mcg: 709, vitC_mg: 2.4, vitD_mcg: 0, vitE_mg: 0.26, vitK_mcg: 1.8,
      vitB1_mg: 0.08, vitB2_mg: 0.06, vitB3_mg: 0.56, vitB6_mg: 0.21, vitB12_mcg: 0,
      folate_mcg: 11, calcium_mg: 30, iron_mg: 0.61, potassium_mg: 337, magnesium_mg: 25, zinc_mg: 0.3, sodium_mg: 55
    }
  },
  {
    id: 'v-25',
    nameAr: 'فطر (مشروم)',
    nameEn: 'Mushroom',
    category: 'vegetables',
    calories: 22,
    protein: 3.1,
    carbs: 3.3,
    fat: 0.3,
    fiber: 1,
    defaultUnitWeight: 70,
    unitNameAr: 'كوب مقطع',
    micros: {
      vitA_mcg: 0, vitC_mg: 2.1, vitD_mcg: 0.2, vitE_mg: 0.01, vitK_mcg: 0,
      vitB1_mg: 0.08, vitB2_mg: 0.4, vitB3_mg: 3.6, vitB6_mg: 0.1, vitB12_mcg: 0,
      folate_mcg: 17, calcium_mg: 3, iron_mg: 0.5, potassium_mg: 318, magnesium_mg: 9, zinc_mg: 0.52, sodium_mg: 5
    }
  },
  {
    id: 'v-26',
    nameAr: 'كرفس',
    nameEn: 'Celery',
    category: 'vegetables',
    calories: 14,
    protein: 0.7,
    carbs: 3,
    fat: 0.2,
    fiber: 1.6,
    defaultUnitWeight: 40,
    unitNameAr: 'ساق متوسطة',
    micros: {
      vitA_mcg: 22, vitC_mg: 3.1, vitD_mcg: 0, vitE_mg: 0.27, vitK_mcg: 29.3,
      vitB1_mg: 0.02, vitB2_mg: 0.06, vitB3_mg: 0.32, vitB6_mg: 0.07, vitB12_mcg: 0,
      folate_mcg: 36, calcium_mg: 40, iron_mg: 0.2, potassium_mg: 260, magnesium_mg: 11, zinc_mg: 0.13, sodium_mg: 80
    }
  },
  {
    id: 'v-27',
    nameAr: 'كرنب (كيل)',
    nameEn: 'Kale',
    category: 'vegetables',
    calories: 43,
    protein: 2.9,
    carbs: 8.8,
    fat: 1.5,
    fiber: 4.1,
    defaultUnitWeight: 67,
    unitNameAr: 'كوب أوراق',
    micros: {
      vitA_mcg: 241, vitC_mg: 93.4, vitD_mcg: 0, vitE_mg: 0.85, vitK_mcg: 389.9,
      vitB1_mg: 0.11, vitB2_mg: 0.35, vitB3_mg: 1.18, vitB6_mg: 0.14, vitB12_mcg: 0,
      folate_mcg: 62, calcium_mg: 254, iron_mg: 1.6, potassium_mg: 348, magnesium_mg: 33, zinc_mg: 0.39, sodium_mg: 53
    }
  },
  {
    id: 'v-28',
    nameAr: 'ملوخية',
    nameEn: 'Molokhia',
    category: 'vegetables',
    calories: 34,
    protein: 4.7,
    carbs: 5.8,
    fat: 0.3,
    fiber: 2,
    defaultUnitWeight: 100,
    unitNameAr: 'كوب',
    micros: {
      vitA_mcg: 259, vitC_mg: 37, vitD_mcg: 0, vitE_mg: 2.26, vitK_mcg: 108,
      vitB1_mg: 0.13, vitB2_mg: 0.55, vitB3_mg: 1.3, vitB6_mg: 0.6, vitB12_mcg: 0,
      folate_mcg: 123, calcium_mg: 208, iron_mg: 4.8, potassium_mg: 557, magnesium_mg: 64, zinc_mg: 0.8, sodium_mg: 8
    }
  }
"""

text = text.replace("];", new_veggies + "\n];")

with open('src/data/foodDatabase.ts', 'w', encoding='utf-8') as f:
    f.write(text)
