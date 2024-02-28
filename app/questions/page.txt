"use client";
import { QUESTIONS } from "@/mock/data";
import { useState } from "react";

export default function Page() {
  const [currentValue, setCurrentValue] = useState({
    question: "",
    selectedAnswer: "",
  });

  const onSelectAnswer = (question: any, option: string) => {
    setCurrentValue({
      question: question,
      selectedAnswer: option,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl"> Personality Questions </h1>

      <ul className="flex flex-col gap-y-8">
        {QUESTIONS.map((item, idx) => (
          <li key={idx}>
            <div>
              <div>
                <p className="text-base text-gray-600">
                  (Question {idx + 1} / {QUESTIONS.length} )
                </p>
                <p className="text-2xl"> {item.question} </p>
              </div>

              <div>
                <ul className="flex flex-col gap-y-4 mt-4">
                  {item.options.map((option, idx) => (
                    <li
                      onClick={() => onSelectAnswer(item.question, option.value)}
                      className={`rounded-lg py-4 px-2 hover:cursor-pointer hover:border-black hover:border-2 ${
                        currentValue.selectedAnswer === option.value &&
                        "border-black border-2"
                      }`}
                      key={idx}
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center rounded border-2 h-[40px] w-[40px] border-black">
                          <p> {option.alphaKey} </p>
                        </div>

                        <div className="ml-3">
                          <p> {option.value} </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
