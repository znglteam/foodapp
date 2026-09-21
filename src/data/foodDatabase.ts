import { FoodCategory, CategoryInfo, FoodItem } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'fruits',
    nameAr: 'فاكهة',
    iconName: 'Apple',
    color: 'text-[#bb5791] dark:text-[#bb5791]',
    bgLight: 'bg-[#bb5791]/10 border-[#bb5791]/30',
    description: 'تفاح، موز، برتقال، مانغو، تمر، رطب، كيوي، فراولة، وغيرها'
  },
  {
    id: 'vegetables',
    nameAr: 'خضار',
    iconName: 'Carrot',
    color: 'text-[#71a874] dark:text-[#71a874]',
    bgLight: 'bg-[#71a874]/10 border-[#71a874]/30',
    description: 'طماطم، خيار، سبانخ، بروكلي، خضروات ورقية'
  },
  {
    id: 'meats',
    nameAr: 'لحوم',
    iconName: 'Beef',
    color: 'text-[#bb5791] dark:text-[#bb5791]',
    bgLight: 'bg-[#bb5791]/10 border-[#bb5791]/30',
    description: 'دجاج، لحم بقر، أسماك، بيض'
  },
  {
    id: 'dairy',
    nameAr: 'أجبان وألبان',
    iconName: 'Milk',
    color: 'text-[#607fc4] dark:text-[#607fc4]',
    bgLight: 'bg-[#607fc4]/10 border-[#607fc4]/30',
    description: 'زبادي، أجبان، لبنة، قشطة'
  },
  {
    id: 'nuts',
    nameAr: 'مكسرات',
    iconName: 'Nut',
    color: 'text-[#71a874] dark:text-[#71a874]',
    bgLight: 'bg-[#71a874]/10 border-[#71a874]/30',
    description: 'فول سوداني، لوز، جوز، كاجو، بذور، بودرة كاكاو'
  },
  {
    id: 'grains',
    nameAr: 'حبوب وبقول',
    iconName: 'Wheat',
    color: 'text-[#607fc4] dark:text-[#607fc4]',
    bgLight: 'bg-[#607fc4]/10 border-[#607fc4]/30',
    description: 'أرز، شوفان، عدس، حمص، فول، برغل، معكرونة'
  },
  {
    id: 'oils',
    nameAr: 'زيوت ودهون',
    iconName: 'Droplet',
    color: 'text-[#414141] dark:text-slate-300',
    bgLight: 'bg-[#414141]/10 border-[#414141]/30',
    description: 'زيت زيتون، زبدة، طحينة، زبدة فول سوداني'
  },
  {
    id: 'supplements',
    nameAr: 'مكملات غذائية',
    iconName: 'Pill',
    color: 'text-[#607fc4] dark:text-[#607fc4]',
    bgLight: 'bg-[#607fc4]/10 border-[#607fc4]/30',
    description: 'فيتامين أ، ب كومبلكس، سي، د، هـ، ك، فوسفور، سيلينيوم، حديد، مغنيسيوم، بوتاسيوم، كالسيوم، أوميغا 3، زنك'
  }
];

export const INITIAL_FOOD_DATABASE: FoodItem[] = [
  // --- 1. فاكهة (FRUITS) ---
  {
    id: 'f-1',
    nameAr: 'تفاح',
    nameEn: 'Apple',
    category: 'fruits',
    calories: 52,
    protein: 0.3,
    carbs: 13.8,
    fat: 0.2,
    fiber: 2.4,
    defaultUnitWeight: 150,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 3, vitC_mg: 4.6, vitD_mcg: 0, vitE_mg: 0.18, vitK_mcg: 2.2,
      vitB1_mg: 0.017, vitB2_mg: 0.026, vitB3_mg: 0.091, vitB5_mg: 0.061, vitB6_mg: 0.041, vitB12_mcg: 0,
      folate_mcg: 3, calcium_mg: 6, iron_mg: 0.12, potassium_mg: 107, magnesium_mg: 5, zinc_mg: 0.04, sodium_mg: 1,
      omega3_mg: 9, omega6_mg: 43, phosphorus_mg: 11, selenium_mcg: 0.2, copper_mg: 0.03, manganese_mg: 0.04
    }
  },
  {
    id: 'f-2',
    nameAr: 'موز',
    nameEn: 'Banana',
    category: 'fruits',
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    fiber: 2.6,
    defaultUnitWeight: 120,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 3, vitC_mg: 8.7, vitD_mcg: 0, vitE_mg: 0.1, vitK_mcg: 0.5,
      vitB1_mg: 0.031, vitB2_mg: 0.073, vitB3_mg: 0.665, vitB5_mg: 0.334, vitB6_mg: 0.367, vitB12_mcg: 0,
      folate_mcg: 20, calcium_mg: 5, iron_mg: 0.26, potassium_mg: 358, magnesium_mg: 27, zinc_mg: 0.15, sodium_mg: 1,
      omega3_mg: 27, omega6_mg: 46, phosphorus_mg: 22, selenium_mcg: 1.0, copper_mg: 0.08, manganese_mg: 0.27
    }
  },
  {
    id: 'f-3',
    nameAr: 'برتقال',
    nameEn: 'Orange',
    category: 'fruits',
    calories: 47,
    protein: 0.9,
    carbs: 11.8,
    fat: 0.1,
    fiber: 2.4,
    defaultUnitWeight: 130,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 11, vitC_mg: 53.2, vitD_mcg: 0, vitE_mg: 0.18, vitK_mcg: 0,
      vitB1_mg: 0.087, vitB2_mg: 0.04, vitB3_mg: 0.282, vitB5_mg: 0.25, vitB6_mg: 0.06, vitB12_mcg: 0,
      folate_mcg: 30, calcium_mg: 40, iron_mg: 0.1, potassium_mg: 181, magnesium_mg: 10, zinc_mg: 0.07, sodium_mg: 0,
      omega3_mg: 7, omega6_mg: 16, phosphorus_mg: 14, selenium_mcg: 0.5, copper_mg: 0.05, manganese_mg: 0.025
    }
  },
  {
    id: 'f-4',
    nameAr: 'ليمون',
    nameEn: 'Lemon',
    category: 'fruits',
    calories: 29,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.3,
    fiber: 2.8,
    defaultUnitWeight: 80,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 1, vitC_mg: 53.0, vitD_mcg: 0, vitE_mg: 0.15, vitK_mcg: 0,
      vitB1_mg: 0.04, vitB2_mg: 0.02, vitB3_mg: 0.1, vitB5_mg: 0.19, vitB6_mg: 0.08, vitB12_mcg: 0,
      folate_mcg: 11, calcium_mg: 26, iron_mg: 0.6, potassium_mg: 138, magnesium_mg: 8, zinc_mg: 0.06, sodium_mg: 2,
      omega3_mg: 26, omega6_mg: 63, phosphorus_mg: 16, selenium_mcg: 0.4, copper_mg: 0.04, manganese_mg: 0.03
    }
  },
  {
    id: 'f-5',
    nameAr: 'يوسفي',
    nameEn: 'Tangerine / Mandarin',
    category: 'fruits',
    calories: 53,
    protein: 0.8,
    carbs: 13.3,
    fat: 0.3,
    fiber: 1.8,
    defaultUnitWeight: 90,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 34, vitC_mg: 26.7, vitD_mcg: 0, vitE_mg: 0.2, vitK_mcg: 0,
      vitB1_mg: 0.06, vitB2_mg: 0.04, vitB3_mg: 0.38, vitB5_mg: 0.21, vitB6_mg: 0.08, vitB12_mcg: 0,
      folate_mcg: 16, calcium_mg: 37, iron_mg: 0.15, potassium_mg: 166, magnesium_mg: 12, zinc_mg: 0.07, sodium_mg: 2,
      omega3_mg: 18, omega6_mg: 44, phosphorus_mg: 20, selenium_mcg: 0.1, copper_mg: 0.04, manganese_mg: 0.04
    }
  },
  {
    id: 'f-6',
    nameAr: 'كيوي',
    nameEn: 'Kiwi',
    category: 'fruits',
    calories: 61,
    protein: 1.1,
    carbs: 14.7,
    fat: 0.5,
    fiber: 3.0,
    defaultUnitWeight: 75,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 4, vitC_mg: 92.7, vitD_mcg: 0, vitE_mg: 1.46, vitK_mcg: 40.3,
      vitB1_mg: 0.03, vitB2_mg: 0.03, vitB3_mg: 0.34, vitB5_mg: 0.18, vitB6_mg: 0.06, vitB12_mcg: 0,
      folate_mcg: 25, calcium_mg: 34, iron_mg: 0.31, potassium_mg: 312, magnesium_mg: 17, zinc_mg: 0.14, sodium_mg: 3,
      omega3_mg: 42, omega6_mg: 246, phosphorus_mg: 34, selenium_mcg: 0.2, copper_mg: 0.13, manganese_mg: 0.10
    }
  },
  {
    id: 'f-7',
    nameAr: 'فراولة',
    nameEn: 'Strawberry',
    category: 'fruits',
    calories: 32,
    protein: 0.7,
    carbs: 7.7,
    fat: 0.3,
    fiber: 2.0,
    defaultUnitWeight: 18,
    unitNameAr: 'حبة كبيرة',
    micros: {
      vitA_mcg: 1, vitC_mg: 58.8, vitD_mcg: 0, vitE_mg: 0.29, vitK_mcg: 2.2,
      vitB1_mg: 0.024, vitB2_mg: 0.022, vitB3_mg: 0.386, vitB5_mg: 0.125, vitB6_mg: 0.047, vitB12_mcg: 0,
      folate_mcg: 24, calcium_mg: 16, iron_mg: 0.41, potassium_mg: 153, magnesium_mg: 13, zinc_mg: 0.14, sodium_mg: 1,
      omega3_mg: 65, omega6_mg: 90, phosphorus_mg: 24, selenium_mcg: 0.4, copper_mg: 0.05, manganese_mg: 0.39
    }
  },
  {
    id: 'f-8',
    nameAr: 'توت',
    nameEn: 'Berries',
    category: 'fruits',
    calories: 43,
    protein: 1.4,
    carbs: 9.6,
    fat: 0.5,
    fiber: 5.3,
    defaultUnitWeight: 10,
    unitNameAr: 'حبة توت',
    micros: {
      vitA_mcg: 11, vitC_mg: 21.0, vitD_mcg: 0, vitE_mg: 0.87, vitK_mcg: 19.8,
      vitB1_mg: 0.02, vitB2_mg: 0.03, vitB3_mg: 0.6, vitB5_mg: 0.27, vitB6_mg: 0.03, vitB12_mcg: 0,
      folate_mcg: 25, calcium_mg: 29, iron_mg: 0.62, potassium_mg: 162, magnesium_mg: 20, zinc_mg: 0.53, sodium_mg: 1,
      omega3_mg: 94, omega6_mg: 242, phosphorus_mg: 22, selenium_mcg: 0.4, copper_mg: 0.09, manganese_mg: 0.65
    }
  },
  {
    id: 'f-9',
    nameAr: 'مشمش',
    nameEn: 'Apricot',
    category: 'fruits',
    calories: 48,
    protein: 1.4,
    carbs: 11.1,
    fat: 0.4,
    fiber: 2.0,
    defaultUnitWeight: 35,
    unitNameAr: 'حبة مشمش',
    micros: {
      vitA_mcg: 96, vitC_mg: 10.0, vitD_mcg: 0, vitE_mg: 0.89, vitK_mcg: 3.3,
      vitB1_mg: 0.03, vitB2_mg: 0.04, vitB3_mg: 0.6, vitB5_mg: 0.24, vitB6_mg: 0.05, vitB12_mcg: 0,
      folate_mcg: 9, calcium_mg: 14, iron_mg: 0.39, potassium_mg: 259, magnesium_mg: 10, zinc_mg: 0.2, sodium_mg: 1,
      omega3_mg: 1, omega6_mg: 16, phosphorus_mg: 23, selenium_mcg: 0.1, copper_mg: 0.08, manganese_mg: 0.08
    }
  },
  {
    id: 'f-10',
    nameAr: 'كرز',
    nameEn: 'Cherry',
    category: 'fruits',
    calories: 50,
    protein: 1.0,
    carbs: 12.2,
    fat: 0.3,
    fiber: 1.6,
    defaultUnitWeight: 8,
    unitNameAr: 'حبة كرز',
    micros: {
      vitA_mcg: 6, vitC_mg: 10.0, vitD_mcg: 0, vitE_mg: 0.07, vitK_mcg: 2.1,
      vitB1_mg: 0.03, vitB2_mg: 0.03, vitB3_mg: 0.15, vitB5_mg: 0.13, vitB6_mg: 0.04, vitB12_mcg: 0,
      folate_mcg: 4, calcium_mg: 16, iron_mg: 0.32, potassium_mg: 173, magnesium_mg: 9, zinc_mg: 0.06, sodium_mg: 0,
      omega3_mg: 38, omega6_mg: 48, phosphorus_mg: 15, selenium_mcg: 0.1, copper_mg: 0.06, manganese_mg: 0.07
    }
  },
  {
    id: 'f-11',
    nameAr: 'خوخ',
    nameEn: 'Plum',
    category: 'fruits',
    calories: 46,
    protein: 0.7,
    carbs: 11.4,
    fat: 0.3,
    fiber: 1.4,
    defaultUnitWeight: 65,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 17, vitC_mg: 9.5, vitD_mcg: 0, vitE_mg: 0.26, vitK_mcg: 6.4,
      vitB1_mg: 0.03, vitB2_mg: 0.03, vitB3_mg: 0.42, vitB5_mg: 0.135, vitB6_mg: 0.03, vitB12_mcg: 0,
      folate_mcg: 5, calcium_mg: 6, iron_mg: 0.17, potassium_mg: 157, magnesium_mg: 7, zinc_mg: 0.1, sodium_mg: 0,
      omega3_mg: 19, omega6_mg: 48, phosphorus_mg: 16, selenium_mcg: 0.5, copper_mg: 0.06, manganese_mg: 0.05
    }
  },
  {
    id: 'f-12',
    nameAr: 'عنب',
    nameEn: 'Grapes',
    category: 'fruits',
    calories: 69,
    protein: 0.7,
    carbs: 18.1,
    fat: 0.2,
    fiber: 0.9,
    defaultUnitWeight: 5,
    unitNameAr: 'حبة عنب',
    micros: {
      vitA_mcg: 3, vitC_mg: 3.2, vitD_mcg: 0, vitE_mg: 0.19, vitK_mcg: 14.6,
      vitB1_mg: 0.07, vitB2_mg: 0.07, vitB3_mg: 0.19, vitB5_mg: 0.05, vitB6_mg: 0.09, vitB12_mcg: 0,
      folate_mcg: 2, calcium_mg: 10, iron_mg: 0.36, potassium_mg: 191, magnesium_mg: 7, zinc_mg: 0.07, sodium_mg: 2,
      omega3_mg: 11, omega6_mg: 14, phosphorus_mg: 20, selenium_mcg: 0.1, copper_mg: 0.13, manganese_mg: 0.07
    }
  },
  {
    id: 'f-13',
    nameAr: 'دراق',
    nameEn: 'Peach / Nectarine',
    category: 'fruits',
    calories: 39,
    protein: 0.9,
    carbs: 9.5,
    fat: 0.3,
    fiber: 1.5,
    defaultUnitWeight: 150,
    unitNameAr: 'حبة دراق',
    micros: {
      vitA_mcg: 16, vitC_mg: 6.6, vitD_mcg: 0, vitE_mg: 0.73, vitK_mcg: 2.6,
      vitB1_mg: 0.02, vitB2_mg: 0.03, vitB3_mg: 0.8, vitB5_mg: 0.15, vitB6_mg: 0.03, vitB12_mcg: 0,
      folate_mcg: 4, calcium_mg: 6, iron_mg: 0.25, potassium_mg: 190, magnesium_mg: 9, zinc_mg: 0.17, sodium_mg: 0,
      omega3_mg: 2, omega6_mg: 86, phosphorus_mg: 20, selenium_mcg: 0.1, copper_mg: 0.07, manganese_mg: 0.06
    }
  },
  {
    id: 'f-14',
    nameAr: 'إجاص',
    nameEn: 'Pear',
    category: 'fruits',
    calories: 57,
    protein: 0.4,
    carbs: 15.2,
    fat: 0.1,
    fiber: 3.1,
    defaultUnitWeight: 178,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 1, vitC_mg: 4.3, vitD_mcg: 0, vitE_mg: 0.12, vitK_mcg: 4.4,
      vitB1_mg: 0.012, vitB2_mg: 0.025, vitB3_mg: 0.16, vitB5_mg: 0.049, vitB6_mg: 0.029, vitB12_mcg: 0,
      folate_mcg: 7, calcium_mg: 9, iron_mg: 0.18, potassium_mg: 116, magnesium_mg: 7, zinc_mg: 0.1, sodium_mg: 1,
      omega3_mg: 2, omega6_mg: 28, phosphorus_mg: 12, selenium_mcg: 0.1, copper_mg: 0.08, manganese_mg: 0.05
    }
  },
  {
    id: 'f-15',
    nameAr: 'رمان',
    nameEn: 'Pomegranate',
    category: 'fruits',
    calories: 83,
    protein: 1.7,
    carbs: 18.7,
    fat: 1.2,
    fiber: 4.0,
    defaultUnitWeight: 200,
    unitNameAr: 'رمانة متوسطة',
    micros: {
      vitA_mcg: 0, vitC_mg: 10.2, vitD_mcg: 0, vitE_mg: 0.6, vitK_mcg: 16.4,
      vitB1_mg: 0.067, vitB2_mg: 0.053, vitB3_mg: 0.293, vitB5_mg: 0.377, vitB6_mg: 0.075, vitB12_mcg: 0,
      folate_mcg: 38, calcium_mg: 10, iron_mg: 0.3, potassium_mg: 236, magnesium_mg: 12, zinc_mg: 0.35, sodium_mg: 3,
      omega3_mg: 85, omega6_mg: 75, phosphorus_mg: 36, selenium_mcg: 0.5, copper_mg: 0.16, manganese_mg: 0.12
    }
  },
  {
    id: 'f-16',
    nameAr: 'تمر',
    nameEn: 'Dates',
    category: 'fruits',
    calories: 277,
    protein: 1.8,
    carbs: 75.0,
    fat: 0.2,
    fiber: 6.7,
    defaultUnitWeight: 8,
    unitNameAr: 'حبة تمر واحدة',
    micros: {
      vitA_mcg: 7, vitC_mg: 0.4, vitD_mcg: 0, vitE_mg: 0.05, vitK_mcg: 2.7,
      vitB1_mg: 0.05, vitB2_mg: 0.06, vitB3_mg: 1.27, vitB5_mg: 0.8, vitB6_mg: 0.165, vitB12_mcg: 0,
      folate_mcg: 19, calcium_mg: 39, iron_mg: 1.02, potassium_mg: 656, magnesium_mg: 43, zinc_mg: 0.29, sodium_mg: 2,
      omega3_mg: 0, omega6_mg: 0, phosphorus_mg: 62, selenium_mcg: 3.0, copper_mg: 0.21, manganese_mg: 0.26
    }
  },
  {
    id: 'f-17',
    nameAr: 'رطب',
    nameEn: 'Fresh Dates',
    category: 'fruits',
    calories: 142,
    protein: 1.2,
    carbs: 37.0,
    fat: 0.2,
    fiber: 3.5,
    defaultUnitWeight: 12,
    unitNameAr: 'حبة رطب',
    micros: {
      vitA_mcg: 5, vitC_mg: 2.5, vitD_mcg: 0, vitE_mg: 0.05, vitK_mcg: 1.5,
      vitB1_mg: 0.03, vitB2_mg: 0.04, vitB3_mg: 0.8, vitB5_mg: 0.4, vitB6_mg: 0.1, vitB12_mcg: 0,
      folate_mcg: 12, calcium_mg: 25, iron_mg: 0.6, potassium_mg: 380, magnesium_mg: 25, zinc_mg: 0.2, sodium_mg: 1,
      omega3_mg: 0, omega6_mg: 0, phosphorus_mg: 35, selenium_mcg: 1.8, copper_mg: 0.12, manganese_mg: 0.15
    }
  },
  {
    id: 'f-18',
    nameAr: 'بطيخ',
    nameEn: 'Watermelon',
    category: 'fruits',
    calories: 30,
    protein: 0.6,
    carbs: 7.6,
    fat: 0.2,
    fiber: 0.4,
    defaultUnitWeight: 150,
    unitNameAr: 'شريحة بطيخ',
    micros: {
      vitA_mcg: 28, vitC_mg: 8.1, vitD_mcg: 0, vitE_mg: 0.05, vitK_mcg: 0.1,
      vitB1_mg: 0.033, vitB2_mg: 0.021, vitB3_mg: 0.178, vitB5_mg: 0.221, vitB6_mg: 0.045, vitB12_mcg: 0,
      folate_mcg: 3, calcium_mg: 7, iron_mg: 0.24, potassium_mg: 112, magnesium_mg: 10, zinc_mg: 0.1, sodium_mg: 1,
      omega3_mg: 0, omega6_mg: 50, phosphorus_mg: 11, selenium_mcg: 0.4, copper_mg: 0.04, manganese_mg: 0.04
    }
  },
  {
    id: 'f-19',
    nameAr: 'شمام',
    nameEn: 'Cantaloupe / Melon',
    category: 'fruits',
    calories: 34,
    protein: 0.8,
    carbs: 8.2,
    fat: 0.2,
    fiber: 0.9,
    defaultUnitWeight: 160,
    unitNameAr: 'شريحة شمام',
    micros: {
      vitA_mcg: 169, vitC_mg: 36.7, vitD_mcg: 0, vitE_mg: 0.05, vitK_mcg: 2.5,
      vitB1_mg: 0.04, vitB2_mg: 0.02, vitB3_mg: 0.73, vitB5_mg: 0.16, vitB6_mg: 0.07, vitB12_mcg: 0,
      folate_mcg: 21, calcium_mg: 9, iron_mg: 0.21, potassium_mg: 267, magnesium_mg: 12, zinc_mg: 0.18, sodium_mg: 16,
      omega3_mg: 27, omega6_mg: 20, phosphorus_mg: 15, selenium_mcg: 0.4, copper_mg: 0.04, manganese_mg: 0.04
    }
  },
  {
    id: 'f-20',
    nameAr: 'مانغو',
    nameEn: 'Mango',
    category: 'fruits',
    calories: 60,
    protein: 0.8,
    carbs: 15.0,
    fat: 0.4,
    fiber: 1.6,
    defaultUnitWeight: 200,
    unitNameAr: 'حبة مانغو',
    micros: {
      vitA_mcg: 54, vitC_mg: 36.4, vitD_mcg: 0, vitE_mg: 0.9, vitK_mcg: 4.2,
      vitB1_mg: 0.028, vitB2_mg: 0.038, vitB3_mg: 0.669, vitB5_mg: 0.197, vitB6_mg: 0.119, vitB12_mcg: 0,
      folate_mcg: 43, calcium_mg: 11, iron_mg: 0.16, potassium_mg: 168, magnesium_mg: 10, zinc_mg: 0.09, sodium_mg: 1,
      omega3_mg: 37, omega6_mg: 13, phosphorus_mg: 14, selenium_mcg: 0.6, copper_mg: 0.11, manganese_mg: 0.06
    }
  },
  {
    id: 'f-21',
    nameAr: 'أناناس',
    nameEn: 'Pineapple',
    category: 'fruits',
    calories: 50,
    protein: 0.5,
    carbs: 13.1,
    fat: 0.1,
    fiber: 1.4,
    defaultUnitWeight: 84,
    unitNameAr: 'شريحة أناناس',
    micros: {
      vitA_mcg: 3, vitC_mg: 47.8, vitD_mcg: 0, vitE_mg: 0.02, vitK_mcg: 0.7,
      vitB1_mg: 0.079, vitB2_mg: 0.032, vitB3_mg: 0.5, vitB5_mg: 0.213, vitB6_mg: 0.112, vitB12_mcg: 0,
      folate_mcg: 18, calcium_mg: 13, iron_mg: 0.29, potassium_mg: 109, magnesium_mg: 12, zinc_mg: 0.12, sodium_mg: 1,
      omega3_mg: 17, omega6_mg: 23, phosphorus_mg: 8, selenium_mcg: 0.1, copper_mg: 0.11, manganese_mg: 0.93
    }
  },
  {
    id: 'f-22',
    nameAr: 'تين',
    nameEn: 'Fig',
    category: 'fruits',
    calories: 74,
    protein: 0.8,
    carbs: 19.2,
    fat: 0.3,
    fiber: 2.9,
    defaultUnitWeight: 50,
    unitNameAr: 'حبة تين',
    micros: {
      vitA_mcg: 7, vitC_mg: 2.0, vitD_mcg: 0, vitE_mg: 0.11, vitK_mcg: 4.7,
      vitB1_mg: 0.06, vitB2_mg: 0.05, vitB3_mg: 0.4, vitB5_mg: 0.3, vitB6_mg: 0.113, vitB12_mcg: 0,
      folate_mcg: 6, calcium_mg: 35, iron_mg: 0.37, potassium_mg: 232, magnesium_mg: 17, zinc_mg: 0.15, sodium_mg: 1,
      omega3_mg: 10, omega6_mg: 140, phosphorus_mg: 14, selenium_mcg: 0.2, copper_mg: 0.07, manganese_mg: 0.12
    }
  },

  // --- 2. خضار (VEGETABLES) ---
  {
    id: 'v-1',
    nameAr: 'طماطم طازجة',
    nameEn: 'Tomato',
    category: 'vegetables',
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    fiber: 1.2,
    defaultUnitWeight: 120,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 42, vitC_mg: 13.7, vitD_mcg: 0, vitE_mg: 0.54, vitK_mcg: 7.9,
      vitB1_mg: 0.037, vitB2_mg: 0.019, vitB3_mg: 0.594, vitB6_mg: 0.08, vitB12_mcg: 0,
      folate_mcg: 15, calcium_mg: 10, iron_mg: 0.27, potassium_mg: 237, magnesium_mg: 11, zinc_mg: 0.17, sodium_mg: 5
    }
  },
  {
    id: 'v-2',
    nameAr: 'خيار طازج (بالقشر)',
    nameEn: 'Cucumber',
    category: 'vegetables',
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    fiber: 0.5,
    defaultUnitWeight: 100,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 5, vitC_mg: 2.8, vitD_mcg: 0, vitE_mg: 0.03, vitK_mcg: 16.4,
      vitB1_mg: 0.027, vitB2_mg: 0.033, vitB3_mg: 0.098, vitB6_mg: 0.04, vitB12_mcg: 0,
      folate_mcg: 7, calcium_mg: 16, iron_mg: 0.28, potassium_mg: 147, magnesium_mg: 13, zinc_mg: 0.2, sodium_mg: 2
    }
  },
  {
    id: 'v-3',
    nameAr: 'سبانخ طازجة',
    nameEn: 'Spinach',
    category: 'vegetables',
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    defaultUnitWeight: 30,
    unitNameAr: 'كوب أوراق طازجة',
    micros: {
      vitA_mcg: 469, vitC_mg: 28.1, vitD_mcg: 0, vitE_mg: 2.03, vitK_mcg: 483,
      vitB1_mg: 0.078, vitB2_mg: 0.189, vitB3_mg: 0.724, vitB6_mg: 0.195, vitB12_mcg: 0,
      folate_mcg: 194, calcium_mg: 99, iron_mg: 2.71, potassium_mg: 558, magnesium_mg: 79, zinc_mg: 0.53, sodium_mg: 79
    }
  },
  {
    id: 'v-4',
    nameAr: 'بروكلي طازج (نيء)',
    nameEn: 'Raw Fresh Broccoli',
    category: 'vegetables',
    calories: 34,
    protein: 2.8,
    carbs: 6.6,
    fat: 0.4,
    fiber: 2.6,
    defaultUnitWeight: 100,
    unitNameAr: 'كوب زهرات بروكلي طازج',
    micros: {
      vitA_mcg: 31, vitC_mg: 89.2, vitD_mcg: 0, vitE_mg: 0.78, vitK_mcg: 101.6,
      vitB1_mg: 0.071, vitB2_mg: 0.117, vitB3_mg: 0.639, vitB6_mg: 0.175, vitB12_mcg: 0,
      folate_mcg: 63, calcium_mg: 47, iron_mg: 0.73, potassium_mg: 316, magnesium_mg: 21, zinc_mg: 0.41, sodium_mg: 33
    }
  },
  {
    id: 'v-5',
    nameAr: 'جزر طازج',
    nameEn: 'Carrot',
    category: 'vegetables',
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    defaultUnitWeight: 80,
    unitNameAr: 'حبة متوسطة',
    micros: {
      vitA_mcg: 835, vitC_mg: 5.9, vitD_mcg: 0, vitE_mg: 0.66, vitK_mcg: 13.2,
      vitB1_mg: 0.066, vitB2_mg: 0.058, vitB3_mg: 0.983, vitB6_mg: 0.138, vitB12_mcg: 0,
      folate_mcg: 19, calcium_mg: 33, iron_mg: 0.3, potassium_mg: 320, magnesium_mg: 12, zinc_mg: 0.24, sodium_mg: 69
    }
  },
  {
    id: 'v-6',
    nameAr: 'بطاطس طازجة (نيئة)',
    nameEn: 'Raw Fresh Potato',
    category: 'vegetables',
    calories: 77,
    protein: 2.0,
    carbs: 17.5,
    fat: 0.1,
    fiber: 2.2,
    defaultUnitWeight: 150,
    unitNameAr: 'حبة بطاطس نيئة متوسطة',
    micros: {
      vitA_mcg: 0, vitC_mg: 19.7, vitD_mcg: 0, vitE_mg: 0.01, vitK_mcg: 1.9,
      vitB1_mg: 0.08, vitB2_mg: 0.03, vitB3_mg: 1.05, vitB6_mg: 0.295, vitB12_mcg: 0,
      folate_mcg: 16, calcium_mg: 12, iron_mg: 0.78, potassium_mg: 421, magnesium_mg: 23, zinc_mg: 0.29, sodium_mg: 6
    }
  },

  // --- 3. لحوم وأسماك (MEATS & FISH) ---
  {
    id: 'm-1',
    nameAr: 'صدر دجاج (بدون جلد)',
    nameEn: 'Chicken Breast (Skinless)',
    category: 'meats',
    calories: 120,
    protein: 22.5,
    carbs: 0,
    fat: 2.6,
    fiber: 0,
    defaultUnitWeight: 180,
    unitNameAr: 'قطعة صدر دجاج',
    micros: {
      vitA_mcg: 9, vitC_mg: 0, vitD_mcg: 0.1, vitE_mg: 0.27, vitK_mcg: 0.3,
      vitB1_mg: 0.07, vitB2_mg: 0.12, vitB3_mg: 11.2, vitB6_mg: 0.6, vitB12_mcg: 0.34,
      folate_mcg: 4, calcium_mg: 11, iron_mg: 0.74, potassium_mg: 334, magnesium_mg: 28, zinc_mg: 0.8, sodium_mg: 65
    }
  },
  {
    id: 'm-2',
    nameAr: 'لحم بقر (هبرة)',
    nameEn: 'Lean Beef',
    category: 'meats',
    calories: 182,
    protein: 21.6,
    carbs: 0,
    fat: 10.0,
    fiber: 0,
    defaultUnitWeight: 150,
    unitNameAr: 'قطعة ستيك/لحم',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0.1, vitE_mg: 0.15, vitK_mcg: 1.2,
      vitB1_mg: 0.06, vitB2_mg: 0.18, vitB3_mg: 4.8, vitB6_mg: 0.4, vitB12_mcg: 2.1,
      folate_mcg: 9, calcium_mg: 18, iron_mg: 2.4, potassium_mg: 318, magnesium_mg: 21, zinc_mg: 5.2, sodium_mg: 66
    }
  },
  {
    id: 'm-3',
    nameAr: 'سمك سلمون',
    nameEn: 'Salmon',
    category: 'meats',
    calories: 182,
    protein: 20.0,
    carbs: 0,
    fat: 10.9,
    fiber: 0,
    defaultUnitWeight: 150,
    unitNameAr: 'قطعة فيليه سلمون',
    micros: {
      vitA_mcg: 50, vitC_mg: 0, vitD_mcg: 11, vitE_mg: 2.8, vitK_mcg: 0.1,
      vitB1_mg: 0.23, vitB2_mg: 0.15, vitB3_mg: 8.0, vitB6_mg: 0.8, vitB12_mcg: 3.2,
      folate_mcg: 25, calcium_mg: 12, iron_mg: 0.8, potassium_mg: 363, magnesium_mg: 27, zinc_mg: 0.6, sodium_mg: 59,
      omega3_mg: 2018, omega6_mg: 660, phosphorus_mg: 252, selenium_mcg: 36.5, copper_mg: 0.06, manganese_mg: 0.02
    }
  },
  {
    id: 'm-4',
    nameAr: 'سمك بلطي/أبيض',
    nameEn: 'White Fish / Tilapia',
    category: 'meats',
    calories: 96,
    protein: 20.1,
    carbs: 0,
    fat: 1.7,
    fiber: 0,
    defaultUnitWeight: 150,
    unitNameAr: 'قطعة فيليه سمك',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 3.1, vitE_mg: 0.4, vitK_mcg: 0,
      vitB1_mg: 0.04, vitB2_mg: 0.07, vitB3_mg: 3.9, vitB6_mg: 0.3, vitB12_mcg: 1.58,
      folate_mcg: 6, calcium_mg: 10, iron_mg: 0.56, potassium_mg: 302, magnesium_mg: 27, zinc_mg: 0.4, sodium_mg: 52
    }
  },
  {
    id: 'm-5',
    nameAr: 'سمك تونة طازج',
    nameEn: 'Fresh Tuna',
    category: 'meats',
    calories: 109,
    protein: 24.4,
    carbs: 0,
    fat: 0.5,
    fiber: 0,
    defaultUnitWeight: 150,
    unitNameAr: 'شريحة فيليه تونة',
    micros: {
      vitA_mcg: 20, vitC_mg: 0, vitD_mcg: 2.0, vitE_mg: 0.8, vitK_mcg: 0,
      vitB1_mg: 0.1, vitB2_mg: 0.1, vitB3_mg: 8.6, vitB6_mg: 0.9, vitB12_mcg: 9.4,
      folate_mcg: 4, calcium_mg: 8, iron_mg: 1.0, potassium_mg: 441, magnesium_mg: 35, zinc_mg: 0.6, sodium_mg: 39
    }
  },
  {
    id: 'm-6',
    nameAr: 'بيض دجاج كامل',
    nameEn: 'Whole Egg',
    category: 'meats',
    calories: 143,
    protein: 12.6,
    carbs: 0.7,
    fat: 9.5,
    fiber: 0,
    defaultUnitWeight: 50,
    unitNameAr: 'بيضة واحدة',
    micros: {
      vitA_mcg: 160, vitC_mg: 0, vitD_mcg: 2.0, vitE_mg: 1.05, vitK_mcg: 0.3,
      vitB1_mg: 0.04, vitB2_mg: 0.45, vitB3_mg: 0.08, vitB6_mg: 0.17, vitB12_mcg: 0.89,
      folate_mcg: 47, calcium_mg: 56, iron_mg: 1.75, potassium_mg: 138, magnesium_mg: 12, zinc_mg: 1.29, sodium_mg: 142
    }
  },

  // --- 4. أجبان وألبان (DAIRY & CHEESE) ---
  {
    id: 'd-2',
    nameAr: 'زبادي يوناني سادة',
    nameEn: 'Greek Yogurt Plain',
    category: 'dairy',
    calories: 73,
    protein: 10,
    carbs: 3.8,
    fat: 1.9,
    fiber: 0,
    defaultUnitWeight: 170,
    unitNameAr: 'علبة زبادي صغيرة',
    micros: {
      vitA_mcg: 8, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.01, vitK_mcg: 0.2,
      vitB1_mg: 0.03, vitB2_mg: 0.23, vitB3_mg: 0.2, vitB6_mg: 0.06, vitB12_mcg: 0.75,
      folate_mcg: 7, calcium_mg: 100, iron_mg: 0.05, potassium_mg: 141, magnesium_mg: 11, zinc_mg: 0.52, sodium_mg: 36
    }
  },
  {
    id: 'd-3',
    nameAr: 'جبنة شيدر',
    nameEn: 'Cheddar Cheese',
    category: 'dairy',
    calories: 403,
    protein: 25,
    carbs: 1.3,
    fat: 33,
    fiber: 0,
    defaultUnitWeight: 28,
    unitNameAr: 'شريحة جبن',
    micros: {
      vitA_mcg: 330, vitC_mg: 0, vitD_mcg: 0.6, vitE_mg: 0.29, vitK_mcg: 2.8,
      vitB1_mg: 0.03, vitB2_mg: 0.38, vitB3_mg: 0.08, vitB6_mg: 0.07, vitB12_mcg: 0.83,
      folate_mcg: 18, calcium_mg: 721, iron_mg: 0.68, potassium_mg: 98, magnesium_mg: 28, zinc_mg: 3.1, sodium_mg: 621
    }
  },
  {
    id: 'd-4',
    nameAr: 'جبنة فيتا',
    nameEn: 'Feta Cheese',
    category: 'dairy',
    calories: 264,
    protein: 14,
    carbs: 4.1,
    fat: 21,
    fiber: 0,
    defaultUnitWeight: 30,
    unitNameAr: 'مكعب جبن فيتا',
    micros: {
      vitA_mcg: 125, vitC_mg: 0, vitD_mcg: 0.4, vitE_mg: 0.18, vitK_mcg: 1.8,
      vitB1_mg: 0.15, vitB2_mg: 0.84, vitB3_mg: 0.99, vitB6_mg: 0.42, vitB12_mcg: 1.69,
      folate_mcg: 32, calcium_mg: 493, iron_mg: 0.65, potassium_mg: 62, magnesium_mg: 19, zinc_mg: 2.88, sodium_mg: 1116
    }
  },
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
  // --- 5. مكسرات وبذور (NUTS & SEEDS) ---
  {
    id: 'n-1',
    nameAr: 'لوز',
    nameEn: 'Almonds',
    category: 'nuts',
    calories: 579,
    protein: 21.2,
    carbs: 21.6,
    fat: 49.9,
    fiber: 12.5,
    defaultUnitWeight: 15,
    unitNameAr: 'حفنة صغيرة (12 حبة)',
    micros: {
      vitA_mcg: 1, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 25.6, vitK_mcg: 0,
      vitB1_mg: 0.2, vitB2_mg: 1.1, vitB3_mg: 3.6, vitB6_mg: 0.14, vitB12_mcg: 0,
      folate_mcg: 44, calcium_mg: 269, iron_mg: 3.7, potassium_mg: 733, magnesium_mg: 270, zinc_mg: 3.1, sodium_mg: 1,
      omega3_mg: 6, omega6_mg: 12050, phosphorus_mg: 481, selenium_mcg: 4.1, copper_mg: 1.03, manganese_mg: 2.18
    }
  },
  {
    id: 'n-2',
    nameAr: 'جوز',
    nameEn: 'Walnuts',
    category: 'nuts',
    calories: 654,
    protein: 15.2,
    carbs: 13.7,
    fat: 65.2,
    fiber: 6.7,
    defaultUnitWeight: 10,
    unitNameAr: 'حبة جوز كاملة (نصفين)',
    micros: {
      vitA_mcg: 1, vitC_mg: 1.3, vitD_mcg: 0, vitE_mg: 0.7, vitK_mcg: 2.7,
      vitB1_mg: 0.34, vitB2_mg: 0.15, vitB3_mg: 1.1, vitB6_mg: 0.54, vitB12_mcg: 0,
      folate_mcg: 98, calcium_mg: 98, iron_mg: 2.9, potassium_mg: 441, magnesium_mg: 158, zinc_mg: 3.1, sodium_mg: 2,
      omega3_mg: 9080, omega6_mg: 38100, phosphorus_mg: 346, selenium_mcg: 4.9, copper_mg: 1.58, manganese_mg: 3.4
    }
  },
  {
    id: 'n-3',
    nameAr: 'فستق حلبي',
    nameEn: 'Pistachios',
    category: 'nuts',
    calories: 562,
    protein: 20.2,
    carbs: 27.2,
    fat: 45.3,
    fiber: 10.6,
    defaultUnitWeight: 15,
    unitNameAr: 'حفنة (حوالي 25 حبة)',
    micros: {
      vitA_mcg: 26, vitC_mg: 5.6, vitD_mcg: 0, vitE_mg: 2.8, vitK_mcg: 13.2,
      vitB1_mg: 0.87, vitB2_mg: 0.16, vitB3_mg: 1.3, vitB6_mg: 1.7, vitB12_mcg: 0,
      folate_mcg: 51, calcium_mg: 105, iron_mg: 3.9, potassium_mg: 1025, magnesium_mg: 121, zinc_mg: 2.2, sodium_mg: 1,
      omega3_mg: 250, omega6_mg: 13200, phosphorus_mg: 490, selenium_mcg: 7.0, copper_mg: 1.3, manganese_mg: 1.2
    }
  },
  {
    id: 'n-4',
    nameAr: 'بذور الشيا',
    nameEn: 'Chia Seeds',
    category: 'nuts',
    calories: 486,
    protein: 16.5,
    carbs: 42.1,
    fat: 30.7,
    fiber: 34.4,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 3, vitC_mg: 1.6, vitD_mcg: 0, vitE_mg: 0.5, vitK_mcg: 0,
      vitB1_mg: 0.62, vitB2_mg: 0.17, vitB3_mg: 8.83, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 49, calcium_mg: 631, iron_mg: 7.7, potassium_mg: 407, magnesium_mg: 335, zinc_mg: 4.6, sodium_mg: 16,
      omega3_mg: 17800, omega6_mg: 5840, phosphorus_mg: 860, selenium_mcg: 55.2, copper_mg: 0.92, manganese_mg: 2.7
    }
  },
  {
    id: 'n-5',
    nameAr: 'فول سوداني',
    nameEn: 'Peanuts',
    category: 'nuts',
    calories: 567,
    protein: 25.8,
    carbs: 16.1,
    fat: 49.2,
    fiber: 8.5,
    defaultUnitWeight: 20,
    unitNameAr: 'حفنة يد (حوالي 25 حبة)',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 8.33, vitK_mcg: 0,
      vitB1_mg: 0.64, vitB2_mg: 0.14, vitB3_mg: 12.1, vitB5_mg: 1.77, vitB6_mg: 0.35, vitB12_mcg: 0,
      folate_mcg: 240, calcium_mg: 92, iron_mg: 4.58, potassium_mg: 705, magnesium_mg: 168, zinc_mg: 3.27, sodium_mg: 18,
      omega3_mg: 3, omega6_mg: 15560, phosphorus_mg: 376, selenium_mcg: 7.2, copper_mg: 1.14, manganese_mg: 1.93
    }
  },
  {
    id: 'n-6',
    nameAr: 'بذور اليقطين',
    nameEn: 'Pumpkin Seeds',
    category: 'nuts',
    calories: 574,
    protein: 29.8,
    carbs: 14.7,
    fat: 49.0,
    fiber: 6.5,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة (حفنة)',
    micros: {
      vitA_mcg: 1, vitC_mg: 0.3, vitD_mcg: 0, vitE_mg: 0.6, vitK_mcg: 4.5,
      vitB1_mg: 0.21, vitB2_mg: 0.32, vitB3_mg: 1.7, vitB5_mg: 0.75, vitB6_mg: 0.22, vitB12_mcg: 0,
      folate_mcg: 57, calcium_mg: 55, iron_mg: 8.07, potassium_mg: 788, magnesium_mg: 550, zinc_mg: 7.64, sodium_mg: 18,
      omega3_mg: 89, omega6_mg: 20900, phosphorus_mg: 1233, selenium_mcg: 9.4, copper_mg: 1.34, manganese_mg: 4.54
    }
  },
  {
    id: 'n-7',
    nameAr: 'بذور عباد الشمس',
    nameEn: 'Sunflower Seeds',
    category: 'nuts',
    calories: 584,
    protein: 20.8,
    carbs: 20.0,
    fat: 51.5,
    fiber: 8.6,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة (حفنة)',
    micros: {
      vitA_mcg: 3, vitC_mg: 1.4, vitD_mcg: 0, vitE_mg: 35.17, vitK_mcg: 1.3,
      vitB1_mg: 1.48, vitB2_mg: 0.36, vitB3_mg: 8.34, vitB5_mg: 1.13, vitB6_mg: 1.35, vitB12_mcg: 0,
      folate_mcg: 227, calcium_mg: 78, iron_mg: 5.25, potassium_mg: 645, magnesium_mg: 325, zinc_mg: 5.0, sodium_mg: 9,
      omega3_mg: 54, omega6_mg: 23050, phosphorus_mg: 660, selenium_mcg: 53.0, copper_mg: 1.8, manganese_mg: 1.95
    }
  },
  {
    id: 'n-8',
    nameAr: 'كاجو نيء',
    nameEn: 'Raw Cashews',
    category: 'nuts',
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
    id: 'n-9',
    nameAr: 'بودرة الكاكاو',
    nameEn: 'Cocoa Powder',
    category: 'nuts',
    calories: 228,
    protein: 19.6,
    carbs: 57.9,
    fat: 13.7,
    fiber: 33.2,
    defaultUnitWeight: 10,
    unitNameAr: 'ملعقة كبيرة (10 جم)',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.1, vitK_mcg: 2.5,
      vitB1_mg: 0.08, vitB2_mg: 0.24, vitB3_mg: 2.19, vitB6_mg: 0.12, vitB12_mcg: 0,
      folate_mcg: 32, calcium_mg: 128, iron_mg: 13.9, potassium_mg: 1524, magnesium_mg: 499, zinc_mg: 6.8, sodium_mg: 21,
      phosphorus_mg: 734, selenium_mcg: 14.3, copper_mg: 3.8, manganese_mg: 3.8
    }
  },

  // --- 6. حبوب وبقول (GRAINS & LEGUMES) ---
  {
    id: 'g-1',
    nameAr: 'أرز أبيض',
    nameEn: 'White Rice',
    category: 'grains',
    calories: 365,
    protein: 7.1,
    carbs: 80.0,
    fat: 0.7,
    fiber: 1.3,
    defaultUnitWeight: 50,
    unitNameAr: 'حصة أرز (50 جم)',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.11, vitK_mcg: 0.1,
      vitB1_mg: 0.44, vitB2_mg: 0.05, vitB3_mg: 4.14, vitB6_mg: 0.22, vitB12_mcg: 0,
      folate_mcg: 108, calcium_mg: 28, iron_mg: 2.68, potassium_mg: 115, magnesium_mg: 25, zinc_mg: 1.09, sodium_mg: 5
    }
  },
  {
    id: 'g-2',
    nameAr: 'شوفان',
    nameEn: 'Oats',
    category: 'grains',
    calories: 389,
    protein: 16.9,
    carbs: 66.3,
    fat: 6.9,
    fiber: 10.6,
    defaultUnitWeight: 40,
    unitNameAr: 'حصة شوفان (40 جم)',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.5, vitK_mcg: 2.0,
      vitB1_mg: 0.76, vitB2_mg: 0.14, vitB3_mg: 1.12, vitB6_mg: 0.12, vitB12_mcg: 0,
      folate_mcg: 56, calcium_mg: 54, iron_mg: 4.72, potassium_mg: 429, magnesium_mg: 177, zinc_mg: 3.97, sodium_mg: 6
    }
  },
  {
    id: 'g-4',
    nameAr: 'عدس',
    nameEn: 'Lentils',
    category: 'grains',
    calories: 352,
    protein: 24.6,
    carbs: 63.4,
    fat: 1.1,
    fiber: 10.7,
    defaultUnitWeight: 50,
    unitNameAr: 'حصة عدس (50 جم)',
    micros: {
      vitA_mcg: 2, vitC_mg: 4.5, vitD_mcg: 0, vitE_mg: 0.49, vitK_mcg: 5.0,
      vitB1_mg: 0.87, vitB2_mg: 0.21, vitB3_mg: 2.61, vitB6_mg: 0.54, vitB12_mcg: 0,
      folate_mcg: 479, calcium_mg: 35, iron_mg: 7.54, potassium_mg: 905, magnesium_mg: 122, zinc_mg: 3.27, sodium_mg: 6
    }
  },
  {
    id: 'g-5',
    nameAr: 'فول',
    nameEn: 'Fava Beans',
    category: 'grains',
    calories: 341,
    protein: 26.1,
    carbs: 58.3,
    fat: 1.5,
    fiber: 25.0,
    defaultUnitWeight: 50,
    unitNameAr: 'حصة فول (50 جم)',
    micros: {
      vitA_mcg: 3, vitC_mg: 1.4, vitD_mcg: 0, vitE_mg: 0.05, vitK_mcg: 9.0,
      vitB1_mg: 0.55, vitB2_mg: 0.29, vitB3_mg: 2.83, vitB6_mg: 0.37, vitB12_mcg: 0,
      folate_mcg: 423, calcium_mg: 103, iron_mg: 6.7, potassium_mg: 1062, magnesium_mg: 192, zinc_mg: 3.14, sodium_mg: 13
    }
  },
  {
    id: 'g-6',
    nameAr: 'حمص',
    nameEn: 'Chickpeas',
    category: 'grains',
    calories: 378,
    protein: 20.5,
    carbs: 63.0,
    fat: 6.0,
    fiber: 12.2,
    defaultUnitWeight: 50,
    unitNameAr: 'حصة حمص (50 جم)',
    micros: {
      vitA_mcg: 4, vitC_mg: 4.0, vitD_mcg: 0, vitE_mg: 0.82, vitK_mcg: 9.0,
      vitB1_mg: 0.48, vitB2_mg: 0.21, vitB3_mg: 1.54, vitB6_mg: 0.54, vitB12_mcg: 0,
      folate_mcg: 557, calcium_mg: 57, iron_mg: 4.31, potassium_mg: 718, magnesium_mg: 79, zinc_mg: 2.76, sodium_mg: 24
    }
  },
  {
    id: 'g-7',
    nameAr: 'معكرونة',
    nameEn: 'Pasta',
    category: 'grains',
    calories: 371,
    protein: 13.0,
    carbs: 74.7,
    fat: 1.5,
    fiber: 3.2,
    defaultUnitWeight: 75,
    unitNameAr: 'حصة معكرونة (75 جم)',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.11, vitK_mcg: 0.1,
      vitB1_mg: 0.52, vitB2_mg: 0.32, vitB3_mg: 5.6, vitB6_mg: 0.14, vitB12_mcg: 0,
      folate_mcg: 172, calcium_mg: 21, iron_mg: 3.2, potassium_mg: 223, magnesium_mg: 53, zinc_mg: 1.4, sodium_mg: 6
    }
  },
  {
    id: 'g-8',
    nameAr: 'برغل',
    nameEn: 'Bulgur',
    category: 'grains',
    calories: 342,
    protein: 12.3,
    carbs: 75.9,
    fat: 1.3,
    fiber: 18.3,
    defaultUnitWeight: 50,
    unitNameAr: 'حصة برغل (50 جم)',
    micros: {
      vitA_mcg: 1, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.06, vitK_mcg: 1.9,
      vitB1_mg: 0.23, vitB2_mg: 0.12, vitB3_mg: 5.11, vitB6_mg: 0.34, vitB12_mcg: 0,
      folate_mcg: 27, calcium_mg: 35, iron_mg: 2.46, potassium_mg: 410, magnesium_mg: 164, zinc_mg: 1.93, sodium_mg: 17
    }
  },
  {
    id: 'g-9',
    nameAr: 'كينوا',
    nameEn: 'Quinoa',
    category: 'grains',
    calories: 368,
    protein: 14.1,
    carbs: 64.2,
    fat: 6.1,
    fiber: 7.0,
    defaultUnitWeight: 50,
    unitNameAr: 'حصة كينوا (50 جم)',
    micros: {
      vitA_mcg: 1, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 2.4, vitK_mcg: 0,
      vitB1_mg: 0.36, vitB2_mg: 0.32, vitB3_mg: 1.52, vitB6_mg: 0.49, vitB12_mcg: 0,
      folate_mcg: 184, calcium_mg: 47, iron_mg: 4.57, potassium_mg: 563, magnesium_mg: 197, zinc_mg: 3.1, sodium_mg: 5
    }
  },

  // --- 7. زيوت ودهون (OILS & FATS) ---
  {
    id: 'o-1',
    nameAr: 'زيت زيتون',
    nameEn: 'Olive Oil',
    category: 'oils',
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 14.3, vitK_mcg: 60.2,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 1, iron_mg: 0.56, potassium_mg: 1, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 2
    }
  },
  {
    id: 'o-1b',
    nameAr: 'زيت زيتون مخفف',
    nameEn: 'Light Olive Oil',
    category: 'oils',
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 14.3, vitK_mcg: 60.2,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 1, iron_mg: 0.56, potassium_mg: 1, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 2
    }
  },
  {
    id: 'o-2',
    nameAr: 'زبدة حيوانية',
    nameEn: 'Animal Butter',
    category: 'oils',
    calories: 717,
    protein: 0.9,
    carbs: 0.1,
    fat: 81,
    fiber: 0,
    defaultUnitWeight: 14,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 684, vitC_mg: 0, vitD_mcg: 1.5, vitE_mg: 2.3, vitK_mcg: 7.0,
      vitB1_mg: 0.01, vitB2_mg: 0.03, vitB3_mg: 0.04, vitB6_mg: 0.01, vitB12_mcg: 0.17,
      folate_mcg: 3, calcium_mg: 24, iron_mg: 0.02, potassium_mg: 24, magnesium_mg: 2, zinc_mg: 0.09, sodium_mg: 576
    }
  },
  {
    id: 'o-3',
    nameAr: 'طحينة',
    nameEn: 'Tahini',
    category: 'oils',
    calories: 595,
    protein: 17,
    carbs: 21.2,
    fat: 53.7,
    fiber: 9.3,
    defaultUnitWeight: 15,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 3, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0.25, vitK_mcg: 0,
      vitB1_mg: 1.2, vitB2_mg: 0.47, vitB3_mg: 5.5, vitB6_mg: 0.15, vitB12_mcg: 0,
      folate_mcg: 98, calcium_mg: 426, iron_mg: 8.9, potassium_mg: 414, magnesium_mg: 95, zinc_mg: 4.6, sodium_mg: 115
    }
  },
  {
    id: 'o-4',
    nameAr: 'زبدة الفول السوداني',
    nameEn: 'Peanut Butter',
    category: 'oils',
    calories: 588,
    protein: 25,
    carbs: 20,
    fat: 50,
    fiber: 6.0,
    defaultUnitWeight: 16,
    unitNameAr: 'ملعقة كبيرة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 9.0, vitK_mcg: 0.3,
      vitB1_mg: 0.14, vitB2_mg: 0.1, vitB3_mg: 13.3, vitB6_mg: 0.45, vitB12_mcg: 0,
      folate_mcg: 86, calcium_mg: 43, iron_mg: 1.9, potassium_mg: 649, magnesium_mg: 154, zinc_mg: 2.8, sodium_mg: 429
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
  },

  // --- 8. مكملات غذائية (DIETARY SUPPLEMENTS) ---
  {
    id: 'sup-1',
    nameAr: 'فيتامين أ',
    nameEn: 'Vitamin A',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'كبسولة',
    micros: {
      vitA_mcg: 900, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'vitA_mcg',
      nutrientNameAr: 'فيتامين أ',
      defaultDose: 900,
      unit: 'ميكروجرام',
      step: 100,
      min: 50,
      max: 10000,
      hasIU: true
    }
  },
  {
    id: 'sup-2',
    nameAr: 'فيتامين ب كومبلكس',
    nameEn: 'Vitamin B Complex',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 25, vitB2_mg: 25, vitB3_mg: 25, vitB5_mg: 25, vitB6_mg: 25, vitB12_mcg: 100,
      folate_mcg: 400, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'vitB1_mg',
      nutrientNameAr: 'فيتامين ب كومبلكس',
      defaultDose: 25,
      unit: 'ملجم',
      isComplex: true
    }
  },
  {
    id: 'sup-3',
    nameAr: 'فيتامين سي',
    nameEn: 'Vitamin C',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 500, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'vitC_mg',
      nutrientNameAr: 'فيتامين سي',
      defaultDose: 500,
      unit: 'ملجم',
      step: 50,
      min: 50,
      max: 2000
    }
  },
  {
    id: 'sup-4',
    nameAr: 'فيتامين د',
    nameEn: 'Vitamin D',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 50, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'vitD_mcg',
      nutrientNameAr: 'فيتامين د',
      defaultDose: 50,
      unit: 'ميكروجرام',
      step: 12.5,
      min: 5,
      max: 250,
      hasIU: true
    }
  },
  {
    id: 'sup-5',
    nameAr: 'فيتامين هـ',
    nameEn: 'Vitamin E',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 15, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'vitE_mg',
      nutrientNameAr: 'فيتامين هـ',
      defaultDose: 15,
      unit: 'ملجم',
      step: 5,
      min: 5,
      max: 1000
    }
  },
  {
    id: 'sup-6',
    nameAr: 'فيتامين ك',
    nameEn: 'Vitamin K',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 100,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'vitK_mcg',
      nutrientNameAr: 'فيتامين ك',
      defaultDose: 100,
      unit: 'ميكروجرام',
      step: 10,
      min: 10,
      max: 1000
    }
  },
  {
    id: 'sup-7',
    nameAr: 'فوسفور',
    nameEn: 'Phosphorus',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0,
      phosphorus_mg: 250
    },
    supplementConfig: {
      primaryNutrientKey: 'phosphorus_mg',
      nutrientNameAr: 'فوسفور',
      defaultDose: 250,
      unit: 'ملجم',
      step: 50,
      min: 50,
      max: 1500
    }
  },
  {
    id: 'sup-8',
    nameAr: 'سيلنيوم',
    nameEn: 'Selenium',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0,
      selenium_mcg: 100
    },
    supplementConfig: {
      primaryNutrientKey: 'selenium_mcg',
      nutrientNameAr: 'سيلنيوم',
      defaultDose: 100,
      unit: 'ميكروجرام',
      step: 25,
      min: 25,
      max: 400
    }
  },
  {
    id: 'sup-9',
    nameAr: 'حديد',
    nameEn: 'Iron',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 18, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'iron_mg',
      nutrientNameAr: 'حديد',
      defaultDose: 18,
      unit: 'ملجم',
      step: 1,
      min: 5,
      max: 100
    }
  },
  {
    id: 'sup-10',
    nameAr: 'مغنيسيوم',
    nameEn: 'Magnesium',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 200, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'magnesium_mg',
      nutrientNameAr: 'مغنيسيوم',
      defaultDose: 200,
      unit: 'ملجم',
      step: 25,
      min: 25,
      max: 800
    }
  },
  {
    id: 'sup-11',
    nameAr: 'بوتاسيوم',
    nameEn: 'Potassium',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 99, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'potassium_mg',
      nutrientNameAr: 'بوتاسيوم',
      defaultDose: 99,
      unit: 'ملجم',
      step: 10,
      min: 10,
      max: 500
    }
  },
  {
    id: 'sup-12',
    nameAr: 'كالسيوم',
    nameEn: 'Calcium',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 500, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'calcium_mg',
      nutrientNameAr: 'كالسيوم',
      defaultDose: 500,
      unit: 'ملجم',
      step: 50,
      min: 100,
      max: 1500
    }
  },
  {
    id: 'sup-13',
    nameAr: 'اوميغا 3',
    nameEn: 'Omega-3',
    category: 'supplements',
    calories: 9,
    protein: 0,
    carbs: 0,
    fat: 1,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'كبسولة هلامية',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0,
      omega3_mg: 1000
    },
    supplementConfig: {
      primaryNutrientKey: 'omega3_mg',
      nutrientNameAr: 'أوميغا 3',
      defaultDose: 1000,
      unit: 'ملجم',
      step: 100,
      min: 100,
      max: 4000
    }
  },
  {
    id: 'sup-14',
    nameAr: 'زنك',
    nameEn: 'Zinc',
    category: 'supplements',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    defaultUnitWeight: 100,
    unitNameAr: 'قرص / كبسولة',
    micros: {
      vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
      vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
      folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 15, sodium_mg: 0
    },
    supplementConfig: {
      primaryNutrientKey: 'zinc_mg',
      nutrientNameAr: 'زنك',
      defaultDose: 15,
      unit: 'ملجم',
      step: 5,
      min: 5,
      max: 100
    }
  }

];
