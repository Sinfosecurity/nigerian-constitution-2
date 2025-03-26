import { NextResponse } from "next/server";

// This is a placeholder for the actual PDF parsing logic
// In a real implementation, you would use a more sophisticated approach
async function extractQuestionsFromPDF() {
  try {
    // This is a mock implementation
    // In a real app, you would parse the actual PDF
    return [
      {
        question: "What year was the Nigerian Constitution enacted?",
        options: ["1999", "1979", "1989", "2009"],
      },
      {
        question:
          "Which section of the Nigerian Constitution guarantees the right to life?",
        options: ["Section 33", "Section 40", "Section 42", "Section 45"],
      },
      {
        question:
          "How many chapters does the Nigerian Constitution (1999) have?",
        options: ["8 Chapters", "10 Chapters", "12 Chapters", "14 Chapters"],
      },
      {
        question:
          "Which of the following is NOT a fundamental right under the Nigerian Constitution?",
        options: [
          "Right to free university education",
          "Right to personal liberty",
          "Right to freedom of thought",
          "Right to fair hearing",
        ],
      },
      {
        question:
          "The Nigerian Constitution establishes how many tiers of government?",
        options: ["3", "2", "4", "5"],
      },
      {
        question:
          "Which section of the Constitution deals with the removal of the President from office?",
        options: ["Section 143", "Section 130", "Section 150", "Section 162"],
      },
      {
        question:
          "The Nigerian Constitution provides for how many ministers to be appointed by the President?",
        options: [
          "At least one from each state",
          "Exactly 36 ministers",
          "Maximum of 42 ministers",
          "No specific number",
        ],
      },
      {
        question:
          "Which of these is NOT a qualification for becoming President of Nigeria according to the Constitution?",
        options: [
          "Having a university degree",
          "Being at least 35 years of age",
          "Being a citizen of Nigeria by birth",
          "Being a member of a political party",
        ],
      },
      {
        question:
          "According to the Nigerian Constitution, who presides over the Senate?",
        options: [
          "The Senate President",
          "The Speaker",
          "The Chief Justice",
          "The Vice President",
        ],
      },
      {
        question:
          "The Nigerian Constitution recognizes which of the following as the highest court in the land?",
        options: [
          "The Supreme Court",
          "The Federal High Court",
          "The Court of Appeal",
          "The Constitutional Court",
        ],
      },
      {
        question:
          "Which section of the Nigerian Constitution deals with citizenship?",
        options: ["Chapter III", "Chapter II", "Chapter IV", "Chapter V"],
      },
      {
        question:
          "How long is the term of office for the President of Nigeria according to the Constitution?",
        options: ["4 years", "5 years", "6 years", "8 years"],
      },
      {
        question:
          "Which of the following is NOT a requirement to become a member of the House of Representatives?",
        options: [
          "Having a law degree",
          "Being at least 30 years of age",
          "Being a citizen of Nigeria",
          "Being a registered voter",
        ],
      },
      {
        question:
          "According to the Nigerian Constitution, who has the power to create new states?",
        options: [
          "The National Assembly",
          "The President",
          "The Supreme Court",
          "The State Assemblies",
        ],
      },
      {
        question:
          "The Nigerian Constitution provides for how many Senators per state?",
        options: ["3", "2", "4", "5"],
      },
    ];
  } catch (error) {
    console.error("Error extracting questions from PDF:", error);
    throw new Error("Failed to extract questions from PDF");
  }
}

export async function GET() {
  try {
    // Get all available questions
    const allQuestions = await extractQuestionsFromPDF();

    // Shuffle the questions array to randomize the order
    const shuffledQuestions = shuffleArray([...allQuestions]);

    // Optionally, limit the number of questions (e.g., pick 5 random questions)
    // const randomQuestions = shuffledQuestions.slice(0, 5);

    // Or return all questions in random order
    return NextResponse.json(shuffledQuestions);
  } catch (error) {
    console.error("Error in questions API:", error);
    return NextResponse.json(
      { error: "Failed to retrieve questions" },
      { status: 500 }
    );
  }
}

// Fisher-Yates shuffle algorithm for randomizing array elements
function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
