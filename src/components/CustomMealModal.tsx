import React, { useState, useMemo } from 'react';
import { FoodItem, CustomMealRecipe, MealIngredient } from '../types';
import { calculateMealNutrition, calculateRecipeNutrition } from '../utils/nutritionCalculators';
import { 
  X, 
  Utensils, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ChefHat, 
  Scale, 
  Zap,
  BookOpen
} from 'lucide-react';

interface CustomMealModalProps {
  foodItems: FoodItem[];
  recipes: CustomMealRecipe[];
  onSaveRecipe: (recipe: CustomMealRecipe) => void;
  onDeleteRecipe: (recipeId: string) => void;
  onLogRecipe: (recipe: CustomMealRecipe, mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack') => void;
  onClose: () => void;
}

export const CustomMealModal: React.FC<CustomMealModalProps> = ({
  foodItems,
  recipes,
  onSaveRecipe,
  onDeleteRecipe,
  onLogRecipe,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'list' | 'create'>(recipes.length > 0 ? 'list' : 'create');

  // Form State for creating a new custom meal
  const [recipeName, setRecipeName] = useState('');
  const [defaultMealType, setDefaultMealType] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('breakfast');
  const [ingredients, setIngredients] = useState<MealIngredient[]>([]);

  // Ingredient Picker state
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [selectedFoodId, setSelectedFoodId] = useState<string>('');
  const [amountType, setAmountType] = useState<'weight' | 'count'>('count');
  const [amountValue, setAmountValue] = useState<number>(1);

  // Status message for logging feedback
  const [loggedStatusRecipeId, setLoggedStatusRecipeId] = useState<string | null>(null);

  // Filtered food items for adding ingredients
  const filteredFoods = useMemo(() => {
    if (!ingredientSearch.trim()) return foodItems.slice(0, 30);
    const q = ingredientSearch.toLowerCase();
    return foodItems.filter(
      (f) => f.nameAr.includes(ingredientSearch) || f.nameEn.toLowerCase().includes(q)
    );
  }, [foodItems, ingredientSearch]);

  const activeFood = useMemo(() => {
    return foodItems.find((f) => f.id === selectedFoodId) || filteredFoods[0] || null;
  }, [foodItems, selectedFoodId, filteredFoods]);

  // Handle adding an ingredient to the current draft
  const handleAddIngredient = () => {
    if (!activeFood || amountValue <= 0) return;

    const calc = calculateMealNutrition(activeFood, amountType, amountValue);
    const newIngredient: MealIngredient = {
      food: activeFood,
      amountType,
      amountValue,
      calculatedGrams: calc.grams
    };

    setIngredients((prev) => [...prev, newIngredient]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  // Nutrition totals for current draft recipe
  const draftNutrition = useMemo(() => {
    return calculateRecipeNutrition(ingredients);
  }, [ingredients]);

  // Handle saving recipe
  const handleSaveRecipe = () => {
    if (!recipeName.trim()) {
      alert('الرجاء إدخال اسم الوجبة المركبة (مثلاً: بيض مقلي ومشروب)');
      return;
    }
    if (ingredients.length === 0) {
      alert('الرجاء إضافة مكون واحد على الأقل للوجبة المركبة');
      return;
    }

    const newRecipe: CustomMealRecipe = {
      id: 'recipe-' + Date.now(),
      nameAr: recipeName.trim(),
      defaultMealType,
      ingredients,
      createdAt: new Date().toISOString()
    };

    onSaveRecipe(newRecipe);

    // Reset form
    setRecipeName('');
    setIngredients([]);
    setActiveTab('list');
  };

  // Handle logging a recipe to today's log
  const handleLogSingleRecipe = (recipe: CustomMealRecipe, targetMealType: 'breakfast' | 'lunch' | 'dinner' | 'snack') => {
    onLogRecipe(recipe, targetMealType);
    setLoggedStatusRecipeId(recipe.id);
    setTimeout(() => {
      setLoggedStatusRecipeId(null);
    }, 2500);
  };

  const getMealTypeAr = (type: string) => {
    switch (type) {
      case 'breakfast': return 'إفطار';
      case 'lunch': return 'غداء';
      case 'dinner': return 'عشاء';
      case 'snack': return 'وجبة خفيفة';
      default: return 'وجبة';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden dir-rtl">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#71a874]/15 rounded-2xl text-[#71a874] border border-[#71a874]/30">
              <ChefHat className="w-6 h-6 text-[#71a874]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-[#414141] dark:text-white flex items-center gap-2">
                <span>وجباتي المركبة</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                هنا مكان وجباتك ذات المكونات المتعددة
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 pt-3 pb-1 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('list')}
            className={`flex-1 py-2.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'list'
                ? 'bg-[#607fc4] text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>وجباتي المركبة المحفوظة ({recipes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('create')}
            className={`flex-1 py-2.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'create'
                ? 'bg-[#71a874] text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>تكوين وجبة جديدة ➕</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: LIST SAVED CUSTOM RECIPES */}
          {activeTab === 'list' && (
            <div className="space-y-4">
              {recipes.length === 0 ? (
                <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-800/20">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#71a874]/15 flex items-center justify-center text-[#71a874]">
                    <Utensils className="w-8 h-8 text-[#71a874]" />
                  </div>
                  <h3 className="text-base font-bold text-[#414141] dark:text-slate-200 mb-1">
                    لا توجد وجبات مركبة محفوظة بعد
                  </h3>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {recipes.map((recipe) => {
                    const nutrition = calculateRecipeNutrition(recipe.ingredients);
                    const isJustLogged = loggedStatusRecipeId === recipe.id;

                    return (
                      <div
                        key={recipe.id}
                        className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all space-y-3"
                      >
                        {/* Recipe Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-extrabold text-base text-[#414141] dark:text-white">
                                {recipe.nameAr}
                              </h3>
                              <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#607fc4]/15 text-[#607fc4] font-bold">
                                {getMealTypeAr(recipe.defaultMealType)}
                              </span>
                            </div>
                            <span className="text-xs text-slate-400 block mt-0.5">
                              تحتوي على {recipe.ingredients.length} مكونات
                            </span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onDeleteRecipe(recipe.id)}
                              className="p-2 text-[#bb5791] hover:bg-[#bb5791]/10 rounded-xl transition-colors cursor-pointer text-xs flex items-center gap-1"
                              title="حذف الوجبة"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span className="hidden sm:inline">حذف</span>
                            </button>

                            <button
                              onClick={() => handleLogSingleRecipe(recipe, recipe.defaultMealType)}
                              disabled={isJustLogged}
                              className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer ${
                                isJustLogged
                                  ? 'bg-[#71a874] text-white scale-105 ring-2 ring-[#71a874]/50'
                                  : 'bg-[#71a874] hover:bg-[#607fc4] text-white'
                              }`}
                            >
                              {isJustLogged ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 animate-bounce text-white" />
                                  <span>تم التنزيل بالسجل! 👍</span>
                                </>
                              ) : (
                                <>
                                  <Zap className="w-4 h-4 text-white" />
                                  <span>أكلتها الآن ⚡ (تنزيل بضغطة زر)</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Nutrition Macros Summary */}
                        <div className="grid grid-cols-4 gap-2 text-center text-xs p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl">
                          <div>
                            <span className="text-[10px] text-slate-400 block">سعرات حرارية</span>
                            <span className="font-extrabold text-[#414141] dark:text-slate-100">{nutrition.calories}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block">بروتين</span>
                            <span className="font-bold text-[#71a874]">{nutrition.protein} غ</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block">نشويات</span>
                            <span className="font-bold text-[#607fc4]">{nutrition.carbs} غ</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block">دهون</span>
                            <span className="font-bold text-[#bb5791]">{nutrition.fat} غ</span>
                          </div>
                        </div>

                        {/* Ingredients List breakdown */}
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">المكونات:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {recipe.ingredients.map((ing, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              >
                                <span className="font-semibold">{ing.food.nameAr}</span>
                                <span className="text-slate-400">
                                  ({ing.amountType === 'count' ? `${ing.amountValue} ${ing.food.unitNameAr || 'حبة'}` : `${ing.amountValue} غ`})
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CREATE NEW COMPOSITE MEAL */}
          {activeTab === 'create' && (
            <div className="space-y-6">
              
              {/* Step 1: Recipe Info */}
              <div className="p-4 rounded-2xl bg-[#607fc4]/10 dark:bg-[#607fc4]/20 border border-[#607fc4]/30 space-y-3">
                <h3 className="text-sm font-extrabold text-[#607fc4] dark:text-[#607fc4] flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-[#607fc4]" />
                  <span>1. بيانات الوجبة المركبة</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      اسم الوجبة (مثال: بيض مقلي بزيت الزيتون)
                    </label>
                    <input
                      type="text"
                      value={recipeName}
                      onChange={(e) => setRecipeName(e.target.value)}
                      placeholder="أدخل اسم الوجبة هنا..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#607fc4]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      تصنيف الوجبة الافتراضي
                    </label>
                    <select
                      value={defaultMealType}
                      onChange={(e) => setDefaultMealType(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#607fc4]"
                    >
                      <option value="breakfast">إفطار</option>
                      <option value="lunch">غداء</option>
                      <option value="dinner">عشاء</option>
                      <option value="snack">وجبة خفيفة</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Add Ingredients */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-4">
                <h3 className="text-sm font-extrabold text-[#414141] dark:text-white flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#71a874]" />
                  <span>2. إضافة مكونات الوجبة من قاعدة البيانات</span>
                </h3>

                {/* Ingredient Selector Box */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  
                  {/* Search food item */}
                  <div className="sm:col-span-5 space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 block">اختر الصنف/الطعام</label>
                    <div className="space-y-1.5">
                      <input
                        type="text"
                        value={ingredientSearch}
                        onChange={(e) => setIngredientSearch(e.target.value)}
                        placeholder="ابحث عن المكون (بيض، أرز، زيت...)"
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs"
                      />
                      <select
                        value={activeFood ? activeFood.id : ''}
                        onChange={(e) => setSelectedFoodId(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold focus:outline-none"
                      >
                        {filteredFoods.map((f) => (
                          <option key={f.id} value={f.id}>
                            {f.nameAr}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Unit & Quantity */}
                  <div className="sm:col-span-4 space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 block">الكمية والوحدة</label>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        min="0.1"
                        step="0.5"
                        value={amountValue}
                        onChange={(e) => setAmountValue(Math.max(0.1, parseFloat(e.target.value) || 0))}
                        className="w-20 px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-center"
                      />
                      <select
                        value={amountType}
                        onChange={(e) => setAmountType(e.target.value as any)}
                        className="flex-1 px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold"
                      >
                        <option value="count">
                          {activeFood ? activeFood.unitNameAr || 'حبة/قطعة' : 'حبة'}
                        </option>
                        <option value="weight">جرام (غ)</option>
                      </select>
                    </div>
                  </div>

                  {/* Add Button */}
                  <div className="sm:col-span-3 flex items-end">
                    <button
                      onClick={handleAddIngredient}
                      className="w-full py-2 px-3 rounded-xl bg-[#71a874] hover:bg-[#607fc4] text-white font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-4 h-4 text-white" />
                      <span>إضافة المكون</span>
                    </button>
                  </div>

                </div>

                {/* Added Ingredients List */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block">
                    المكونات المضافة للوجبة ({ingredients.length}):
                  </span>

                  {ingredients.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400 bg-white dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                      لم يتم إضافة أي مكونات بعد. ابحث عن المكون أعلاه واضغط "إضافة المكون".
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {ingredients.map((ing, idx) => {
                        const ingNut = calculateMealNutrition(ing.food, ing.amountType, ing.amountValue);
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#71a874]/15 text-[#71a874] font-bold flex items-center justify-center text-[10px]">
                                {idx + 1}
                              </span>
                              <div>
                                <span className="font-bold text-[#414141] dark:text-white block">
                                  {ing.food.nameAr}
                                </span>
                                <span className="text-[11px] text-slate-500">
                                  الكمية: {ing.amountType === 'count' ? `${ing.amountValue} ${ing.food.unitNameAr}` : `${ing.amountValue} جرام`} ({ingNut.grams}غ إجمالي)
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="text-left font-bold text-[#71a874]">
                                {ingNut.calories} كالوري
                              </div>
                              <button
                                onClick={() => handleRemoveIngredient(idx)}
                                className="p-1.5 text-[#bb5791] hover:bg-[#bb5791]/10 rounded-lg transition-colors cursor-pointer"
                                title="حذف المكون"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>

              {/* Step 3: Nutrition Totals & Save Button */}
              {ingredients.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#414141] text-white shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#71a874]" />
                      <span>إجمالي القيمة الغذائية للوجبة المركبة:</span>
                    </h4>
                    <span className="text-xs font-bold text-[#71a874]">
                      {ingredients.length} مكونات
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                      <span className="text-[10px] text-slate-300 block">سعرات حرارية</span>
                      <span className="font-extrabold text-white text-sm">{draftNutrition.calories}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                      <span className="text-[10px] text-slate-300 block">بروتين</span>
                      <span className="font-bold text-[#71a874]">{draftNutrition.protein}غ</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                      <span className="text-[10px] text-slate-300 block">نشويات</span>
                      <span className="font-bold text-[#607fc4]">{draftNutrition.carbs}غ</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                      <span className="text-[10px] text-slate-300 block">دهون</span>
                      <span className="font-bold text-[#bb5791]">{draftNutrition.fat}غ</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSaveRecipe}
                    className="w-full py-3 rounded-xl bg-[#71a874] hover:bg-[#607fc4] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>حفظ الوجبة المركبة لـ (تسجيل بضغطة زر) 💾</span>
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
