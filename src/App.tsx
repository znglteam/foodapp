/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FoodItem, UserProfile, LoggedMeal, CustomMealRecipe } from './types';
import { INITIAL_FOOD_DATABASE } from './data/foodDatabase';
import { Header } from './components/Header';
import { FoodSelector } from './components/FoodSelector';
import { UserProfileSection } from './components/UserProfileSection';
import { NutrientProgressDashboard } from './components/NutrientProgressDashboard';
import { DailyLogList } from './components/DailyLogList';
import { FoodNutrientCard } from './components/FoodNutrientCard';
import { CustomMealModal } from './components/CustomMealModal';
import { calculateUserTargets, sumLoggedMealsNutrition } from './utils/nutritionCalculators';
import { User, Sparkles, Plus, BookOpen, HeartPulse } from 'lucide-react';

const STORAGE_KEYS = {
  PROFILE: 'nutri_track_user_profile_v1',
  LOGGED_MEALS: 'nutri_track_logged_meals_v1',
  CUSTOM_FOODS: 'nutri_track_custom_foods_v1',
  CUSTOM_MEAL_RECIPES: 'nutri_track_custom_meal_recipes_v1'
};


const DEFAULT_PROFILE: UserProfile = {
  gender: 'male',
  age: 30,
  heightCm: 175,
  weightKg: 80,
  activityLevel: 'moderate',
  weightLossTargetKg: 5,
  timeframeWeeks: 4
};

export default function App() {
  // 1. Food Database State
  const [foodDatabase, setFoodDatabase] = useState<FoodItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_FOODS);
      if (saved) {
        const customItems = JSON.parse(saved);
        return [...INITIAL_FOOD_DATABASE, ...customItems];
      }
    } catch (e) {
      console.error('Failed to parse custom foods from localStorage', e);
    }
    return INITIAL_FOOD_DATABASE;
  });

  // 2. User Profile State
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse profile from localStorage', e);
    }
    return DEFAULT_PROFILE;
  });

  // 3. Today's Logged Meals
  const [loggedMeals, setLoggedMeals] = useState<LoggedMeal[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LOGGED_MEALS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse logged meals from localStorage', e);
    }
    return [];
  });

  // 4. Custom Meal Recipes (Composite Meals / الوصفات)
  const [customRecipes, setCustomRecipes] = useState<CustomMealRecipe[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEAL_RECIPES);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse custom meal recipes from localStorage', e);
    }
    // Pre-populate sample custom meal recipe: "بيض مقلي بزيت الزيتون"
    return [
      {
        id: 'sample-fried-egg-meal',
        nameAr: 'بيض مقلي بزيت الزيتون',
        defaultMealType: 'breakfast',
        createdAt: new Date().toISOString(),
        ingredients: [
          {
            food: INITIAL_FOOD_DATABASE.find((f) => f.id === 'm-6') || INITIAL_FOOD_DATABASE[0], // بيض دجاج كامل
            amountType: 'count',
            amountValue: 2,
            calculatedGrams: 100
          },
          {
            food: INITIAL_FOOD_DATABASE.find((f) => f.id === 'o-1') || INITIAL_FOOD_DATABASE[2], // زيت زيتون
            amountType: 'weight',
            amountValue: 10,
            calculatedGrams: 10
          }
        ]
      }
    ];
  });

  // 5. Modals and Triggers
  const [selectedDetailItem, setSelectedDetailItem] = useState<FoodItem | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCustomMealOpen, setIsCustomMealOpen] = useState(false);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(userProfile));
    } catch (e) {}
  }, [userProfile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.LOGGED_MEALS, JSON.stringify(loggedMeals));
    } catch (e) {}
  }, [loggedMeals]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEAL_RECIPES, JSON.stringify(customRecipes));
    } catch (e) {}
  }, [customRecipes]);

  // Handlers
  const handleSaveRecipe = (newRecipe: CustomMealRecipe) => {
    setCustomRecipes((prev) => [newRecipe, ...prev]);
  };

  const handleDeleteRecipe = (recipeId: string) => {
    setCustomRecipes((prev) => prev.filter((r) => r.id !== recipeId));
  };

  const handleLogRecipeToMeals = (recipe: CustomMealRecipe, targetMealType: 'breakfast' | 'lunch' | 'dinner' | 'snack') => {
    const timeStr = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    const newLoggedItems: LoggedMeal[] = recipe.ingredients.map((ing, idx) => ({
      id: 'meal-' + Date.now() + '-' + idx,
      food: ing.food,
      amountType: ing.amountType,
      amountValue: ing.amountValue,
      calculatedGrams: ing.calculatedGrams,
      mealType: targetMealType,
      timestamp: timeStr
    }));

    setLoggedMeals((prev) => [...newLoggedItems, ...prev]);
  };

  const handleAddMeal = (mealData: Omit<LoggedMeal, 'id' | 'timestamp'>) => {

    const newMeal: LoggedMeal = {
      ...mealData,
      id: 'meal-' + Date.now(),
      timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };
    setLoggedMeals((prev) => [newMeal, ...prev]);
  };

  const handleRemoveMeal = (mealId: string) => {
    setLoggedMeals((prev) => prev.filter((m) => m.id !== mealId));
  };

  const handleClearAllMeals = () => {
    setLoggedMeals([]);
  };

  const targets = calculateUserTargets(userProfile);
  const totalConsumed = sumLoggedMealsNutrition(loggedMeals);

  return (
    <div className="min-h-screen bg-slate-100/70 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased dir-rtl selection:bg-[#71a874] selection:text-white pb-12">
      
      {/* App Header */}
      <Header
        onOpenProfile={() => setIsProfileOpen(true)}
        onClearLog={handleClearAllMeals}
        loggedCount={loggedMeals.length}
        totalCalories={totalConsumed.calories}
        targetCalories={targets.recommendedDailyCalories}
        gender={userProfile.gender}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* SECTION 1: 3-INPUT FOOD SELECTOR */}
        <FoodSelector
          foodItems={foodDatabase}
          onAddMeal={handleAddMeal}
          onViewItemDetails={(item) => setSelectedDetailItem(item)}
          onOpenCustomMeals={() => setIsCustomMealOpen(true)}
        />


        {/* SECTION 2: NUTRIENT PROGRESS DASHBOARD (CALORIES, MACROS, MICROS) */}
        <NutrientProgressDashboard
          loggedMeals={loggedMeals}
          profile={userProfile}
        />

        {/* SECTION 3: DAILY LOGGED MEALS LIST */}
        <DailyLogList
          loggedMeals={loggedMeals}
          onRemoveMeal={handleRemoveMeal}
          onViewItemDetails={(item) => setSelectedDetailItem(item)}
          onClearAll={handleClearAllMeals}
        />

      </main>

      {/* MODAL 1: User Profile & Calorie Target Setup Modal */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <UserProfileSection
            profile={userProfile}
            onSaveProfile={(newProf) => setUserProfile(newProf)}
            onClose={() => setIsProfileOpen(false)}
            isModal={true}
          />
        </div>
      )}

      {/* MODAL 2: Full Vitamin/Mineral Details Card Modal */}
      {selectedDetailItem && (
        <FoodNutrientCard
          item={selectedDetailItem}
          onClose={() => setSelectedDetailItem(null)}
        />
      )}

      {/* MODAL 4: Custom Composite Meal / Recipe Builder Modal */}
      {isCustomMealOpen && (
        <CustomMealModal
          foodItems={foodDatabase}
          recipes={customRecipes}
          onSaveRecipe={handleSaveRecipe}
          onDeleteRecipe={handleDeleteRecipe}
          onLogRecipe={handleLogRecipeToMeals}
          onClose={() => setIsCustomMealOpen(false)}
        />
      )}


    </div>
  );
}
