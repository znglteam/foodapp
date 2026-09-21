with open('src/components/Header.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    "import { Utensils, Sparkles, RefreshCw, Calendar, ChefHat } from 'lucide-react';",
    "import { Utensils, User, Sparkles, RefreshCw, Calendar, ChefHat } from 'lucide-react';"
)

text = text.replace(
    "interface HeaderProps {\n  onOpenAISearch: () => void;",
    "interface HeaderProps {\n  onOpenProfile: () => void;\n  onOpenAISearch: () => void;"
)

text = text.replace(
    "export const Header: React.FC<HeaderProps> = ({\n  onOpenAISearch,",
    "export const Header: React.FC<HeaderProps> = ({\n  onOpenProfile,\n  onOpenAISearch,"
)

btn = """          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onOpenProfile}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition-colors cursor-pointer"
              title="تحديث البيانات أو الهدف"
            >
              <User className="w-5 h-5" />
            </button>"""

text = text.replace('          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">', btn)

with open('src/components/Header.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
