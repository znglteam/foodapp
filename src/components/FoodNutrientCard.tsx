import React from 'react';
import { FoodItem } from '../types';
import { X, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface FoodNutrientCardProps {
  item: FoodItem;
  onClose: () => void;
}

export const FoodNutrientCard: React.FC<FoodNutrientCardProps> = ({ item, onClose }) => {
  const m = item.micros;

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
    { name: 'فيتامين ب12 (B12)', val: `${m.vitB12_mcg} ميكروجرام`, icon: '🍗' },
    { name: 'حمض الفوليك (B9)', val: `${m.folate_mcg} ميكروجرام`, icon: '🌱' },
  ];

  const omegasList = [
    { name: 'أوميغا 3 (Omega-3)', val: `${m.omega3_mg || 0} ملجم`, icon: '🐟' },
    { name: 'أوميغا 6 (Omega-6)', val: `${m.omega6_mg || 0} ملجم`, icon: '🥜' },
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 bg-[#71a874] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{item.nameAr}</h3>
              <p className="text-xs text-white/90">
                {item.category === 'supplements'
                  ? 'التحليل الغذائي وجرعة المغذيات لكل كبسولة أو قرص'
                  : 'التحليل الغذائي التفصيلي والفيتامينات والمعادن (لكل 100 جرام)'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Main Macros Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            
            <div className="p-3 rounded-2xl bg-[#414141]/5 dark:bg-[#414141]/20 border border-[#414141]/20">
              <span className="text-[10px] text-slate-500 font-semibold block">سعرات حرارية</span>
              <span className="text-base font-extrabold text-[#414141] dark:text-slate-100">
                {item.calories}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#71a874]/10 dark:bg-[#71a874]/20 border border-[#71a874]/30">
              <span className="text-[10px] text-[#71a874] font-semibold block">بروتين</span>
              <span className="text-base font-extrabold text-[#71a874]">
                {item.protein}غ
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#607fc4]/10 dark:bg-[#607fc4]/20 border border-[#607fc4]/30">
              <span className="text-[10px] text-[#607fc4] font-semibold block">نشويات</span>
              <span className="text-base font-extrabold text-[#607fc4]">
                {item.carbs}غ
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#bb5791]/10 dark:bg-[#bb5791]/20 border border-[#bb5791]/30">
              <span className="text-[10px] text-[#bb5791] font-semibold block">دهون</span>
              <span className="text-base font-extrabold text-[#bb5791]">
                {item.fat}غ
              </span>
            </div>

          </div>

          {/* Unit Reference */}
          <div className="text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-between">
            <span>وزن الحصة المعيارية ({item.unitNameAr}):</span>
            <span className="font-bold text-[#414141] dark:text-white">~{item.defaultUnitWeight} جرام</span>
          </div>

          {/* Vitamins Grid */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#414141] dark:text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#607fc4]" />
              <span>محتوى الفيتامينات الكامل</span>
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {vitaminsList.map((v, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/50 flex items-center justify-between text-xs"
                >
                  <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5 font-medium">
                    <span>{v.icon}</span>
                    <span>{v.name}</span>
                  </span>
                  <span className="font-bold text-[#414141] dark:text-white dir-ltr">{v.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Minerals Grid */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#414141] dark:text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#71a874]" />
              <span>محتوى المعادن والعناصر الشحيحة</span>
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {mineralsList.map((m, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/50 flex items-center justify-between text-xs"
                >
                  <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5 font-medium">
                    <span>{m.icon}</span>
                    <span>{m.name}</span>
                  </span>
                  <span className="font-bold text-[#414141] dark:text-white dir-ltr">{m.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Omega-3 & Omega-6 Fatty Acids */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#414141] dark:text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#bb5791]" />
              <span>الأحماض الدهنية النافعة (أوميغا 3 وأوميغا 6)</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {omegasList.map((o, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl border border-[#607fc4]/30 bg-[#607fc4]/10 dark:bg-[#607fc4]/20 flex items-center justify-between text-xs"
                >
                  <span className="text-[#607fc4] flex items-center gap-2 font-bold">
                    <span>{o.icon}</span>
                    <span>{o.name}</span>
                  </span>
                  <span className="font-extrabold text-[#607fc4] dir-ltr">{o.val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#71a874] hover:bg-[#607fc4] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            إغلاق النافذة
          </button>
        </div>

      </div>
    </div>
  );
};
