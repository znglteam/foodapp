import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { calculateUserTargets, calculateBMIInfo } from '../utils/nutritionCalculators';
import { 
  User, 
  Activity, 
  Target, 
  Scale, 
  Ruler, 
  Calendar, 
  Flame, 
  ShieldAlert, 
  CheckCircle2, 
  HeartPulse, 
  TrendingDown,
  Gauge,
  AlertTriangle,
  Info,
  X
} from 'lucide-react';

interface UserProfileProps {
  profile: UserProfile;
  onSaveProfile: (newProfile: UserProfile) => void;
  onClose?: () => void;
  isModal?: boolean;
}

export const UserProfileSection: React.FC<UserProfileProps> = ({
  profile,
  onSaveProfile,
  onClose,
  isModal = false
}) => {
  const [formState, setFormState] = useState<UserProfile>(profile);

  const calculated = calculateUserTargets(formState);
  const bmiInfo = calculateBMIInfo(formState.weightKg, formState.heightCm);

  const projectedWeightKg = Math.max(0, Math.round((formState.weightKg - (formState.weightLossTargetKg || 0)) * 10) / 10);
  const heightM = formState.heightCm > 0 ? formState.heightCm / 100 : 1.7;
  const projectedBMI = heightM > 0 ? Math.round((projectedWeightKg / (heightM * heightM)) * 10) / 10 : 0;
  const isProjectedUnderweight = (formState.weightLossTargetKg || 0) > 0 && projectedWeightKg < bmiInfo.idealWeightMinKg;
  const maxSafeLossKg = Math.max(0, Math.round((formState.weightKg - bmiInfo.idealWeightMinKg) * 10) / 10);

  // منع تغيير القيم بالخطأ عند السكرول بالفأرة أثناء التركيز على الحقول الرقمية
  useEffect(() => {
    const handleWheel = () => {
      if (document.activeElement instanceof HTMLInputElement && document.activeElement.type === 'number') {
        document.activeElement.blur();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handleGenderChange = (gender: 'male' | 'female') => {
    const updated = { ...formState, gender };
    setFormState(updated);
    onSaveProfile(updated);
  };

  const handleInputChange = (field: keyof UserProfile, value: number | string) => {
    const updated = { ...formState, [field]: value };
    setFormState(updated);
    onSaveProfile(updated);
  };

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden ${
      isModal ? 'max-w-3xl w-full mx-auto my-auto max-h-[90vh] flex flex-col' : ''
    }`}>
      
      {/* Header Bar */}
      <div className="bg-[#414141] p-5 sm:p-6 text-white flex items-center justify-between border-b border-[#414141]">
        <div className="flex items-center gap-3">
          <div className={`p-3 backdrop-blur-md rounded-2xl border transition-colors ${
            formState.gender === 'female'
              ? 'bg-[#bb5791]/20 border-[#bb5791]/40 text-[#bb5791]'
              : 'bg-[#607fc4]/20 border-[#607fc4]/40 text-[#607fc4]'
          }`}>
            <User className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold">الملف الشخصي</h2>
              <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold transition-all ${
                formState.gender === 'female'
                  ? 'bg-[#bb5791] text-white shadow-xs'
                  : 'bg-[#607fc4] text-white shadow-xs'
              }`}>
                {formState.gender === 'female' ? 'أنثى' : 'ذكر'}
              </span>
            </div>
            <p className="text-xs text-slate-300 opacity-90">
              بياناتك الصحية
            </p>
          </div>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        )}
      </div>

      {/* Main Form & Results Body */}
      <div className={`p-5 sm:p-7 space-y-6 overflow-y-auto ${isModal ? 'flex-1' : ''}`}>
        
        {/* Basic Body Attributes Grid */}
        <div>
          <h3 className="text-sm font-bold text-[#414141] dark:text-white mb-3 flex items-center gap-2">
            <HeartPulse className={`w-4 h-4 transition-colors ${
              formState.gender === 'female' ? 'text-[#bb5791]' : 'text-[#607fc4]'
            }`} />
            <span>البيانات الجسدية المباشرة</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Gender Input */}
            <div className="space-y-1.5 col-span-1 sm:col-span-2 lg:col-span-1">
              <label className="text-xs font-semibold text-[#414141] dark:text-slate-300">الجنس</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <button
                  type="button"
                  onClick={() => handleGenderChange('male')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    formState.gender === 'male'
                      ? 'bg-[#607fc4] text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#607fc4]'
                  }`}
                >
                  ذكر
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderChange('female')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    formState.gender === 'female'
                      ? 'bg-[#bb5791] text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#bb5791]'
                  }`}
                >
                  أنثى
                </button>
              </div>
            </div>

            {/* Age Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#414141] dark:text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>العمر (سنة)</span>
              </label>
              <input
                type="number"
                min="10"
                max="100"
                value={formState.age}
                onChange={(e) => handleInputChange('age', Number(e.target.value))}
                onWheel={(e) => e.currentTarget.blur()}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[#414141] dark:text-white text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#71a874]"
              />
            </div>

            {/* Height Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#414141] dark:text-slate-300 flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>الطول (سم)</span>
              </label>
              <input
                type="number"
                min="100"
                max="230"
                value={formState.heightCm}
                onChange={(e) => handleInputChange('heightCm', Number(e.target.value))}
                onWheel={(e) => e.currentTarget.blur()}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[#414141] dark:text-white text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#71a874]"
              />
            </div>

            {/* Weight Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#414141] dark:text-slate-300 flex items-center gap-1">
                <Scale className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>الوزن الحالي (كجم)</span>
              </label>
              <input
                type="number"
                min="30"
                max="250"
                value={formState.weightKg}
                onChange={(e) => handleInputChange('weightKg', Number(e.target.value))}
                onWheel={(e) => e.currentTarget.blur()}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[#414141] dark:text-white text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#71a874]"
              />
            </div>

          </div>
        </div>

        {/* BMI - مقياس كتلة الجسم */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-2.5">
              <div className="p-2 bg-[#607fc4]/15 text-[#607fc4] rounded-xl shrink-0 mt-0.5 sm:mt-0">
                <Gauge className="w-5 h-5 text-[#607fc4]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-[#414141] dark:text-white">
                    مؤشر كتلة الجسم (BMI)
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${bmiInfo.badgeColor}`}>
                    {bmiInfo.labelAr}
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 sm:gap-0">
              <span className="text-[11px] text-slate-400 font-medium">مؤشر الكتلة</span>
              <span className="text-lg font-black text-[#414141] dark:text-white">
                {bmiInfo.bmi} <span className="text-xs font-medium text-slate-400">كجم/م²</span>
              </span>
            </div>
          </div>

          {/* Visual Spectrum Bar with numbers above and categories below */}
          <div className="space-y-1.5 pt-1">
            {/* أرقام مؤشر الكتلة فوق المؤشر */}
            <div className="grid grid-cols-4 text-center text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              <span dir="ltr">&lt; 18.5</span>
              <span dir="ltr">18.5 - 24.9</span>
              <span dir="ltr">25 - 29.9</span>
              <span dir="ltr">&ge; 30</span>
            </div>

            {/* شريط المؤشر بالألوان المحددة فقط */}
            <div className="h-2.5 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-700 gap-1 p-0.5">
              <div className="w-1/4 rounded-full bg-[#607fc4]" title="نحافة" />
              <div className="w-1/4 rounded-full bg-[#71a874]" title="طبيعي" />
              <div className="w-1/4 rounded-full bg-[#414141]" title="زيادة" />
              <div className="w-1/4 rounded-full bg-[#bb5791]" title="سمنة" />
            </div>

            {/* التصنيفات تحت المؤشر */}
            <div className="grid grid-cols-4 text-center text-xs font-bold">
              <span className={bmiInfo.category === 'underweight' ? 'text-[#607fc4] font-black' : 'text-slate-500 dark:text-slate-400'}>
                نحافة
              </span>
              <span className={bmiInfo.category === 'normal' ? 'text-[#71a874] font-black' : 'text-slate-500 dark:text-slate-400'}>
                طبيعي
              </span>
              <span className={bmiInfo.category === 'overweight' ? 'text-[#414141] dark:text-slate-200 font-black' : 'text-slate-500 dark:text-slate-400'}>
                زيادة
              </span>
              <span className={bmiInfo.category.startsWith('obese') ? 'text-[#bb5791] font-black' : 'text-slate-500 dark:text-slate-400'}>
                سمنة
              </span>
            </div>
          </div>

          {/* Ideal weight range */}
          <div className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900/90 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span>الوزن المثالي المناسب لك:</span>
            <span className="font-bold text-[#71a874]">
              من {bmiInfo.idealWeightMinKg} إلى {bmiInfo.idealWeightMaxKg} كجم
            </span>
          </div>
        </div>

        {/* Activity Level Selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>مستوى النشاط البدني اليومي</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'low', title: 'قليل', desc: 'خمول أو عمل مكتبي (بدون تمارين)' },
              { id: 'moderate', title: 'متوسط', desc: 'تمارين 3 إلى 5 أيام أسبوعياً' },
              { id: 'high', title: 'مرتفع', desc: 'تمارين مكثفة 6 إلى 7 أيام أسبوعياً' },
            ].map((act) => (
              <button
                key={act.id}
                type="button"
                onClick={() => handleInputChange('activityLevel', act.id as any)}
                className={`p-3 rounded-2xl border text-right transition-all cursor-pointer ${
                  formState.activityLevel === act.id
                    ? 'border-[#71a874] bg-[#71a874]/15 text-[#414141] dark:text-white ring-2 ring-[#71a874]/20'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold">{act.title}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{act.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Weight Loss Target Section */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-[#71a874]/30 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#71a874] text-white rounded-xl">
              <TrendingDown className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#414141] dark:text-white">
                هدف تنزيل الوزن
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Weight Loss Amount */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#414141] dark:text-slate-300">
                مقدار الوزن المراد تنزيله (كجم)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="50"
                  step="0.5"
                  value={formState.weightLossTargetKg}
                  onChange={(e) => handleInputChange('weightLossTargetKg', Number(e.target.value))}
                  onWheel={(e) => e.currentTarget.blur()}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#414141] dark:text-white text-sm font-bold focus:outline-hidden focus:ring-2 focus:ring-[#71a874]"
                />
                <span className="absolute left-3 top-2.5 text-xs font-medium text-slate-400">كجم</span>
              </div>
            </div>

            {/* Timeframe in Weeks */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#414141] dark:text-slate-300">
                الفترة الزمنية بالأسابيع
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="52"
                  value={formState.timeframeWeeks}
                  onChange={(e) => handleInputChange('timeframeWeeks', Number(e.target.value))}
                  onWheel={(e) => e.currentTarget.blur()}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#414141] dark:text-white text-sm font-bold focus:outline-hidden focus:ring-2 focus:ring-[#71a874]"
                />
                <span className="absolute left-3 top-2.5 text-xs font-medium text-slate-400">أسابيع ({formState.timeframeWeeks * 7} يوم)</span>
              </div>
            </div>

          </div>

          {/* Projected Weight Summary */}
          {formState.weightLossTargetKg > 0 && (
            <div className="flex flex-wrap items-center justify-between text-xs px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-600 dark:text-slate-400">الوزن المتوقع بعد تحقيق الخطة:</span>
              <span className="font-bold text-[#414141] dark:text-white">
                {projectedWeightKg} كجم <span className="text-[11px] font-normal text-slate-400">| مؤشر الكتلة المتوقع: {projectedBMI} كجم/م²</span>
              </span>
            </div>
          )}

          {/* تنبيه إذا كان هدف التنزيل يوصل لنحافة غير طبيعية */}
          {isProjectedUnderweight && (
            <div className="p-3.5 rounded-xl bg-[#bb5791]/10 border border-[#bb5791]/40 text-[#414141] dark:text-slate-200 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#bb5791] text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0 text-[#bb5791]" />
                <span>تنبيه صحي: هدف التنزيل سيؤدي إلى نحافة غير طبيعية!</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed pr-6">
                خسارة <strong className="text-[#bb5791]">{formState.weightLossTargetKg} كجم</strong> ستجعل وزنك <strong className="text-[#414141] dark:text-white">{projectedWeightKg} كجم</strong> بمؤشر كتلة (<strong className="text-[#bb5791]">{projectedBMI} كجم/م²</strong>)، وهو أقل من الحد الأدنى للوزن الطبيعي لطولك ({bmiInfo.idealWeightMinKg} كجم).
              </p>
              <div className="pr-6 text-[11px] text-[#414141] dark:text-slate-200 font-semibold bg-white/70 dark:bg-[#414141]/50 p-2.5 rounded-lg border border-[#bb5791]/30">
                {maxSafeLossKg > 0 ? (
                  <span>💡 أقصى نزول صحي موصى به لك دون الدخول في النحافة: <strong className="underline text-[#71a874]">{maxSafeLossKg} كجم</strong> (ليصل وزنك إلى {bmiInfo.idealWeightMinKg} كجم).</span>
                ) : (
                  <span>💡 وزنك الحالي ({formState.weightKg} كجم) يقع ضمن أو دون معدل النحافة بالفعل، ولا يُنصح طبياً بإنقاص أي وزن إضافي.</span>
                )}
              </div>
            </div>
          )}

          {/* Warning if weight loss rate is too fast */}
          {calculated.isDeficitTooAggressive && (
            <div className="p-3 rounded-xl bg-[#bb5791]/10 border border-[#bb5791]/40 text-[#414141] dark:text-slate-200 text-xs flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-[#bb5791]" />
              <div>
                <strong>تنبيه صحي:</strong> هذا المعدل يتطلب عجز سعرات مرتفع جداً. تم ضبط السعرات على الحد الأدنى الآمن ({calculated.safeMinimumCalories} سعرة) لتجنب الإرهاق. يفضل زيادة عدد الأسابيع لخسارة وزن صحية تدريجية.
              </div>
            </div>
          )}
        </div>

        {/* Calculated Results Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          {/* BMR Card */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center flex flex-col justify-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-xs font-bold text-[#414141] dark:text-slate-200">
                الأيض الأساسي (BMR)
              </span>
              <span className="group relative cursor-help" tabIndex={0}>
                <Info className="w-3.5 h-3.5 text-slate-400 hover:text-[#607fc4] transition-colors" />
                <span className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity absolute bottom-full mb-1.5 right-1/2 translate-x-1/2 w-48 p-2 bg-[#414141] text-white text-[10px] rounded-xl shadow-lg text-center z-50 leading-relaxed">
                  طاقة تشغيل الأعضاء الحيوية (القلب، التنفس، المخ) أثناء الراحة التامة دون أي حركة.
                </span>
              </span>
            </div>
            <span className="text-xl font-extrabold text-[#414141] dark:text-white block">
              {calculated.bmr}
            </span>
            <span className="text-[11px] font-medium text-slate-400 block">سعرة / يوم</span>
          </div>

          {/* TDEE Card */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center flex flex-col justify-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-xs font-bold text-[#414141] dark:text-slate-200">
                الحرق اليومي (TDEE)
              </span>
              <span className="group relative cursor-help" tabIndex={0}>
                <Info className="w-3.5 h-3.5 text-slate-400 hover:text-[#607fc4] transition-colors" />
                <span className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity absolute bottom-full mb-1.5 right-1/2 translate-x-1/2 w-48 p-2 bg-[#414141] text-white text-[10px] rounded-xl shadow-lg text-center z-50 leading-relaxed">
                  إجمالي ما يحرقه جسمك بالكامل يومياً متضمناً نشاطك وحركتك، وتناوله يثبّت وزنك الحالي.
                </span>
              </span>
            </div>
            <span className="text-xl font-extrabold text-[#414141] dark:text-white block">
              {calculated.tdee}
            </span>
            <span className="text-[11px] font-medium text-slate-400 block">سعرة لثبات الوزن</span>
          </div>

          {/* Target Calories Card */}
          <div className="p-3.5 rounded-2xl bg-[#71a874]/15 border border-[#71a874]/30 text-center col-span-2 sm:col-span-2 flex flex-col justify-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-xs font-bold text-[#71a874]">
                الهدف اليومي
              </span>
              <span className="group relative cursor-help" tabIndex={0}>
                <Info className="w-3.5 h-3.5 text-[#71a874]/70 hover:text-[#71a874] transition-colors" />
                <span className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity absolute bottom-full mb-1.5 right-1/2 translate-x-1/2 w-48 p-2 bg-[#414141] text-white text-[10px] rounded-xl shadow-lg text-center z-50 leading-relaxed">
                  السعرات اليومية الموصى بتناولها لتحقيق هدفك بنزول آمن ومستمر مع الحفاظ على الكتلة العضلية.
                </span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 text-2xl font-black text-[#71a874]">
              <Flame className="w-5 h-5 text-[#71a874]" />
              <span>{calculated.recommendedDailyCalories}</span>
            </div>
            <span className="text-[11px] font-medium text-[#71a874] block">سعرة / يوم</span>
          </div>

        </div>

        {/* Target Daily Macros Breakdown */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#414141] dark:text-slate-300">
            الماكروز اليومية الموصى بها لحفظ العضلات وشبع أطول:
          </h4>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-[#71a874]/15 border border-[#71a874]/30">
              <span className="block text-[#71a874] font-bold">بروتين</span>
              <span className="text-base font-extrabold text-[#414141] dark:text-slate-100">
                {calculated.recommendedMacros.proteinGrams} جرام
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#607fc4]/15 border border-[#607fc4]/30">
              <span className="block text-[#607fc4] font-bold">نشويات</span>
              <span className="text-base font-extrabold text-[#414141] dark:text-slate-100">
                {calculated.recommendedMacros.carbsGrams} جرام
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#bb5791]/15 border border-[#bb5791]/30">
              <span className="block text-[#bb5791] font-bold">دهون</span>
              <span className="text-base font-extrabold text-[#414141] dark:text-slate-100">
                {calculated.recommendedMacros.fatGrams} جرام
              </span>
            </div>
          </div>
        </div>

        {/* Save button if modal */}
        {isModal && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-[#71a874] hover:bg-[#607fc4] text-white font-bold rounded-2xl shadow-md shadow-[#71a874]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>حفظ</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
