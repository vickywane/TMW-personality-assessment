"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TRAIT, ENTER_KEY } from "@/mock/data";
import Link from "next/link";
import cn from "classnames";
import { getHighestValue } from "@/utils/helpers/";
import {
  TRAIT_STORAGE_KEY,
  getStorageItem,
  setStorageItem,
} from "@/services/localStorage";
import { useKeyBoardShortcut } from "@/hooks/useKeyboardShortcut";
import { QuestionCardProps } from "@/utils/types";

export default function QuestionCard({
  data,
  nextQuestionId,
  prevQuestionId,
}: QuestionCardProps) {
  const router = useRouter();

  const [currentValue, setCurrentValue] = useState({
    question: "",
    selectedAnswer: "",
  });

  const onSelectAnswer = (question: any, option: string) => {
    setCurrentValue({
      question: "",
      selectedAnswer: option,
    });
  };

  useEffect(() => {
    updateStorage({ lastQuestionId: data.id });
  }, []);

  const updateStorage = (storeData: Record<any, any>) => {
    const existingStorageData = getStorageItem(TRAIT_STORAGE_KEY);

    setStorageItem(TRAIT_STORAGE_KEY, {
      ...existingStorageData,
      ...storeData,
    });
  };

  const handleKeyPress = (keyName: string) => {
    const matchingAnswerKey = data.options.find(
      (item) => item.alphaKey === keyName
    );

    if (matchingAnswerKey) {
      onSelectAnswer(data.question, matchingAnswerKey.value);
    }
  };

  useKeyBoardShortcut({
    callback: (keyName) => handleKeyPress(keyName),
  });

  const onConfirmAnswer = () => {
    const storageData = getStorageItem(TRAIT_STORAGE_KEY);

    const allAssessments = [...storageData.assesments];

    allAssessments.push({
      id: data.id,
      question: data.question,
      selectedAnswer: currentValue.selectedAnswer,
    });

    updateStorage({ assesments: allAssessments });

    return router.push(`/questions/${nextQuestionId}`);
  };

  const onCompleteAssessment = () => {
    const storageData = getStorageItem(TRAIT_STORAGE_KEY);

    const obj = {
      rude: 0,
      introvert: 0,
      extrovert: 0,
    };

    for (const item of storageData?.assesments) {
      for (const traitItem in TRAIT) {
        obj[traitItem] += TRAIT[traitItem].includes(item.selectedAnswer)
          ? 1
          : 0;
      }
    }

    router.push(`/assessment/${getHighestValue(obj)}`);
  };

  useKeyBoardShortcut({
    callback: nextQuestionId ? onConfirmAnswer : onCompleteAssessment,
    actionKey: ENTER_KEY,
  });

  return (
    <div>
      <div className="my-4">
        <p className="text-2xl"> {data.question} </p>
      </div>

      <div>
        <ul className="flex flex-col gap-y-4 mt-4">
          {data.options.map((option, idx) => (
            <li
              onClick={() => onSelectAnswer(option.value)}
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
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-full">
              Previous Question
            </button>
          </Link>
        )}

        {nextQuestionId ? (
          <button
            disabled={!currentValue.selectedAnswer}
            onClick={onConfirmAnswer}
            className={cn(
              "text-white font-medium py-2 px-8 rounded-full",
              currentValue.selectedAnswer
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-gray-500 hover:bg-gray-700"
            )}
          >
            Next Question
          </button>
        ) : (
          <button
            onClick={onCompleteAssessment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-full"
          >
            Complete Assessment
          </button>
        )}
      </div>
      <br />
    </div>
  );
}
