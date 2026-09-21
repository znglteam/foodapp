import React, { useState, useMemo, useEffect } from 'react';
import { FoodCategory, FoodItem, LoggedMeal } from '../types';
import { CATEGORIES } from '../data/foodDatabase';
import { calculateMealNutrition } from '../utils/nutritionCalculators';
import { 
  Apple, 
  Carrot, 
  Beef, 
  Milk, 
  Nut, 
  Wheat, 
  Droplet, 
  Pill,
  PlusCircle, 
  Search, 
  Sparkles, 
  Scale, 
  Info, 
  Check,
  ChevronDown,
  ChefHat,
  Utensils,
  SlidersHorizontal
} from 'lucide-react';

interface FoodSelectorProps {
  foodItems: FoodItem[];
  onAddMeal: (meal: Omit<LoggedMeal, 'id' | 'timestamp'>) => void;
  onViewItemDetails: (item: FoodItem) => void;
  onOpenCustomMeals: () => void;
}

export const FoodSelector: React.FC<FoodSelectorProps> = ({
  foodItems,
  onAddMeal,
  onViewItemDetails,
  onOpenCustomMeals,
}) => {

  // Input 1: Selected Category
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>('fruits');

  // Input 2: Search Query & Selected Specific Food Item ID
  const [searchQuery, setSearchQuery] = useState('');

  // Filter foods by Category & Search query
  const filteredFoods = useMemo(() => {
    return foodItems.filter((item) => {
      const matchCat = item.category === selectedCategory;
      const matchSearch = searchQuery.trim() === '' || 
        item.nameAr.includes(searchQuery) || 
        item.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [foodItems, selectedCategory, searchQuery]);

  // Selected Food Item
  const [selectedFoodId, setSelectedFoodId] = useState<string>('');

  // Sync selected food if list changes or category changes
  const activeFood = useMemo(() => {
    const found = filteredFoods.find((f) => f.id === selectedFoodId);
    if (found) return found;
    return filteredFoods[0] || null;
  }, [filteredFoods, selectedFoodId]);

  // Input 3: Quantity & Mode
  const [amountType, setAmountType] = useState<'weight' | 'count'>('count');
  const [amountValue, setAmountValue] = useState<number>(1);
  const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('lunch');

  // ----------------- SUPPLEMENT DOSAGE CUSTOMIZATION STATE -----------------
  const [customDose, setCustomDose] = useState<number>(500);
  const [bComplexPreset, setBComplexPreset] = useState<'B-25' | 'B-50' | 'B-100' | 'custom'>('B-50');
  const [customBValues, setCustomBValues] = useState({
    b1: 25,
    b2: 25,
    b3: 25,
    b5: 25,
    b6: 25,
    b12: 100,
    folate: 400
  });

  // When activeFood changes, initialize the supplement dosage based on its config
  useEffect(() => {
    if (activeFood && activeFood.category === 'supplements') {
      setAmountType('count');
      setAmountValue(1);
      if (activeFood.supplementConfig) {
        setCustomDose(activeFood.supplementConfig.defaultDose);
      }
    }
  }, [activeFood?.id]);

  // Category Icon Resolver
  const getCategoryIcon = (id: FoodCategory) => {
    switch (id) {
      case 'fruits': return <Apple className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      case 'vegetables': return <Carrot className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      case 'meats': return <Beef className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      case 'dairy': return <Milk className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      case 'nuts': return <Nut className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      case 'grains': return <Wheat className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      case 'oils': return <Droplet className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      case 'supplements': return <Pill className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
      default: return <Apple className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
    }
  };

  // Derive the effective food item with customized dosage if it is a supplement
  const effectiveFood = useMemo(() => {
    if (!activeFood) return null;
    if (activeFood.category !== 'supplements') return activeFood;

    const updatedMicros = { ...activeFood.micros };
    let doseLabel = '';

    if (activeFood.id === 'sup-2') {
      // Vitamin B Complex
      if (bComplexPreset === 'B-50') {
        updatedMicros.vitB1_mg = 50;
        updatedMicros.vitB2_mg = 50;
        updatedMicros.vitB3_mg = 50;
        updatedMicros.vitB5_mg = 50;
        updatedMicros.vitB6_mg = 50;
        updatedMicros.vitB12_mcg = 50;
        updatedMicros.folate_mcg = 400;
        doseLabel = 'B-50';
      } else if (bComplexPreset === 'B-25') {
        updatedMicros.vitB1_mg = 25;
        updatedMicros.vitB2_mg = 25;
        updatedMicros.vitB3_mg = 25;
        updatedMicros.vitB5_mg = 25;
        updatedMicros.vitB6_mg = 25;
        updatedMicros.vitB12_mcg = 100;
        updatedMicros.folate_mcg = 400;
        doseLabel = 'B-25';
      } else if (bComplexPreset === 'B-100') {
        updatedMicros.vitB1_mg = 100;
        updatedMicros.vitB2_mg = 100;
        updatedMicros.vitB3_mg = 100;
        updatedMicros.vitB5_mg = 100;
        updatedMicros.vitB6_mg = 100;
        updatedMicros.vitB12_mcg = 100;
        updatedMicros.folate_mcg = 400;
        doseLabel = 'B-100';
      } else {
        updatedMicros.vitB1_mg = customBValues.b1;
        updatedMicros.vitB2_mg = customBValues.b2;
        updatedMicros.vitB3_mg = customBValues.b3;
        updatedMicros.vitB5_mg = customBValues.b5;
        updatedMicros.vitB6_mg = customBValues.b6;
        updatedMicros.vitB12_mcg = customBValues.b12;
        updatedMicros.folate_mcg = customBValues.folate;
        doseLabel = 'جرعة مخصصة';
      }
    } else if (activeFood.supplementConfig) {
      const key = activeFood.supplementConfig.primaryNutrientKey;
      updatedMicros[key] = customDose;

      if (activeFood.id === 'sup-4') {
        // Vitamin D: show mcg and IU
        const iu = Math.round(customDose * 40);
        doseLabel = `${customDose} مكجم (${iu.toLocaleString()} IU)`;
      } else if (activeFood.id === 'sup-1') {
        // Vitamin A: show mcg and IU
        const iu = Math.round(customDose * 3.33);
        doseLabel = `${customDose} مكجم (${iu.toLocaleString()} IU)`;
      } else {
        doseLabel = `${customDose} ${activeFood.supplementConfig.unit}`;
      }
    }

    return {
      ...activeFood,
      nameAr: doseLabel ? `${activeFood.nameAr} (${doseLabel})` : activeFood.nameAr,
      defaultUnitWeight: 100,
      unitNameAr: activeFood.unitNameAr || 'كبسولة / قرص',
      micros: updatedMicros
    };
  }, [activeFood, customDose, bComplexPreset, customBValues]);

  // Nutrition Preview calculation for selected item and quantity
  const previewNutrition = useMemo(() => {
    if (!effectiveFood) return null;
    return calculateMealNutrition(effectiveFood, amountType, amountValue);
  }, [effectiveFood, amountType, amountValue]);

  // Handle Submit / Add Meal
  const handleAdd = () => {
    if (!effectiveFood) return;
    const calc = calculateMealNutrition(effectiveFood, amountType, amountValue);
    onAddMeal({
      food: effectiveFood,
      amountType,
      amountValue,
      calculatedGrams: calc.grams,
      mealType: selectedMealType
    });
  };

  // Helper presets for supplements based on bottle types
  const getSupplementPresets = (foodId: string) => {
    switch (foodId) {
      case 'sup-1': // فيتامين أ
        return [
          { label: '3,000 IU (900 مكجم)', val: 900 },
          { label: '5,000 IU (1500 مكجم)', val: 1500 },
          { label: '10,000 IU (3000 مكجم)', val: 3000 }
        ];
      case 'sup-3': // فيتامين سي
        return [
          { label: '250 ملجم', val: 250 },
          { label: '500 ملجم', val: 500 },
          { label: '1000 ملجم', val: 1000 },
          { label: '1500 ملجم', val: 1500 }
        ];
      case 'sup-4': // فيتامين د
        return [
          { label: '1,000 IU (25 مكجم)', val: 25 },
          { label: '2,000 IU (50 مكجم)', val: 50 },
          { label: '5,000 IU (125 مكجم)', val: 125 },
          { label: '10,000 IU (250 مكجم)', val: 250 },
          { label: '50,000 IU (1250 مكجم)', val: 1250 }
        ];
      case 'sup-5': // فيتامين هـ
        return [
          { label: '15 ملجم (22 IU)', val: 15 },
          { label: '67 ملجم (100 IU)', val: 67 },
          { label: '134 ملجم (200 IU)', val: 134 },
          { label: '268 ملجم (400 IU)', val: 268 }
        ];
      case 'sup-6': // فيتامين ك
        return [
          { label: '50 ميكروجرام', val: 50 },
          { label: '100 ميكروجرام', val: 100 },
          { label: '200 ميكروجرام', val: 200 }
        ];
      case 'sup-7': // فوسفور
        return [
          { label: '250 ملجم', val: 250 },
          { label: '500 ملجم', val: 500 },
          { label: '750 ملجم', val: 750 }
        ];
      case 'sup-8': // سيلنيوم
        return [
          { label: '50 ميكروجرام', val: 50 },
          { label: '100 ميكروجرام', val: 100 },
          { label: '200 ميكروجرام', val: 200 }
        ];
      case 'sup-9': // حديد
        return [
          { label: '14 ملجم', val: 14 },
          { label: '18 ملجم', val: 18 },
          { label: '27 ملجم', val: 27 },
          { label: '65 ملجم', val: 65 }
        ];
      case 'sup-10': // مغنيسيوم
        return [
          { label: '100 ملجم', val: 100 },
          { label: '200 ملجم', val: 200 },
          { label: '250 ملجم', val: 250 },
          { label: '400 ملجم', val: 400 }
        ];
      case 'sup-11': // بوتاسيوم
        return [
          { label: '99 ملجم', val: 99 },
          { label: '150 ملجم', val: 150 },
          { label: '200 ملجم', val: 200 }
        ];
      case 'sup-12': // كالسيوم
        return [
          { label: '250 ملجم', val: 250 },
          { label: '500 ملجم', val: 500 },
          { label: '600 ملجم', val: 600 },
          { label: '1000 ملجم', val: 1000 }
        ];
      case 'sup-13': // اوميغا 3
        return [
          { label: '500 ملجم', val: 500 },
          { label: '1000 ملجم', val: 1000 },
          { label: '1200 ملجم', val: 1200 },
          { label: '2000 ملجم', val: 2000 }
        ];
      case 'sup-14': // زنك
        return [
          { label: '15 ملجم', val: 15 },
          { label: '25 ملجم', val: 25 },
          { label: '30 ملجم', val: 30 },
          { label: '50 ملجم', val: 50 }
        ];
      default:
        return [];
    }
  };

  const isSupplement = activeFood?.category === 'supplements';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-lg space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#414141] dark:text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#71a874]/15 text-[#71a874] flex items-center justify-center text-xs font-black">
              <Utensils className="w-4 h-4 text-[#71a874]" />
            </span>
            <span>اختيار الطعام والكمية</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <button
            onClick={onOpenCustomMeals}
            className="text-xs font-bold text-[#607fc4] hover:text-[#414141] flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#607fc4]/15 border border-[#607fc4]/30 cursor-pointer shadow-2xs hover:bg-[#607fc4]/25 transition-all"
          >
            <ChefHat className="w-4 h-4 text-[#607fc4]" />
            <span>وجباتي المركبة</span>
          </button>
        </div>

      </div>

      {/* ----------------- CATEGORY SELECTOR (WITH INTEGRATED DROPDOWNS) ----------------- */}
      <div className="space-y-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const catFoods = foodItems.filter(f => f.category === cat.id);
            const searchedCatFoods = catFoods.filter(item => 
              searchQuery.trim() === '' || 
              item.nameAr.includes(searchQuery) || 
              item.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
              <div key={cat.id} className="relative">
                <div
                  className={`p-2.5 rounded-2xl border text-right transition-all flex flex-col items-center sm:items-start gap-1.5 cursor-pointer h-full ${
                    isSelected
                      ? 'border-[#71a874] bg-[#71a874] text-white shadow-md shadow-[#71a874]/20'
                      : 'border-slate-200 dark:border-[#414141] bg-slate-50/70 dark:bg-[#414141]/30 text-[#414141] dark:text-slate-300 hover:border-[#607fc4]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full gap-1.5">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className={`p-1.5 rounded-xl shrink-0 ${isSelected ? 'bg-white/20 text-white' : cat.color}`}>
                        {getCategoryIcon(cat.id)}
                      </span>
                      <span className="text-xs font-bold truncate">{cat.nameAr}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white/80' : 'text-slate-400'}`} />
                  </div>
                  {isSelected && activeFood && activeFood.category === cat.id && (
                    <div className="text-[10px] bg-white/20 px-2 py-1 rounded-lg truncate w-full mt-1 font-medium text-center sm:text-right">
                      {activeFood.nameAr}
                    </div>
                  )}
                </div>

                <select
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  value={isSelected && activeFood ? activeFood.id : ''}
                  onChange={(e) => {
                    setSelectedCategory(cat.id);
                    setSelectedFoodId(e.target.value);
                  }}
                >
                  <option value="" disabled>اختر من {cat.nameAr}...</option>
                  {searchedCatFoods.map(item => (
                    <option key={item.id} value={item.id}>{item.nameAr}</option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      </div>

      {/* ----------------- QUANTITY & DETAILS SELECTOR ----------------- */}
      {activeFood && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-4 animate-fade-in">
          
          {/* Item Title & Info Header */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-[#414141] dark:text-white flex items-center gap-1.5">
                {isSupplement ? (
                  <span className="p-1 rounded-lg bg-[#607fc4]/15 text-[#607fc4]">
                    <Pill className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="p-1 rounded-lg bg-[#71a874]/15 text-[#71a874]">
                    <Utensils className="w-3.5 h-3.5" />
                  </span>
                )}
                <span>{effectiveFood?.nameAr || activeFood.nameAr}</span>
              </span>

              {isSupplement && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#607fc4]/15 text-[#607fc4]">
                  مكمل غذائي
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => onViewItemDetails(effectiveFood || activeFood)}
              className="text-[11px] text-[#607fc4] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              <span>جدول المغذيات الكامل</span>
            </button>
          </div>

          {/* If SUPPLEMENT: Show Custom Dose Section */}
          {isSupplement ? (
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-[#607fc4]/30 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#607fc4]" />
                  <span>تحديد الجرعة المسجلة على علبة المكمل:</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  (لكل كبسولة أو قرص واحد)
                </span>
              </div>

              {/* B-COMPLEX SPECIAL SELECTOR */}
              {activeFood.id === 'sup-2' ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                      التركيبة الجاهزة من العلبة:
                    </span>
                    {(['B-50', 'B-25', 'B-100', 'custom'] as const).map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setBComplexPreset(preset)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          bComplexPreset === preset
                            ? 'bg-[#607fc4] text-white shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {preset === 'custom' ? '⚙️ تخصيص يدوي للقيم' : preset}
                      </button>
                    ))}
                  </div>

                  {bComplexPreset === 'custom' && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500">B1 (الثيامين) ملجم</label>
                        <input
                          type="number"
                          value={customBValues.b1}
                          onChange={(e) => setCustomBValues({ ...customBValues, b1: Number(e.target.value) })}
                          className="w-full px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500">B2 (الرايبوفلافين) ملجم</label>
                        <input
                          type="number"
                          value={customBValues.b2}
                          onChange={(e) => setCustomBValues({ ...customBValues, b2: Number(e.target.value) })}
                          className="w-full px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500">B3 (النياسين) ملجم</label>
                        <input
                          type="number"
                          value={customBValues.b3}
                          onChange={(e) => setCustomBValues({ ...customBValues, b3: Number(e.target.value) })}
                          className="w-full px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500">B5 (حمض البانتوثينيك) ملجم</label>
                        <input
                          type="number"
                          value={customBValues.b5}
                          onChange={(e) => setCustomBValues({ ...customBValues, b5: Number(e.target.value) })}
                          className="w-full px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500">B6 (البيريدوكسين) ملجم</label>
                        <input
                          type="number"
                          value={customBValues.b6}
                          onChange={(e) => setCustomBValues({ ...customBValues, b6: Number(e.target.value) })}
                          className="w-full px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500">B12 ميكروجرام</label>
                        <input
                          type="number"
                          value={customBValues.b12}
                          onChange={(e) => setCustomBValues({ ...customBValues, b12: Number(e.target.value) })}
                          className="w-full px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1 col-span-2">
                        <label className="text-[10px] text-slate-500">حمض الفوليك (B9) ميكروجرام</label>
                        <input
                          type="number"
                          value={customBValues.folate}
                          onChange={(e) => setCustomBValues({ ...customBValues, folate: Number(e.target.value) })}
                          className="w-full px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* SINGLE NUTRIENT SUPPLEMENTS */
                <div className="space-y-2.5">
                  {/* Common bottle presets */}
                  {getSupplementPresets(activeFood.id).length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        جرعات العلب الشائعة:
                      </span>
                      {getSupplementPresets(activeFood.id).map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setCustomDose(preset.val)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            customDose === preset.val
                              ? 'bg-[#607fc4] text-white shadow-2xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Free numeric input for dose */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 shrink-0">
                      تركيز الحبة حسب العلبة لديك:
                    </span>
                    <div className="flex items-center gap-2 max-w-xs">
                      <input
                        type="number"
                        min="0.1"
                        step={activeFood.supplementConfig?.step || 1}
                        value={customDose}
                        onChange={(e) => setCustomDose(Math.max(0.1, Number(e.target.value)))}
                        className="w-28 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-extrabold text-[#414141] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#607fc4]"
                      />
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                        {activeFood.supplementConfig?.unit || 'ملجم'}
                      </span>

                      {/* Vit D / Vit A IU helper */}
                      {activeFood.id === 'sup-4' && (
                        <span className="text-[11px] font-semibold text-[#607fc4] bg-[#607fc4]/10 px-2 py-1 rounded-lg shrink-0">
                          ≈ {(customDose * 40).toLocaleString()} IU
                        </span>
                      )}
                      {activeFood.id === 'sup-1' && (
                        <span className="text-[11px] font-semibold text-[#607fc4] bg-[#607fc4]/10 px-2 py-1 rounded-lg shrink-0">
                          ≈ {Math.round(customDose * 3.33).toLocaleString()} IU
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* Amount input & Meal type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Amount input */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                  {isSupplement ? 'عدد الحبات / الكبسولات المتناولة' : `الكمية (${activeFood.nameAr})`}
                </span>
              </div>

              {isSupplement ? (
                /* Supplement quantity picker: count only */
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#71a874] shadow-2xs flex-1">
                    <input
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={amountValue}
                      onChange={(e) => setAmountValue(Math.max(0.5, Number(e.target.value)))}
                      className="w-full px-3.5 py-2 bg-transparent text-[#414141] dark:text-white text-sm font-bold focus:outline-hidden"
                      placeholder="1"
                    />
                    <span className="px-3 py-2 text-xs font-bold text-slate-500 bg-slate-50 dark:bg-slate-800 shrink-0">
                      {activeFood.unitNameAr || 'حبة'}
                    </span>
                  </div>

                  {/* Quick count buttons */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map(cnt => (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setAmountValue(cnt)}
                        className={`w-8 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          amountValue === cnt
                            ? 'bg-[#71a874] text-white shadow-2xs'
                            : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {cnt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Standard food amount input with integrated unit select icon */
                <div className="flex items-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#71a874] shadow-2xs">
                  <input
                    type="number"
                    min="0.1"
                    step={amountType === 'count' ? '0.5' : '5'}
                    value={amountValue}
                    onChange={(e) => setAmountValue(Math.max(0.1, Number(e.target.value)))}
                    className="w-full px-3.5 py-2 bg-transparent text-[#414141] dark:text-white text-sm font-bold focus:outline-hidden"
                    placeholder="أدخل الكمية"
                  />
                  
                  {/* Small integrated unit picker */}
                  <div className="relative border-r border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0">
                    <select
                      value={amountType}
                      onChange={(e) => {
                        const type = e.target.value as 'count' | 'weight';
                        setAmountType(type);
                        setAmountValue(type === 'count' ? 1 : 100);
                      }}
                      className="appearance-none pl-7 pr-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-transparent cursor-pointer focus:outline-hidden"
                    >
                      <option value="count">
                        {activeFood.unitNameAr ? `حبة (${activeFood.unitNameAr})` : 'بالعدد'}
                      </option>
                      <option value="weight">
                        بالوزن (جرام)
                      </option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 absolute left-2 top-2.5 pointer-events-none text-slate-500 dark:text-slate-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Meal Type selector */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                نوع الوجبة
              </span>
              <select
                value={selectedMealType}
                onChange={(e) => setSelectedMealType(e.target.value as any)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#414141] dark:text-white text-xs font-bold focus:outline-hidden focus:ring-2 focus:ring-[#71a874] shadow-2xs"
              >
                <option value="breakfast">إفطار</option>
                <option value="lunch">غداء</option>
                <option value="dinner">عشاء</option>
                <option value="snack">وجبة خفيفة / مكمل</option>
              </select>
            </div>

            {/* Action button */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={handleAdd}
                className={`w-full py-2 px-4 active:scale-[0.98] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isSupplement
                    ? 'bg-[#607fc4] hover:bg-[#71a874] shadow-[#607fc4]/25'
                    : 'bg-[#71a874] hover:bg-[#607fc4] shadow-[#71a874]/20'
                }`}
              >
                {isSupplement ? (
                  <>
                    <Pill className="w-4 h-4 text-white" />
                    <span>إضافة المكمل للسجل</span>
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4 text-white" />
                    <span>إضافة الطعام للسجل</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Quick calculated summary preview */}
          {previewNutrition && (
            <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <span className="font-bold text-[#71a874]">{previewNutrition.calories} سعرة</span>
                {isSupplement ? (
                  <span className="text-[11px] text-[#607fc4] font-medium">
                    (مغذيات دقيقة مضافة وفق جرعة العلبة)
                  </span>
                ) : (
                  <>
                    <span>• بروتين: {previewNutrition.protein}غ</span>
                    <span>• كارب: {previewNutrition.carbs}غ</span>
                    <span>• دهون: {previewNutrition.fat}غ</span>
                  </>
                )}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
