with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
"""  const handleDeleteRecipe = (recipeId: string) => {
    if (window.confirm('هل أنت تأكد من حذف هذه الوجبة المركبة؟')) {
      setCustomRecipes((prev) => prev.filter((r) => r.id !== recipeId));
    }
  };""",
"""  const handleDeleteRecipe = (recipeId: string) => {
    setCustomRecipes((prev) => prev.filter((r) => r.id !== recipeId));
  };""")

text = text.replace(
"""  const handleRemoveMeal = (mealId: string) => {
    if (window.confirm('هل تود حذف هذه الوجبة من سجلك اليومي؟')) {
      setLoggedMeals((prev) => prev.filter((m) => m.id !== mealId));
    }
  };""",
"""  const handleRemoveMeal = (mealId: string) => {
    setLoggedMeals((prev) => prev.filter((m) => m.id !== mealId));
  };""")

text = text.replace(
"""  const handleClearAllMeals = () => {
    if (window.confirm('هل أنت تأكد من مسح جميع وجبات سجل اليوم؟')) {
      setLoggedMeals([]);
    }
  };""",
"""  const handleClearAllMeals = () => {
    setLoggedMeals([]);
  };""")

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
