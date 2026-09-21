import React from 'react';
import { Utensils, User, Sparkles, RefreshCw, Calendar, ChefHat } from 'lucide-react';

interface HeaderProps {
  onOpenProfile: () => void;
  onClearLog: () => void;
  loggedCount: number;
  totalCalories: number;
  targetCalories: number;
  gender?: 'male' | 'female';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenProfile,
  onClearLog,
  loggedCount,
  totalCalories,
  targetCalories,
  gender = 'male',
}) => {

  const caloriePercent = targetCalories > 0 ? Math.min(100, Math.round((totalCalories / targetCalories) * 100)) : 0;

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo & App Title */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#71a874] to-[#607fc4] flex items-center justify-center text-white shadow-md shadow-[#71a874]/20">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#414141] dark:text-white tracking-tight flex items-center gap-2">
                  <span>التطبيق التغذوي المتكامل</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onOpenProfile}
              className={`p-2 px-3 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                gender === 'female'
                  ? 'bg-[#bb5791]/15 text-[#bb5791] hover:bg-[#bb5791]/25'
                  : 'bg-[#607fc4]/15 text-[#607fc4] hover:bg-[#607fc4]/25'
              }`}
              title="الملف الشخصي"
            >
              <User className="w-5 h-5" />
              <span className="text-xs font-bold">
                {gender === 'female' ? 'الملف الشخصي' : 'الملف الشخصي'}
              </span>
            </button>

            {loggedCount > 0 && (
              <button
                onClick={onClearLog}
                className="p-2 rounded-xl text-slate-400 hover:text-[#bb5791] hover:bg-[#bb5791]/15 transition-colors cursor-pointer"
                title="مسح السجل اليومي"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
