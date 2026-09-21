export type FoodCategory = 
  | 'fruits'       // فاكهة
  | 'vegetables'   // خضار
  | 'meats'        // لحوم
  | 'dairy'        // أجبان وألبان
  | 'nuts'         // مكسرات
  | 'grains'       // حبوب وبقول
  | 'oils'         // زيوت ودهون
  | 'supplements'; // مكملات غذائية

export interface VitaminsAndMinerals {
  vitA_mcg: number;      // فيتامين أ (ميكروجرام)
  vitC_mg: number;       // فيتامين ج (ملجم)
  vitD_mcg: number;      // فيتامين د (ميكروجرام)
  vitE_mg: number;       // فيتامين هـ (ملجم)
  vitK_mcg: number;      // فيتامين ك (ميكروجرام)
  vitB1_mg: number;      // الثيامين ب1 (ملجم)
  vitB2_mg: number;      // الرايبوفلافين ب2 (ملجم)
  vitB3_mg: number;      // النياسين ب3 (ملجم)
  vitB5_mg?: number;     // فيتامين ب5 (حمض البانتوثينيك - ملجم)
  vitB6_mg: number;      // فيتامين ب6 (ملجم)
  vitB12_mcg: number;    // فيتامين ب12 (ميكروجرام)
  folate_mcg: number;    // حمض الفوليك (ميكروجرام)
  calcium_mg: number;    // كالسيوم (ملجم)
  iron_mg: number;       // حديد (ملجم)
  potassium_mg: number;  // بوتاسيوم (ملجم)
  magnesium_mg: number;  // ماغنيسيوم (ملجم)
  zinc_mg: number;       // زنك (ملجم)
  sodium_mg: number;     // صوديوم (ملجم)
  omega3_mg?: number;    // أوميغا 3 (ملجم)
  omega6_mg?: number;    // أوميغا 6 (ملجم)
  phosphorus_mg?: number;// فوسفور (ملجم)
  selenium_mcg?: number; // سيلينيوم (ميكروجرام)
  copper_mg?: number;    // نحاس (ملجم)
  manganese_mg?: number; // منجنيز (ملجم)
}

export interface SupplementDoseConfig {
  primaryNutrientKey: keyof VitaminsAndMinerals;
  nutrientNameAr: string;
  defaultDose: number;
  unit: 'ملجم' | 'ميكروجرام';
  step?: number;
  min?: number;
  max?: number;
  hasIU?: boolean;
  isComplex?: boolean;
}

export interface FoodItem {
  id: string;
  nameAr: string;
  nameEn: string;
  category: FoodCategory;
  calories: number;        // السعرات الحرارية لكل 100 جرام
  protein: number;         // جرام لكل 100 جرام
  carbs: number;           // جرام لكل 100 جرام
  fat: number;             // جرام لكل 100 جرام
  fiber: number;           // جرام لكل 100 جرام
  defaultUnitWeight: number; // وزن الحبة/الواحدة بالجرام (مثلاً 150ج للتفاحة)
  unitNameAr: string;      // اسم الوحدة (حبة متوسطة، قطعة، كوب، ملعقة...)
  micros: VitaminsAndMinerals; // الفيتامينات والمعادن لكل 100 جرام
  supplementConfig?: SupplementDoseConfig;
}

export interface UserProfile {
  gender: 'male' | 'female';
  age: number;
  heightCm: number;
  weightKg: number;
  activityLevel: 'low' | 'moderate' | 'high';
  weightLossTargetKg: number; // هدف تنزيل الوزن بالكجم (مثلا 5)
  timeframeWeeks: number;     // الفترة الزمنية بالأسابيع (مثلا 4 أسابيع)
}

export interface LoggedMeal {
  id: string;
  food: FoodItem;
  amountType: 'weight' | 'count';
  amountValue: number;       // 150 جرام أو 2 حبة
  calculatedGrams: number;  // إجمالي الجرامات
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  timestamp: string;
}

export interface CategoryInfo {
  id: FoodCategory;
  nameAr: string;
  iconName: string;
  color: string;
  bgLight: string;
  description: string;
}

export interface MealIngredient {
  food: FoodItem;
  amountType: 'weight' | 'count';
  amountValue: number;
  calculatedGrams: number;
}

export interface CustomMealRecipe {
  id: string;
  nameAr: string;
  defaultMealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  ingredients: MealIngredient[];
  createdAt: string;
}

