import React, { useState } from 'react';
import { LoggedMeal, FoodItem } from '../types';
import { calculateMealNutrition } from '../utils/nutritionCalculators';
import { MealDetailBottomSheet } from './MealDetailBottomSheet';
import { 
  Trash2, 
  Clock, 
  Info, 
  UtensilsCrossed,
  Sparkles,
  Pill
} from 'lucide-react';

interface DailyLogListProps {
  loggedMeals: LoggedMeal[];
  onRemoveMeal: (mealId: string) => void;
  onViewItemDetails: (item: FoodItem) => void;
  onClearAll: () => void;
}

export const DailyLogList: React.FC<DailyLogListProps> = ({
  loggedMeals,
  onRemoveMeal,
  onViewItemDetails,
  onClearAll,
}) => {
  const [filterMealType, setFilterMealType] = useState<string>('all');
  const [selectedMealForSummary, setSelectedMealForSummary] = useState<LoggedMeal | null>(null);

  const filteredMeals = loggedMeals.filter((m) => {
    if (filterMealType === 'all') return true;
    return m.mealType === filterMealType;
  });

  const getMealTypeBadge = (type: LoggedMeal['mealType']) => {
    switch (type) {
      case 'breakfast':
        return { label: 'إفطار', bg: 'bg-[#71a874]/15 text-[#71a874]' };
      case 'lunch':
        return { label: 'غداء', bg: 'bg-[#607fc4]/15 text-[#607fc4]' };
      case 'dinner':
        return { label: 'عشاء', bg: 'bg-[#414141]/10 dark:bg-[#414141]/30 text-[#414141] dark:text-slate-300' };
      case 'snack':
        return { label: 'وجبة خفيفة', bg: 'bg-[#bb5791]/15 text-[#bb5791]' };
      default:
        return { label: 'وجبة', bg: 'bg-[#414141]/10 text-[#414141]' };
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-lg space-y-4">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-[#71a874]/15 text-[#71a874]">
            <Clock className="w-5 h-5 text-[#71a874]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#414141] dark:text-white flex items-center gap-2">
              <span>سجل الوجبات اليومية</span>
              <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-[#71a874]/15 text-[#71a874]">
                {loggedMeals.length} وجبات
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              قائمة جميع الأطعمة التي تناولتها اليوم مع إجمالي السعرات والماكروز
            </p>
          </div>
        </div>

        {loggedMeals.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs font-bold text-[#bb5791] hover:bg-[#bb5791]/10 px-3 py-1.5 rounded-xl transition-colors self-start sm:self-auto cursor-pointer"
          >
            حذف كافة وجبات اليوم
          </button>
        )}
      </div>

      {/* Meal Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {[
          { id: 'all', label: 'الكل' },
          { id: 'breakfast', label: 'الإفطار' },
          { id: 'lunch', label: 'الغداء' },
          { id: 'dinner', label: 'العشاء' },
          { id: 'snack', label: 'الوجبات الخفيفة' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilterMealType(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              filterMealType === tab.id
                ? 'bg-[#71a874] text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Log List */}
      {filteredMeals.length > 0 ? (
        <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
          {filteredMeals.map((meal) => {
            const calc = calculateMealNutrition(meal.food, meal.amountType, meal.amountValue);
            const badge = getMealTypeBadge(meal.mealType);

            return (
              <div
                key={meal.id}
                onClick={() => setSelectedMealForSummary(meal)}
                className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#414141] dark:text-white group-hover:text-[#71a874] transition-colors">
                        {meal.food.nameAr}
                      </span>
                      {meal.food.category === 'supplements' ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#607fc4]/15 text-[#607fc4] flex items-center gap-1">
                          <Pill className="w-2.5 h-2.5" />
                          <span>مكمل غذائي</span>
                        </span>
                      ) : (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg}`}>
                          {badge.label}
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
                      <span>
                        {meal.amountValue} {meal.amountType === 'count' ? meal.food.unitNameAr : 'جرام'}
                        {meal.food.category !== 'supplements' && ` (${calc.grams}غ)`}
                      </span>
                      <span className="text-[#607fc4] text-[10px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="w-3 h-3 text-[#607fc4]" />
                        <span>انقر لتفاصيل الفيتامينات</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-center w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-left">
                    <span className="text-sm font-extrabold text-[#71a874] block">
                      {calc.calories} سعرة
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewItemDetails(meal.food);
                      }}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-[#607fc4] hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      title="جدول الفيتامينات الكامل"
                    >
                      <Info className="w-4 h-4 text-[#607fc4]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveMeal(meal.id);
                      }}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-[#bb5791] hover:bg-[#bb5791]/10 transition-colors cursor-pointer"
                      title="حذف الوجبة"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-8 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-xs text-slate-400 space-y-2">
          <UtensilsCrossed className="w-8 h-8 mx-auto text-slate-400" />
          <p>لم تقم بإضافة أي أطعمة لسجل هذا اليوم بعد.</p>
          <p className="text-[11px] text-slate-500">اختر طعاماً من الأعلى واضغط إضافة لبدء التتبع!</p>
        </div>
      )}

      {/* Bottom Sheet Summary for Clicked Meal */}
      {selectedMealForSummary && (
        <MealDetailBottomSheet
          meal={selectedMealForSummary}
          onClose={() => setSelectedMealForSummary(null)}
        />
      )}

    </div>
  );
};
