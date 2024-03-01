"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TRAIT, ENTER_KEY } from "@/mock/data";
import cn from "classnames";
import { getHighestValue } from "@/utils/helpers/";
import {
  TRAIT_STORAGE_KEY,
  getStorageItem,
  setStorageItem,
} from "@/services/localStorage";
import { useKeyBoardShortcut } from "@/hooks/useKeyboardShortcut";
import { QuestionCardProps } from "@/utils/types";
import QuestionOption from "./QuestionOption";
import Button from "./Button";

/**
 * A question card component.
 * @param {Object} props - The properties of the question card.
 * @param {Object} props.data - The data object containing information about the question.
 * @param {string} props.data.id - The unique identifier of the question.
 * @param {string} props.data.question - The text content of the question.
 * @param {Object[]} props.data.options - An array of options for the question.
 * @param {string} props.data.options[].alphaKey - The alpha key of the option.
 * @param {string} props.data.options[].value - The value or text content of the option.
 * @param {string} props.nextQuestionId - The unique identifier of the next question.
 * @param {string} props.prevQuestionId - The unique identifier of the previous question.
 * @returns {JSX.Element} The JSX element representing the question card.
 */

export default function QuestionCard({
  data,
  nextQuestionId,
  prevQuestionId,
}: QuestionCardProps) {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    updateStorage({ lastQuestionId: data.id });
  }, []);

  const updateStorage = (storeData: Record<any, any>) => {
    const existingStorageData = getStorageItem(TRAIT_STORAGE_KEY);

    const savedAnswer = existingStorageData?.assesments.find(
      ({ id: savedQuestionId }) => data.id === savedQuestionId
    );

    if (savedAnswer?.selectedAnswer) {
      setSelectedAnswer(savedAnswer?.selectedAnswer);
    }

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
      setSelectedAnswer(matchingAnswerKey.value);
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
      selectedAnswer,
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
      for (const trait in TRAIT) {
        obj[trait] += TRAIT[trait].includes(item.selectedAnswer) ? 1 : 0;
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
            <QuestionOption
              handleAnswerClick={(value) => setSelectedAnswer(value)}
              key={idx}
              {...{ option, selectedAnswer }}
            />
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
          <Button
            hidden={!prevQuestionId}
            onClick={() => router.push(`/questions/${prevQuestionId}`)}
            title="Previous"
            styleClass="bg-gray-500 hover:bg-blue-700"
          />
        )}

        {nextQuestionId ? (
          <Button
            title={"Next Question"}
            onClick={onConfirmAnswer}
            styleClass={
              selectedAnswer
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-gray-500 hover:bg-gray-700"
            }
          />
        ) : (
          <Button
            onClick={onCompleteAssessment}
            title="Complete Assessment"
            styleClass="bg-blue-500 hover:bg-blue-700"
          />
        )}
      </div>
      <br />
    </div>
  );
}
