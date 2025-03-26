// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Skeleton } from "@/components/ui/skeleton";
// import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// export default function QuizApp() {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
//   const [showAnswer, setShowAnswer] = useState(false);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         // This will fetch a random set of questions each time the quiz is loaded
//         const response = await fetch("/api/questions");
//         if (!response.ok) {
//           throw new Error("Failed to fetch questions");
//         }
//         const data = await response.json();

//         // Add a correct answer for each question (this would be replaced with actual correct answers)
//         const questionsWithAnswers = data.map((q: any, index: number) => ({
//           ...q,
//           id: index + 1,
//           correctAnswer: q.options[0], // For demo purposes, first option is correct
//         }));

//         setQuestions(questionsWithAnswers);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load questions. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleOptionSelect = (option: string) => {
//     setSelectedOption(option);
//     setUserAnswers({
//       ...userAnswers,
//       [currentQuestionIndex]: option,
//     });
//   };

//   const handleNextQuestion = () => {
//     setShowAnswer(false);

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedOption(userAnswers[currentQuestionIndex + 1] || null);
//     } else {
//       calculateScore();
//       setShowResult(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setShowAnswer(false);
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setSelectedOption(userAnswers[currentQuestionIndex - 1] || null);
//     }
//   };

//   const calculateScore = () => {
//     let newScore = 0;
//     questions.forEach((question, index) => {
//       if (userAnswers[index] === question.correctAnswer) {
//         newScore += 1;
//       }
//     });
//     setScore(newScore);
//   };

//   const restartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setScore(0);
//     setShowResult(false);
//     setUserAnswers({});
//     setShowAnswer(false);
//   };

//   const checkAnswer = () => {
//     setShowAnswer(true);
//     if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
//       // Correct answer logic
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container max-w-3xl mx-auto py-10 px-4">
//         <Card>
//           <CardHeader>
//             <Skeleton className="h-8 w-3/4 mb-2" />
//             <Skeleton className="h-4 w-1/2" />
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <Skeleton className="h-20 w-full" />
//             {[1, 2, 3, 4].map((i) => (
//               <Skeleton key={i} className="h-12 w-full" />
//             ))}
//           </CardContent>
//           <CardFooter className="flex justify-between">
//             <Skeleton className="h-10 w-24" />
//             <Skeleton className="h-10 w-24" />
//           </CardFooter>
//         </Card>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container max-w-3xl mx-auto py-10 px-4">
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>Error</AlertTitle>
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//         <Button onClick={() => window.location.reload()} className="mt-4">
//           Try Again
//         </Button>
//       </div>
//     );
//   }

//   if (showResult) {
//     return (
//       <div className="container max-w-3xl mx-auto py-10 px-4">
//         <Card className="text-center">
//           <CardHeader>
//             <CardTitle className="text-2xl">Quiz Results</CardTitle>
//             <CardDescription>
//               You scored {score} out of {questions.length}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="mb-6">
//               <Progress
//                 value={(score / questions.length) * 100}
//                 className="h-3"
//               />
//               <p className="mt-2 text-sm text-muted-foreground">
//                 {Math.round((score / questions.length) * 100)}% correct
//               </p>
//             </div>

//             <div className="space-y-4 mt-8">
//               <h3 className="text-lg font-medium">Question Summary</h3>
//               {questions.map((question, index) => (
//                 <div key={index} className="border rounded-lg p-4 text-left">
//                   <div className="flex items-start gap-2">
//                     {userAnswers[index] === question.correctAnswer ? (
//                       <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     ) : (
//                       <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
//                     )}
//                     <div>
//                       <p className="font-medium">{question.question}</p>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         Your answer: {userAnswers[index] || "Not answered"}
//                       </p>
//                       {userAnswers[index] !== question.correctAnswer && (
//                         <p className="text-sm text-green-600 mt-1">
//                           Correct answer: {question.correctAnswer}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//           <CardFooter className="justify-center">
//             <Button onClick={restartQuiz} size="lg">
//               Restart Quiz
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="container max-w-3xl mx-auto py-10 px-4">
//       <Card>
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <CardTitle>Nigerian Constitution Quiz</CardTitle>
//             <span className="text-sm font-medium">
//               Question {currentQuestionIndex + 1} of {questions.length}
//             </span>
//           </div>
//           <CardDescription>
//             Test your knowledge of the Nigerian Constitution (1999, as amended)
//           </CardDescription>
//           <Progress
//             value={((currentQuestionIndex + 1) / questions.length) * 100}
//             className="h-2 mt-2"
//           />
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="text-lg font-medium">{currentQuestion?.question}</div>

//           <div className="space-y-3">
//             {currentQuestion?.options.map((option, index) => (
//               <div
//                 key={index}
//                 className={`border rounded-lg p-4 cursor-pointer transition-colors ${
//                   selectedOption === option
//                     ? "border-primary bg-primary/5"
//                     : "hover:bg-muted"
//                 } ${
//                   showAnswer && option === currentQuestion.correctAnswer
//                     ? "border-green-500 bg-green-50"
//                     : ""
//                 } ${
//                   showAnswer &&
//                   selectedOption === option &&
//                   option !== currentQuestion.correctAnswer
//                     ? "border-red-500 bg-red-50"
//                     : ""
//                 }`}
//                 onClick={() => handleOptionSelect(option)}
//               >
//                 <div className="flex items-center gap-3">
//                   <div
//                     className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
//                       selectedOption === option
//                         ? "border-primary"
//                         : "border-muted-foreground"
//                     }`}
//                   >
//                     {selectedOption === option && (
//                       <div className="h-3 w-3 rounded-full bg-primary" />
//                     )}
//                   </div>
//                   <span>{option}</span>

//                   {showAnswer && option === currentQuestion.correctAnswer && (
//                     <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
//                   )}

//                   {showAnswer &&
//                     selectedOption === option &&
//                     option !== currentQuestion.correctAnswer && (
//                       <XCircle className="h-5 w-5 text-red-500 ml-auto" />
//                     )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {showAnswer && selectedOption !== currentQuestion.correctAnswer && (
//             <Alert className="bg-green-50 border-green-200">
//               <CheckCircle className="h-4 w-4 text-green-500" />
//               <AlertTitle>Correct Answer</AlertTitle>
//               <AlertDescription>
//                 {currentQuestion.correctAnswer}
//               </AlertDescription>
//             </Alert>
//           )}
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button
//             variant="outline"
//             onClick={handlePreviousQuestion}
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </Button>

//           <div className="flex gap-2">
//             {!showAnswer && selectedOption && (
//               <Button onClick={checkAnswer} variant="secondary">
//                 Check Answer
//               </Button>
//             )}
//             <Button onClick={handleNextQuestion}>
//               {currentQuestionIndex === questions.length - 1
//                 ? "Finish Quiz"
//                 : "Next Question"}
//             </Button>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function QuizApp() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/questions");
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();

        const questionsWithAnswers = data.map((q: any, index: number) => ({
          ...q,
          id: index + 1,
          correctAnswer: q.options[0],
        }));

        setQuestions(questionsWithAnswers);
        setLoading(false);
      } catch (err) {
        setError("Failed to load questions. Please try again later.");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionSelect = (option: string) => {
    if (!showAnswer) {
      setSelectedOption(option);
      setUserAnswers({
        ...userAnswers,
        [currentQuestionIndex]: option,
      });
    }
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(userAnswers[currentQuestionIndex + 1] || null);
    } else {
      calculateScore();
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setShowAnswer(false);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(userAnswers[currentQuestionIndex - 1] || null);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setUserAnswers({});
    setShowAnswer(false);
  };

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  if (loading) {
    return (
      <div className="container max-w-3xl mx-auto py-10 px-4">
        <Card className="border-green-100 dark:border-green-800">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-2 bg-green-100 dark:bg-green-800" />
            <Skeleton className="h-4 w-1/2 bg-green-100 dark:bg-green-800" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-20 w-full bg-green-100 dark:bg-green-800" />
            {[1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                className="h-12 w-full bg-green-100 dark:bg-green-800"
              />
            ))}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="h-10 w-24 bg-green-100 dark:bg-green-800" />
            <Skeleton className="h-10 w-24 bg-green-100 dark:bg-green-800" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-3xl mx-auto py-10 px-4">
        <Alert
          variant="destructive"
          className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/30"
        >
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800 dark:text-red-200">
            Error
          </AlertTitle>
          <AlertDescription className="text-red-600 dark:text-red-300">
            {error}
          </AlertDescription>
        </Alert>
        <Button
          onClick={() => window.location.reload()}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white"
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="container max-w-3xl mx-auto py-10 px-4">
        <Card className="text-center border-green-100 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 dark:text-green-200">
              Quiz Results
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              You scored {score} out of {questions.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Progress
                value={(score / questions.length) * 100}
                className="h-3 bg-green-100 dark:bg-green-900"
                // indicatorClassName="bg-green-600 dark:bg-green-500"
              />
              <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                {Math.round((score / questions.length) * 100)}% correct
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                Question Summary
              </h3>
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="border border-green-100 rounded-lg p-4 text-left dark:border-green-800"
                >
                  <div className="flex items-start gap-2">
                    {userAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">
                        {question.question}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Your answer: {userAnswers[index] || "Not answered"}
                      </p>
                      {userAnswers[index] !== question.correctAnswer && (
                        <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                          Correct answer: {question.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button
              onClick={restartQuiz}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
            >
              Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <Card className="border-green-100 dark:border-green-800">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-green-800 dark:text-green-200">
              Nigerian Constitution Quiz
            </CardTitle>
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Test your knowledge of the Nigerian Constitution (1999, as amended)
          </CardDescription>
          <Progress
            value={((currentQuestionIndex + 1) / questions.length) * 100}
            className="h-2 mt-2 bg-green-100 dark:bg-green-900"
            // indicatorClassName="bg-green-600 dark:bg-green-500"
          />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg font-medium text-green-800 dark:text-green-200">
            {currentQuestion?.question}
          </div>

          <div className="space-y-3">
            {currentQuestion?.options.map((option, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedOption === option
                    ? "border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/30"
                    : "border-green-100 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/20"
                } ${
                  showAnswer && option === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/30"
                    : ""
                } ${
                  showAnswer &&
                  selectedOption === option &&
                  option !== currentQuestion.correctAnswer
                    ? "border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-900/30"
                    : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                      selectedOption === option
                        ? "border-green-600 dark:border-green-500"
                        : "border-gray-400 dark:border-gray-600"
                    }`}
                  >
                    {selectedOption === option && (
                      <div className="h-3 w-3 rounded-full bg-green-600 dark:bg-green-500" />
                    )}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">
                    {option}
                  </span>

                  {showAnswer && option === currentQuestion.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
                  )}

                  {showAnswer &&
                    selectedOption === option &&
                    option !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-500 ml-auto" />
                    )}
                </div>
              </div>
            ))}
          </div>

          {showAnswer && selectedOption !== currentQuestion.correctAnswer && (
            <Alert className="bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-800">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertTitle className="text-green-800 dark:text-green-200">
                Correct Answer
              </AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-300">
                {currentQuestion.correctAnswer}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {!showAnswer && selectedOption && (
              <Button
                onClick={checkAnswer}
                variant="secondary"
                className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900/70"
              >
                Check Answer
              </Button>
            )}
            <Button
              onClick={handleNextQuestion}
              className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
            >
              {currentQuestionIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
