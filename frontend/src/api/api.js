import axios from "axios";

export const analyzeCode = async (code) => {
  try {
    const response = await axios.post("http://localhost:5000/api/review", { code });
    return response.data.feedback;
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return "Error fetching feedback.";
  }
};
