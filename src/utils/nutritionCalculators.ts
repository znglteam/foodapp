import { UserProfile, VitaminsAndMinerals, LoggedMeal, FoodItem } from '../types';

export interface CalculatedTarget {
  bmr: number;
  tdee: number;
  dailyDeficitKcal: number;
  recommendedDailyCalories: number;
  weeklyWeightLossKg: number;
  isDeficitTooAggressive: boolean;
  safeMinimumCalories: number;
  recommendedMacros: {
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
  };
  recommendedMicros: VitaminsAndMinerals;
}

export interface BMIInfo {
  bmi: number;
  category: 'underweight' | 'normal' | 'overweight' | 'obese_1' | 'obese_2_plus';
  labelAr: string;
  descriptionAr: string;
  idealWeightMinKg: number;
  idealWeightMaxKg: number;
  badgeColor: string;
}

export function calculateBMIInfo(weightKg: number, heightCm: number): BMIInfo {
  const heightM = heightCm > 0 ? heightCm / 100 : 1.7;
  const rawBmi = weightKg > 0 && heightM > 0 ? weightKg / (heightM * heightM) : 22;
  const bmi = Math.round(rawBmi * 10) / 10;
  
  const idealWeightMinKg = Math.round(18.5 * heightM * heightM * 10) / 10;
  const idealWeightMaxKg = Math.round(24.9 * heightM * heightM * 10) / 10;

  if (bmi < 18.5) {
    return {
      bmi,
      category: 'underweight',
      labelAr: 'نحافة (أقل من الطبيعي)',
      descriptionAr: 'وزنك أقل من المعدل الطبيعي بالنسبة لطولك، يفضل التغذية المتوازنة لبناء كتلة صحية.',
      idealWeightMinKg,
      idealWeightMaxKg,
      badgeColor: 'text-[#607fc4] bg-[#607fc4]/15 dark:text-[#607fc4] border-[#607fc4]/40'
    };
  } else if (bmi <= 24.9) {
    return {
      bmi,
      category: 'normal',
      labelAr: 'وزن مثالي وطبيعي (ممتاز)',
      descriptionAr: 'وزنك متناسق وصحي تماماً مع طولك! استمر في المحافظة على نمط حياتك المتوازن.',
      idealWeightMinKg,
      idealWeightMaxKg,
      badgeColor: 'text-[#71a874] bg-[#71a874]/15 dark:text-[#71a874] border-[#71a874]/40'
    };
  } else if (bmi <= 29.9) {
    return {
      bmi,
      category: 'overweight',
      labelAr: 'زيادة في الوزن',
      descriptionAr: 'يوجد وزن إضافي فوق المعدل الطبيعي بالنسبة لطولك، مناسب جداً لاتباع خطة خسارة وزن معتدلة.',
      idealWeightMinKg,
      idealWeightMaxKg,
      badgeColor: 'text-[#414141] dark:text-slate-200 bg-[#414141]/15 border-[#414141]/40'
    };
  } else if (bmi <= 34.9) {
    return {
      bmi,
      category: 'obese_1',
      labelAr: 'سمنة (درجة 1)',
      descriptionAr: 'يوجد زيادة ملحوظة في الوزن، يوصى بإنقاص الوزن تدريجياً لتعزيز نشاطك وصحتك العامة.',
      idealWeightMinKg,
      idealWeightMaxKg,
      badgeColor: 'text-[#bb5791] bg-[#bb5791]/15 dark:text-[#bb5791] border-[#bb5791]/40'
    };
  } else {
    return {
      bmi,
      category: 'obese_2_plus',
      labelAr: 'سمنة مفرطة',
      descriptionAr: 'الوزن أعلى بكثير من المعدل الطبيعي بالنسبة للطول، ننصح ببرنامج غذائي متوازن ونشاط بدني مناسب.',
      idealWeightMinKg,
      idealWeightMaxKg,
      badgeColor: 'text-[#bb5791] bg-[#bb5791]/15 dark:text-[#bb5791] border-[#bb5791]/40'
    };
  }
}

export function calculateBMR(profile: UserProfile): number {
  const { gender, weightKg, heightCm, age } = profile;
  if (gender === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
}

export function getActivityMultiplier(activityLevel: 'low' | 'moderate' | 'high'): number {
  switch (activityLevel) {
    case 'low':
      return 1.2;     // قليل (خمول / مكتب)
    case 'moderate':
      return 1.55;    // متوسط (رياضة 3-5 أيام)
    case 'high':
      return 1.725;   // مرتفع (نشاط عالي / رياضة يومية)
    default:
      return 1.375;
  }
}

export function calculateUserTargets(profile: UserProfile): CalculatedTarget {
  const bmr = Math.round(calculateBMR(profile));
  const activityMult = getActivityMultiplier(profile.activityLevel);
  const tdee = Math.round(bmr * activityMult);

  const safeMinimum = profile.gender === 'male' ? 1500 : 1200;

  // 1 kg of fat ~ 7700 kcal
  const totalWeightLossTarget = Math.max(0, profile.weightLossTargetKg || 0);
  const weeks = Math.max(1, profile.timeframeWeeks || 1);
  const totalDays = weeks * 7;
  
  const totalDeficitNeeded = totalWeightLossTarget * 7700;
  let dailyDeficitKcal = Math.round(totalDeficitNeeded / totalDays);
  
  let recommendedDailyCalories = tdee - dailyDeficitKcal;
  let isDeficitTooAggressive = false;

  // Max safe deficit is typically around 1000 kcal per day (~1kg per week)
  if (dailyDeficitKcal > 1000 || recommendedDailyCalories < safeMinimum) {
    isDeficitTooAggressive = true;
  }

  // Bound calorie recommendation to safe floor
  if (recommendedDailyCalories < safeMinimum) {
    recommendedDailyCalories = safeMinimum;
  }

  const actualDeficit = tdee - recommendedDailyCalories;
  const weeklyWeightLossKg = Number(((actualDeficit * 7) / 7700).toFixed(2));

  // Macronutrient calculation:
  // Protein: ~1.8g per kg body weight (higher protein during weight loss protects muscle)
  const proteinGrams = Math.round(profile.weightKg * 1.8);
  const proteinCalories = proteinGrams * 4;

  // Fat: 25% of daily target calories
  const fatCalories = recommendedDailyCalories * 0.25;
  const fatGrams = Math.round(fatCalories / 9);

  // Carbs: Remaining calories
  const remainingCaloriesForCarbs = Math.max(0, recommendedDailyCalories - proteinCalories - fatCalories);
  const carbsGrams = Math.round(remainingCaloriesForCarbs / 4);

  const fiberGrams = profile.gender === 'male' ? 38 : 28;

  // Recommended Micro-nutrients Daily RDAs
  const isMale = profile.gender === 'male';
  const recommendedMicros: VitaminsAndMinerals = {
    vitA_mcg: isMale ? 900 : 700,
    vitC_mg: isMale ? 90 : 75,
    vitD_mcg: 15,
    vitE_mg: 15,
    vitK_mcg: isMale ? 120 : 90,
    vitB1_mg: isMale ? 1.2 : 1.1,
    vitB2_mg: isMale ? 1.3 : 1.1,
    vitB3_mg: isMale ? 16 : 14,
    vitB5_mg: 5,
    vitB6_mg: 1.7,
    vitB12_mcg: 2.4,
    folate_mcg: 400,
    calcium_mg: 1000,
    iron_mg: isMale ? 8 : 18,
    potassium_mg: isMale ? 3400 : 2600,
    magnesium_mg: isMale ? 420 : 320,
    zinc_mg: isMale ? 11 : 8,
    sodium_mg: 2000,
    omega3_mg: isMale ? 1600 : 1100,
    omega6_mg: isMale ? 17000 : 12000,
    phosphorus_mg: 700,
    selenium_mcg: 55,
    copper_mg: 0.9,
    manganese_mg: isMale ? 2.3 : 1.8
  };

  return {
    bmr,
    tdee,
    dailyDeficitKcal,
    recommendedDailyCalories,
    weeklyWeightLossKg,
    isDeficitTooAggressive,
    safeMinimumCalories: safeMinimum,
    recommendedMacros: {
      proteinGrams,
      carbsGrams,
      fatGrams,
      fiberGrams
    },
    recommendedMicros
  };
}

export function calculateMealNutrition(food: FoodItem, amountType: 'weight' | 'count', amountValue: number) {
  const grams = amountType === 'weight'
    ? amountValue
    : amountValue * (food.defaultUnitWeight || 100);

  const factor = grams / 100;

  const calories = Math.round(food.calories * factor);
  const protein = Number((food.protein * factor).toFixed(1));
  const carbs = Number((food.carbs * factor).toFixed(1));
  const fat = Number((food.fat * factor).toFixed(1));
  const fiber = Number((food.fiber * factor).toFixed(1));

  const micros: VitaminsAndMinerals = {
    vitA_mcg: Number((food.micros.vitA_mcg * factor).toFixed(1)),
    vitC_mg: Number((food.micros.vitC_mg * factor).toFixed(1)),
    vitD_mcg: Number((food.micros.vitD_mcg * factor).toFixed(1)),
    vitE_mg: Number((food.micros.vitE_mg * factor).toFixed(1)),
    vitK_mcg: Number((food.micros.vitK_mcg * factor).toFixed(1)),
    vitB1_mg: Number((food.micros.vitB1_mg * factor).toFixed(2)),
    vitB2_mg: Number((food.micros.vitB2_mg * factor).toFixed(2)),
    vitB3_mg: Number((food.micros.vitB3_mg * factor).toFixed(2)),
    vitB5_mg: Number(((food.micros.vitB5_mg || 0) * factor).toFixed(2)),
    vitB6_mg: Number((food.micros.vitB6_mg * factor).toFixed(2)),
    vitB12_mcg: Number((food.micros.vitB12_mcg * factor).toFixed(2)),
    folate_mcg: Number((food.micros.folate_mcg * factor).toFixed(1)),
    calcium_mg: Number((food.micros.calcium_mg * factor).toFixed(1)),
    iron_mg: Number((food.micros.iron_mg * factor).toFixed(2)),
    potassium_mg: Number((food.micros.potassium_mg * factor).toFixed(1)),
    magnesium_mg: Number((food.micros.magnesium_mg * factor).toFixed(1)),
    zinc_mg: Number((food.micros.zinc_mg * factor).toFixed(2)),
    sodium_mg: Number((food.micros.sodium_mg * factor).toFixed(1)),
    omega3_mg: Number(((food.micros.omega3_mg || 0) * factor).toFixed(1)),
    omega6_mg: Number(((food.micros.omega6_mg || 0) * factor).toFixed(1)),
    phosphorus_mg: Number(((food.micros.phosphorus_mg || 0) * factor).toFixed(1)),
    selenium_mcg: Number(((food.micros.selenium_mcg || 0) * factor).toFixed(1)),
    copper_mg: Number(((food.micros.copper_mg || 0) * factor).toFixed(2)),
    manganese_mg: Number(((food.micros.manganese_mg || 0) * factor).toFixed(2))
  };

  return {
    grams: Math.round(grams),
    calories,
    protein,
    carbs,
    fat,
    fiber,
    micros
  };
}

export function sumLoggedMealsNutrition(meals: LoggedMeal[]) {
  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fat = 0;
  let fiber = 0;

  const microsAcc: VitaminsAndMinerals = {
    vitA_mcg: 0, vitC_mg: 0, vitD_mcg: 0, vitE_mg: 0, vitK_mcg: 0,
    vitB1_mg: 0, vitB2_mg: 0, vitB3_mg: 0, vitB5_mg: 0, vitB6_mg: 0, vitB12_mcg: 0,
    folate_mcg: 0, calcium_mg: 0, iron_mg: 0, potassium_mg: 0, magnesium_mg: 0, zinc_mg: 0, sodium_mg: 0,
    omega3_mg: 0, omega6_mg: 0, phosphorus_mg: 0, selenium_mcg: 0, copper_mg: 0, manganese_mg: 0
  };

  meals.forEach((meal) => {
    const calc = calculateMealNutrition(meal.food, meal.amountType, meal.amountValue);
    calories += calc.calories;
    protein += calc.protein;
    carbs += calc.carbs;
    fat += calc.fat;
    fiber += calc.fiber;

    Object.keys(microsAcc).forEach((key) => {
      const k = key as keyof VitaminsAndMinerals;
      microsAcc[k] += calc.micros[k];
    });
  });

  // Round results nicely
  return {
    calories: Math.round(calories),
    protein: Number(protein.toFixed(1)),
    carbs: Number(carbs.toFixed(1)),
    fat: Number(fat.toFixed(1)),
    fiber: Number(fiber.toFixed(1)),
    micros: {
      vitA_mcg: Number(microsAcc.vitA_mcg.toFixed(1)),
      vitC_mg: Number(microsAcc.vitC_mg.toFixed(1)),
      vitD_mcg: Number(microsAcc.vitD_mcg.toFixed(1)),
      vitE_mg: Number(microsAcc.vitE_mg.toFixed(1)),
      vitK_mcg: Number(microsAcc.vitK_mcg.toFixed(1)),
      vitB1_mg: Number(microsAcc.vitB1_mg.toFixed(2)),
      vitB2_mg: Number(microsAcc.vitB2_mg.toFixed(2)),
      vitB3_mg: Number(microsAcc.vitB3_mg.toFixed(2)),
      vitB5_mg: Number((microsAcc.vitB5_mg || 0).toFixed(2)),
      vitB6_mg: Number(microsAcc.vitB6_mg.toFixed(2)),
      vitB12_mcg: Number(microsAcc.vitB12_mcg.toFixed(2)),
      folate_mcg: Number(microsAcc.folate_mcg.toFixed(1)),
      calcium_mg: Number(microsAcc.calcium_mg.toFixed(1)),
      iron_mg: Number(microsAcc.iron_mg.toFixed(2)),
      potassium_mg: Number(microsAcc.potassium_mg.toFixed(1)),
      magnesium_mg: Number(microsAcc.magnesium_mg.toFixed(1)),
      zinc_mg: Number(microsAcc.zinc_mg.toFixed(2)),
      sodium_mg: Number(microsAcc.sodium_mg.toFixed(1)),
      omega3_mg: Number(microsAcc.omega3_mg.toFixed(1)),
      omega6_mg: Number(microsAcc.omega6_mg.toFixed(1)),
      phosphorus_mg: Number(microsAcc.phosphorus_mg.toFixed(1)),
      selenium_mcg: Number(microsAcc.selenium_mcg.toFixed(1)),
      copper_mg: Number(microsAcc.copper_mg.toFixed(2)),
      manganese_mg: Number(microsAcc.manganese_mg.toFixed(2))
    }
  };
}

export function calculateRecipeNutrition(ingredients: { food: FoodItem; amountType: 'weight' | 'count'; amountValue: number }[]) {
  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fat = 0;
  let fiber = 0;

  ingredients.forEach((ing) => {
    const calc = calculateMealNutrition(ing.food, ing.amountType, ing.amountValue);
    calories += calc.calories;
    protein += calc.protein;
    carbs += calc.carbs;
    fat += calc.fat;
    fiber += calc.fiber;
  });

  return {
    calories: Math.round(calories),
    protein: Number(protein.toFixed(1)),
    carbs: Number(carbs.toFixed(1)),
    fat: Number(fat.toFixed(1)),
    fiber: Number(fiber.toFixed(1))
  };
}

