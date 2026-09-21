import React, { useState } from 'react';
import { LoggedMeal, UserProfile } from '../types';
import { calculateUserTargets, sumLoggedMealsNutrition } from '../utils/nutritionCalculators';
import { 
  Flame, 
  Dumbbell, 
  Wheat, 
  Droplet, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  PieChart 
} from 'lucide-react';

interface NutrientProgressDashboardProps {
  loggedMeals: LoggedMeal[];
  profile: UserProfile;
}

export const NutrientProgressDashboard: React.FC<NutrientProgressDashboardProps> = ({
  loggedMeals,
  profile,
}) => {
  const [showAllMicros, setShowAllMicros] = useState(false);

  const targets = calculateUserTargets(profile);
  const consumed = sumLoggedMealsNutrition(loggedMeals);

  const calTarget = targets.recommendedDailyCalories;
  const calPercent = Math.min(100, Math.round((consumed.calories / calTarget) * 100));

  const proteinTarget = targets.recommendedMacros.proteinGrams;
  const proteinPercent = Math.min(100, Math.round((consumed.protein / proteinTarget) * 100));

  const carbsTarget = targets.recommendedMacros.carbsGrams;
  const carbsPercent = Math.min(100, Math.round((consumed.carbs / carbsTarget) * 100));

  const fatTarget = targets.recommendedMacros.fatGrams;
  const fatPercent = Math.min(100, Math.round((consumed.fat / fatTarget) * 100));

  const fiberTarget = targets.recommendedMacros.fiberGrams;
  const fiberPercent = Math.min(100, Math.round((consumed.fiber / fiberTarget) * 100));

  const recM = targets.recommendedMicros;
  const conM = consumed.micros;

  const keyMicros = [
    { name: 'أوميغا 3 (Omega-3)', consumed: conM.omega3_mg || 0, target: recM.omega3_mg, unit: 'ملجم', icon: '🐟' },
    { name: 'فيتامين ج (Vit C)', consumed: conM.vitC_mg, target: recM.vitC_mg, unit: 'ملجم', icon: '🍋' },
    { name: 'فيتامين د (Vit D)', consumed: conM.vitD_mcg, target: recM.vitD_mcg, unit: 'ميكروجرام', icon: '☀️' },
    { name: 'الحديد (Iron)', consumed: conM.iron_mg, target: recM.iron_mg, unit: 'ملجم', icon: '🩸' },
    { name: 'الكالسيوم (Calcium)', consumed: conM.calcium_mg, target: recM.calcium_mg, unit: 'ملجم', icon: '🦴' },
    { name: 'البوتاسيوم (Potassium)', consumed: conM.potassium_mg, target: recM.potassium_mg, unit: 'ملجم', icon: '🍌' },
  ];

  const allMicros = [
    ...keyMicros,
    { name: 'أوميغا 6 (Omega-6)', consumed: conM.omega6_mg || 0, target: recM.omega6_mg, unit: 'ملجم', icon: '🥜' },
    { name: 'الزنك (Zinc)', consumed: conM.zinc_mg, target: recM.zinc_mg, unit: 'ملجم', icon: '🛡️' },
    { name: 'فيتامين أ (Vit A)', consumed: conM.vitA_mcg, target: recM.vitA_mcg, unit: 'ميكروجرام', icon: '👁️' },
    { name: 'فيتامين هـ (Vit E)', consumed: conM.vitE_mg, target: recM.vitE_mg, unit: 'ملجم', icon: '🥑' },
    { name: 'فيتامين ك (Vit K)', consumed: conM.vitK_mcg, target: recM.vitK_mcg, unit: 'ميكروجرام', icon: '🥬' },
    { name: 'فيتامين ب1 (B1)', consumed: conM.vitB1_mg, target: recM.vitB1_mg, unit: 'ملجم', icon: '🌾' },
    { name: 'فيتامين ب2 (B2)', consumed: conM.vitB2_mg, target: recM.vitB2_mg, unit: 'ملجم', icon: '🥛' },
    { name: 'فيتامين ب3 (B3)', consumed: conM.vitB3_mg, target: recM.vitB3_mg, unit: 'ملجم', icon: '🥩' },
    { name: 'فيتامين ب5 (B5)', consumed: conM.vitB5_mg || 0, target: recM.vitB5_mg || 5, unit: 'ملجم', icon: '🍳' },
    { name: 'فيتامين ب6 (B6)', consumed: conM.vitB6_mg, target: recM.vitB6_mg, unit: 'ملجم', icon: '🍌' },
    { name: 'فيتامين ب12', consumed: conM.vitB12_mcg, target: recM.vitB12_mcg, unit: 'ميكروجرام', icon: '🍗' },
    { name: 'حمض الفوليك (B9)', consumed: conM.folate_mcg, target: recM.folate_mcg, unit: 'ميكروجرام', icon: '🌱' },
    { name: 'الماغنيسيوم', consumed: conM.magnesium_mg, target: recM.magnesium_mg, unit: 'ملجم', icon: '⚡' },
    { name: 'الصوديوم', consumed: conM.sodium_mg, target: recM.sodium_mg, unit: 'ملجم', icon: '🧂' },
    { name: 'الفوسفور', consumed: conM.phosphorus_mg || 0, target: recM.phosphorus_mg, unit: 'ملجم', icon: '🧪' },
    { name: 'السيلينيوم', consumed: conM.selenium_mcg || 0, target: recM.selenium_mcg, unit: 'ميكروجرام', icon: '💎' },
    { name: 'النحاس', consumed: conM.copper_mg || 0, target: recM.copper_mg, unit: 'ملجم', icon: '🥉' },
    { name: 'المنجنيز', consumed: conM.manganese_mg || 0, target: recM.manganese_mg, unit: 'ملجم', icon: '⚙️' },
  ];

  const displayedMicros = showAllMicros ? allMicros : keyMicros;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-lg space-y-6">
      
      {/* Title */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-[#71a874]/15 text-[#71a874]">
            <PieChart className="w-5 h-5 text-[#71a874]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#414141] dark:text-white">
              استهلاكك اليوم حتى الآن
            </h3>
          </div>
        </div>
      </div>

      {/* Main Calorie Progress Card */}
      <div className="p-5 rounded-2xl bg-[#414141] text-white shadow-xl space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#71a874]/20 border border-[#71a874]/30 rounded-2xl text-[#71a874]">
              <Flame className="w-6 h-6 text-[#71a874]" />
            </div>
            <div>
              <span className="text-xs text-slate-300 block font-medium">إجمالي السعرات اليومية</span>
              <div className="text-2xl font-black text-white flex items-baseline gap-1.5">
                <span>{consumed.calories}</span>
                <span className="text-xs font-normal text-slate-300">من {calTarget} سعرة مستهدفة</span>
              </div>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs font-bold text-[#71a874] block">
              {calTarget - consumed.calories >= 0
                ? `متبقي ${calTarget - consumed.calories} سعرة`
                : `تجاوزت الهدف بـ ${consumed.calories - calTarget} سعرة`}
            </span>
          </div>
        </div>

        {/* Calorie Bar */}
        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden p-0.5">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              consumed.calories > calTarget ? 'bg-[#bb5791]' : 'bg-[#71a874]'
            }`}
            style={{ width: `${Math.min(100, calPercent)}%` }}
          />
        </div>

      </div>

      {/* Macronutrient Progress Bars Grid */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-[#414141] dark:text-slate-200">
          تتبع الماكروز اليومية:
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Protein */}
          <div className="p-3.5 rounded-2xl bg-[#71a874]/10 dark:bg-[#71a874]/20 border border-[#71a874]/30 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#414141] dark:text-[#71a874] flex items-center gap-1">
                <Dumbbell className="w-3.5 h-3.5 text-[#71a874]" />
                <span>بروتين</span>
              </span>
              <span className="font-bold text-[#71a874]">
                {consumed.protein} / {proteinTarget}غ
              </span>
            </div>
            <div className="w-full bg-[#71a874]/20 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#71a874] rounded-full transition-all duration-500" 
                style={{ width: `${proteinPercent}%` }} 
              />
            </div>
          </div>

          {/* Carbs */}
          <div className="p-3.5 rounded-2xl bg-[#607fc4]/10 dark:bg-[#607fc4]/20 border border-[#607fc4]/30 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#414141] dark:text-[#607fc4] flex items-center gap-1">
                <Wheat className="w-3.5 h-3.5 text-[#607fc4]" />
                <span>نشويات</span>
              </span>
              <span className="font-bold text-[#607fc4]">
                {consumed.carbs} / {carbsTarget}غ
              </span>
            </div>
            <div className="w-full bg-[#607fc4]/20 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#607fc4] rounded-full transition-all duration-500" 
                style={{ width: `${carbsPercent}%` }} 
              />
            </div>
          </div>

          {/* Fat */}
          <div className="p-3.5 rounded-2xl bg-[#bb5791]/10 dark:bg-[#bb5791]/20 border border-[#bb5791]/30 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#414141] dark:text-[#bb5791] flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5 text-[#bb5791]" />
                <span>دهون</span>
              </span>
              <span className="font-bold text-[#bb5791]">
                {consumed.fat} / {fatTarget}غ
              </span>
            </div>
            <div className="w-full bg-[#bb5791]/20 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#bb5791] rounded-full transition-all duration-500" 
                style={{ width: `${fatPercent}%` }} 
              />
            </div>
          </div>

        </div>
      </div>

      {/* Vitamins & Minerals Section */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-[#414141] dark:text-slate-200 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#71a874]" />
            <span>الفيتامينات والمعادن المغطاة من احتياجك اليومي:</span>
          </h4>

          <button
            onClick={() => setShowAllMicros(!showAllMicros)}
            className="text-xs text-[#607fc4] dark:text-[#607fc4] font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>{showAllMicros ? 'عرض أقل' : 'عرض الكل'}</span>
            {showAllMicros ? <ChevronUp className="w-3.5 h-3.5 text-[#607fc4]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#607fc4]" />}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {displayedMicros.map((item, idx) => {
            const pct = Math.min(100, Math.round((item.consumed / item.target) * 100));
            const isDone = pct >= 100;

            return (
              <div 
                key={idx}
                className="p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-1.5 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                    {item.icon} {item.name}
                  </span>
                  <span className={`text-[10px] font-bold ${isDone ? 'text-[#71a874]' : 'text-slate-500'}`}>
                    {pct}%
                  </span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      isDone ? 'bg-[#71a874]' : pct > 50 ? 'bg-[#607fc4]' : 'bg-[#414141]/40'
                    }`} 
                    style={{ width: `${pct}%` }} 
                  />
                </div>

                <div className="text-[10px] text-slate-400 text-left dir-ltr">
                  {item.consumed} / {item.target} {item.unit}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
