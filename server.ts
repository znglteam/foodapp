import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API endpoint to analyze custom food using Gemini AI
app.post("/api/ai/analyze-food", async (req, res) => {
  try {
    const { foodQuery } = req.body;
    if (!foodQuery || typeof foodQuery !== 'string') {
      res.status(400).json({ error: "يرجى كتابة اسم الوجبة أو الطعام بشكل صحيح" });
      return;
    }

    if (!process.env.GEMINI_API_KEY) {
      res.status(500).json({ error: "مفتاح GEMINI_API_KEY غير متوفر في النظام" });
      return;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `قم بتحليل القيمة الغذائية لكل 100 جرام لهذا الطعام أو الوجبة: "${foodQuery}".
      أعطِ التقديرات الأكثر دقة للسعرات الحرارية، الماكروز (بروتين، كربوهيدرات، دهون، ألياف)، وجميع الفيتامينات والمعادن الرئيسية الموضحة في المخطط.
      تحديد تصنيف الطعام الأنسب من بين:
      'fruits' (فاكهة), 'vegetables' (خضار), 'meats' (لحوم), 'dairy' (أجبان وألبان), 'nuts' (مكسرات), 'grains' (حبوب وبقول), 'oils' (زيوت ودهون).`,
      config: {
        systemInstruction: "أنت خبير تغذية متقدم متخصص في تقدير المكونات والقيم الغذائية بدقة باللغة العربية.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            nameAr: { type: Type.STRING, description: "اسم الطعام بالعربية" },
            nameEn: { type: Type.STRING, description: "اسم الطعام بالإنجليزية" },
            category: { 
              type: Type.STRING, 
              description: "تصنيف الطعام: fruits, vegetables, meats, dairy, nuts, grains, oils" 
            },
            calories: { type: Type.NUMBER, description: "السعرات الحرارية لكل 100 جرام" },
            protein: { type: Type.NUMBER, description: "البروتين بالجرام لكل 100 جرام" },
            carbs: { type: Type.NUMBER, description: "الكربوهيدرات بالجرام لكل 100 جرام" },
            fat: { type: Type.NUMBER, description: "الدهون بالجرام لكل 100 جرام" },
            fiber: { type: Type.NUMBER, description: "الألياف بالجرام لكل 100 جرام" },
            defaultUnitWeight: { type: Type.NUMBER, description: "الوزن التقديري للحبة أو الحصة الواحدة بالجرام" },
            unitNameAr: { type: Type.STRING, description: "وصف الحصة بالعربية مثلاً (حبة متوسطة، طبق، حصة)" },
            micros: {
              type: Type.OBJECT,
              properties: {
                vitA_mcg: { type: Type.NUMBER },
                vitC_mg: { type: Type.NUMBER },
                vitD_mcg: { type: Type.NUMBER },
                vitE_mg: { type: Type.NUMBER },
                vitK_mcg: { type: Type.NUMBER },
                vitB1_mg: { type: Type.NUMBER },
                vitB2_mg: { type: Type.NUMBER },
                vitB3_mg: { type: Type.NUMBER },
                vitB5_mg: { type: Type.NUMBER, description: "فيتامين ب5 حمض البانتوثينيك بالملجم" },
                vitB6_mg: { type: Type.NUMBER },
                vitB12_mcg: { type: Type.NUMBER },
                folate_mcg: { type: Type.NUMBER },
                calcium_mg: { type: Type.NUMBER },
                iron_mg: { type: Type.NUMBER },
                potassium_mg: { type: Type.NUMBER },
                magnesium_mg: { type: Type.NUMBER },
                zinc_mg: { type: Type.NUMBER },
                sodium_mg: { type: Type.NUMBER },
                omega3_mg: { type: Type.NUMBER, description: "أوميغا 3 بالملجم" },
                omega6_mg: { type: Type.NUMBER, description: "أوميغا 6 بالملجم" },
                phosphorus_mg: { type: Type.NUMBER, description: "فوسفور بالملجم" },
                selenium_mcg: { type: Type.NUMBER, description: "سيلينيوم بالميكروجرام" },
                copper_mg: { type: Type.NUMBER, description: "نحاس بالملجم" },
                manganese_mg: { type: Type.NUMBER, description: "منجنيز بالملجم" },
              },
              required: [
                "vitA_mcg", "vitC_mg", "vitD_mcg", "vitE_mg", "vitK_mcg",
                "vitB1_mg", "vitB2_mg", "vitB3_mg", "vitB6_mg", "vitB12_mcg",
                "folate_mcg", "calcium_mg", "iron_mg", "potassium_mg",
                "magnesium_mg", "zinc_mg", "sodium_mg",
                "omega3_mg", "omega6_mg", "phosphorus_mg", "selenium_mcg",
                "copper_mg", "manganese_mg"
              ]
            }
          },
          required: ["nameAr", "nameEn", "category", "calories", "protein", "carbs", "fat", "fiber", "defaultUnitWeight", "unitNameAr", "micros"]
        }
      }
    });

    const foodData = JSON.parse(response.text || "{}");
    foodData.id = "ai-" + Date.now();

    res.json(foodData);
  } catch (error: any) {
    console.error("Gemini AI Food Analysis Error:", error);
    res.status(500).json({ 
      error: "حدث خطأ أثناء تحليل القيمة الغذائية بواسطة الذكاء الاصطناعي",
      details: error?.message || String(error)
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
