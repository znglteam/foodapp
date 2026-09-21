import React from 'react';
import { LoggedMeal } from '../types';
import { calculateMealNutrition } from '../utils/nutritionCalculators';
import { 
  X, 
  Sparkles, 
  Flame, 
  Beef, 
  Wheat, 
  Droplet, 
  ShieldCheck, 
  Zap, 
  Heart,
  Scale
} from 'lucide-react';

interface MealDetailBottomSheetProps {
  meal: LoggedMeal;
  onClose: () => void;
}

export const MealDetailBottomSheet: React.FC<MealDetailBottomSheetProps> = ({ meal, onClose }) => {
  const calc = calculateMealNutrition(meal.food, meal.amountType, meal.amountValue);
  const m = calc.micros;

  const getMealTypeName = (type: LoggedMeal['mealType']) => {
    switch (type) {
      case 'breakfast': return 'إفطار';
      case 'lunch': return 'غداء';
      case 'dinner': return 'عشاء';
      case 'snack': return 'وجبة خفيفة';
      default: return 'وجبة';
    }
  };

  const vitaminsList = [
    { name: 'فيتامين أ (Vit A)', val: `${m.vitA_mcg} ميكروجرام`, icon: '👁️' },
    { name: 'فيتامين ج (Vit C)', val: `${m.vitC_mg} ملجم`, icon: '🍋' },
    { name: 'فيتامين د (Vit D)', val: `${m.vitD_mcg} ميكروجرام`, icon: '☀️' },
    { name: 'فيتامين هـ (Vit E)', val: `${m.vitE_mg} ملجم`, icon: '🥑' },
    { name: 'فيتامين ك (Vit K)', val: `${m.vitK_mcg} ميكروجرام`, icon: '🥬' },
    { name: 'فيتامين ب1 (الثيامين)', val: `${m.vitB1_mg} ملجم`, icon: '🌾' },
    { name: 'فيتامين ب2 (الرايبوفلافين)', val: `${m.vitB2_mg} ملجم`, icon: '🥛' },
    { name: 'فيتامين ب3 (النياسين)', val: `${m.vitB3_mg} ملجم`, icon: '🥩' },
    { name: 'فيتامين ب5 (حمض البانتوثينيك)', val: `${m.vitB5_mg || 0} ملجم`, icon: '🍳' },
    { name: 'فيتامين ب6 (البيريدوكسين)', val: `${m.vitB6_mg} ملجم`, icon: '🍌' },
    { name: 'فيتامين ب12', val: `${m.vitB12_mcg} ميكروجرام`, icon: '🍗' },
    { name: 'حمض الفوليك (B9)', val: `${m.folate_mcg} ميكروجرام`, icon: '🌱' },
  ];

  const mineralsList = [
    { name: 'الكالسيوم (Calcium)', val: `${m.calcium_mg} ملجم`, icon: '🦴' },
    { name: 'الحديد (Iron)', val: `${m.iron_mg} ملجم`, icon: '🩸' },
    { name: 'البوتاسيوم (Potassium)', val: `${m.potassium_mg} ملجم`, icon: '🍌' },
    { name: 'الماغنيسيوم (Magnesium)', val: `${m.magnesium_mg} ملجم`, icon: '⚡' },
    { name: 'الزنك (Zinc)', val: `${m.zinc_mg} ملجم`, icon: '🛡️' },
    { name: 'الصوديوم (Sodium)', val: `${m.sodium_mg} ملجم`, icon: '🧂' },
    { name: 'الفوسفور (Phosphorus)', val: `${m.phosphorus_mg || 0} ملجم`, icon: '🧪' },
    { name: 'السيلينيوم (Selenium)', val: `${m.selenium_mcg || 0} ميكروجرام`, icon: '💎' },
    { name: 'النحاس (Copper)', val: `${m.copper_mg || 0} ملجم`, icon: '🥉' },
    { name: 'المنجنيز (Manganese)', val: `${m.manganese_mg || 0} ملجم`, icon: '⚙️' },
  ];

  const omegas = [
    { name: 'أوميغا 3 (Omega-3)', val: `${m.omega3_mg || 0} ملجم`, icon: '🐟' },
    { name: 'أوميغا 6 (Omega-6)', val: `${m.omega6_mg || 0} ملجم`, icon: '🥜' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto space-y-5 animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle Bar */}
        <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto sm:hidden -mt-1" />

        {/* Sheet Header */}
        <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#71a874]/15 text-[#71a874]">
                {getMealTypeName(meal.mealType)}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                <Scale className="w-3.5 h-3.5 text-slate-400" />
                <span>{meal.amountValue} {meal.amountType === 'count' ? meal.food.unitNameAr : 'جرام'} ({calc.grams} جرام)</span>
              </span>
            </div>
            <h3 className="text-lg font-black text-[#414141] dark:text-white">
              {meal.food.nameAr}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Quick Summary Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* Calories */}
          <div className="p-3 rounded-2xl bg-[#414141]/10 dark:bg-[#414141]/30 border border-[#414141]/20 flex flex-col items-center justify-center text-center">
            <Flame className="w-5 h-5 mb-1 text-[#414141] dark:text-slate-300" />
            <span className="text-[10px] text-[#414141] dark:text-slate-300 font-medium">سعرات حرارية</span>
            <span className="text-base font-black text-[#414141] dark:text-slate-100">{calc.calories}</span>
          </div>

          {/* Protein */}
          <div className="p-3 rounded-2xl bg-[#71a874]/10 dark:bg-[#71a874]/20 border border-[#71a874]/30 flex flex-col items-center justify-center text-center">
            <Beef className="w-5 h-5 mb-1 text-[#71a874]" />
            <span className="text-[10px] text-[#71a874] font-medium">بروتين</span>
            <span className="text-base font-black text-[#71a874]">{calc.protein}غ</span>
          </div>

          {/* Carbs & Starches */}
          <div className="p-3 rounded-2xl bg-[#607fc4]/10 dark:bg-[#607fc4]/20 border border-[#607fc4]/30 flex flex-col items-center justify-center text-center">
            <Wheat className="w-5 h-5 mb-1 text-[#607fc4]" />
            <span className="text-[10px] text-[#607fc4] font-medium">نشويات</span>
            <span className="text-base font-black text-[#607fc4]">{calc.carbs}غ</span>
          </div>

          {/* Fat */}
          <div className="p-3 rounded-2xl bg-[#bb5791]/10 dark:bg-[#bb5791]/20 border border-[#bb5791]/30 flex flex-col items-center justify-center text-center">
            <Droplet className="w-5 h-5 mb-1 text-[#bb5791]" />
            <span className="text-[10px] text-[#bb5791] font-medium">دهون</span>
            <span className="text-base font-black text-[#bb5791]">{calc.fat}غ</span>
          </div>
        </div>

        {/* Vitamins Breakdown */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#414141] dark:text-white flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#607fc4]" />
            <span>محتوى الفيتامينات في هذه الكمية ({calc.grams}غ)</span>
          </h4>
          <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-1">
            {vitaminsList.map((v, idx) => (
              <div 
                key={idx}
                className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5 text-[11px] font-medium">
                  <span>{v.icon}</span>
                  <span>{v.name}</span>
                </span>
                <span className="font-bold text-[#414141] dark:text-white text-[11px]">{v.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Minerals Breakdown */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#414141] dark:text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#71a874]" />
            <span>محتوى المعادن والعناصر</span>
          </h4>
          <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-1">
            {mineralsList.map((m, idx) => (
              <div 
                key={idx}
                className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5 text-[11px] font-medium">
                  <span>{m.icon}</span>
                  <span>{m.name}</span>
                </span>
                <span className="font-bold text-[#414141] dark:text-white text-[11px]">{m.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Omegas */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#414141] dark:text-white flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#bb5791]" />
            <span>الأحماض الدهنية النافعة</span>
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {omegas.map((o, idx) => (
              <div 
                key={idx}
                className="p-2.5 rounded-xl bg-[#607fc4]/10 dark:bg-[#607fc4]/20 border border-[#607fc4]/30 flex items-center justify-between text-xs"
              >
                <span className="text-[#607fc4] font-bold flex items-center gap-1.5 text-[11px]">
                  <span>{o.icon}</span>
                  <span>{o.name}</span>
                </span>
                <span className="font-extrabold text-[#607fc4] text-[11px]">{o.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 bg-[#71a874] hover:bg-[#607fc4] text-white font-bold text-xs rounded-2xl transition-colors cursor-pointer"
        >
          إغلاق الملخص
        </button>

      </div>
    </div>
  );
};
