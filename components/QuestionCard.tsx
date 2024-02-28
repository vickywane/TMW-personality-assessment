"use client";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import { QUESTIONS } from "@/mock/data";
import Link from "next/link";
import cn from "classnames";

interface QuestionCardProps {
  data: any;
  nextQuestionId?: string;
  prevQuestionId?: string;
}

export default function QuestionCard({
  data,
  nextQuestionId,
  prevQuestionId,
}: QuestionCardProps) {
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
    <div>
      <div>
        <p className="text-base text-gray-600">
          (Question {data.id + 1} / {QUESTIONS.length} )
        </p>
        <p className="text-2xl"> {data.question} </p>
      </div>

      <div>
        <ul className="flex flex-col gap-y-4 mt-4">
          {data.options.map((option, idx) => (
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

      <br />

      <div
        className={cn(
          "w-full flex",
          prevQuestionId ? "justify-between" : "justify-end"
        )}
      >
        {prevQuestionId && (
          <Link href={`/questions/${prevQuestionId}`}>
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Previous Question
            </button>
          </Link>
        )}

        <Link href={`/questions/${nextQuestionId}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Next Question
          </button>
        </Link>
      </div>
      <br />
    </div>
  );
}
