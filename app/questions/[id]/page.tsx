import React from "react";
import { notFound } from "next/navigation";
import { QUESTIONS } from "@/mock/data";
import QuestionCard from "@/components/QuestionCard";
import Header from "@/components/Header";
import AccessbilityPrompt from "@/components/AccessibilityPrompt";

async function getPageData(questionId: string) {
  const data = QUESTIONS.find(({ id }) => id === questionId);

  if (!data) return notFound()

  return {
    data,
    nextQuestionId:
      QUESTIONS[QUESTIONS.findIndex((element) => element.id === questionId) + 1]
        ?.id,
    prevQuestionId:
      QUESTIONS[QUESTIONS.findIndex((element) => element.id === questionId) - 1]
        ?.id,
  };
}

export interface PageProps {
  params: {
    id: string;
  };
}

export default async function MyPage({ params }: PageProps) {
  let questionId = params.id || "";
  const { data, nextQuestionId, prevQuestionId } = await getPageData(
    questionId
  );

  return (
    <div>
      <Header />

      <div
        style={{ height: "100vh" }}
        className="h-full flex flex-col justify-center items-center bg-gray-200"
      >
        <br />
        <AccessbilityPrompt />
        <br />

        <div className="bg-white p-4 max-w-[960px] m-auto">
          <h1 className="text-2xl font-semibold"> All Questions: </h1>

          <QuestionCard {...{ data, nextQuestionId, prevQuestionId }} />
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return QUESTIONS.map(({ id }) => ({
    id,
  }));
}
