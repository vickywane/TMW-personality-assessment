"use client";
import Header from "@/components/Header";
import { PERSONALITY_RESULT_DETAILS } from "@/mock/data";
import { clearStorageItem, TRAIT_STORAGE_KEY } from "@/services/localStorage";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useParams<{ result: string;}>();
  const router = useRouter();
  const [personalityResult, setPersonalityResult] = useState({
    title: "",
    text: "",
  });

  const restartAssessment = () => {
    clearStorageItem(TRAIT_STORAGE_KEY);

    router.push("/");
  };

  useEffect(() => {
    const data = PERSONALITY_RESULT_DETAILS.find(
      (item) => item.type === params.result
    );

    if (!data) {
      return notFound();
    }

    setPersonalityResult({
      text: data?.text,
      title: data?.title,
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="bg-gray-100 h-[100vh]">
        <div className="max-w-[960px] m-auto">
          <div className="pt-6">
            <div className="max-w-[680px] m-auto mb-14">
              <div className="relative h-[250px] mb-6">
                <Image
                  alt="Congratulations"
                  src={"/success.png"}
                  className="absolute object-contain"
                  fill
                />
              </div>

              <h1 className="text-center text-4xl font-semibold">
                Congratulations on your assessment!
              </h1>
              <br />
              <p className="text-xl text-center">
                We found the closest match of your personality through your
                answers!
              </p>
            </div>

            <div className="bg-white rounded-lg py-8 px-12">
              <p className="text-3xl text-center font-medium">
                {personalityResult.title}
              </p>
              <br />
              <p className="text-lg">{personalityResult.text}</p>
            </div>

            <div className="mt-12">
              <button
                onClick={restartAssessment}
                className={
                  "bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-full px-12 rounded-full"
                }
              >
                Start Another Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
