const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/review", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Analyze this JavaScript/TypeScript code and provide feedback on best practices, performance, and possible errors. Try being concise. Code:\n\n${code}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedback = response.text();

    res.json({ feedback });
  } catch (error) {
    console.error("Error calling Gemini API:", error.message);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
