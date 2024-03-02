"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TRAIT_STORAGE_KEY, clearStorageItem, getStorageItem, setStorageItem } from "@/services/localStorage";
import Button from "@/components/Button";
import { QUESTIONS } from "@/mock/data";
import { StoredAssessmentType } from "@/utils/types";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();
  const [existingAssessment, setExistingAssessment] =
    useState<null | StoredAssessmentType>(null);

  const initalizeTraitsAssessment = () => {
    const allAssessments = QUESTIONS[0];

    setStorageItem(TRAIT_STORAGE_KEY, {
      name,
      createdAt: new Date(),
      lastQuestionId: "",
      assesments: [],
    });

    return router.push(`/questions/${allAssessments.id}`);
  };

  useEffect(() => {
    const storageData = getStorageItem(TRAIT_STORAGE_KEY);

    if (storageData?.lastQuestionId && storageData?.name) {
      setExistingAssessment(storageData);
    }
  }, []);

  const restartAssessment = () => {
    clearStorageItem(TRAIT_STORAGE_KEY);

    setExistingAssessment(null);
  };

  return (
    <main className="flex min-h-screen flex-col justify-center max-w-[560px] m-auto">
      <h1 className="text-3xl font-semibold"> Personality, Redefined! </h1>
      <br />

      <p className="text-gray-600 mb-4">
        Discover your true self with our Personality Checker app. Unveil your
        unique traits and strengths effortlessly. Gain valuable insights for
        personal growth and development.
        <br />
        <br />
        Start now for a journey of self-discovery!
      </p>

      <hr />

      <div>
        {existingAssessment ? (
          <div className="mt-4 border rounded p-4">
            <p className="text-xl">
              Hi <span className="font-medium">{existingAssessment?.name}</span>
              ...
            </p>
            <br />
            <p>
              You have answered {existingAssessment?.assesments.length}{" "}
              questions from a previous assessment started on{" "}
              {new Date(existingAssessment?.createdAt).toLocaleDateString()}
            </p>

            <br />

            <div className="flex flex-row justify-between items-center">
              <div>
                <div
                  onClick={restartAssessment}
                  className={"text-gray-500 font-medium hover:cursor-pointer"}
                >
                  <p> Restart Assessment </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() =>
                    router.push(
                      `/questions/${existingAssessment?.lastQuestionId}`
                    )
                  }
                  className={
                    "bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-full px-12 rounded-full"
                  }
                >
                  Continue Assessment
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <form className="mt-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    What do we call you?
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Your name"
                    required
                  />
                </div>
              </form>
            </div>

            <div className=" mt-8 w-full">
              <Button
                onClick={initalizeTraitsAssessment}
                disabled={!name}
                title="Discover Your Personality Trait"
                styleClass={
                  !name
                    ? "bg-gray-500 w-full"
                    : "bg-blue-500 w-full hover:bg-blue-700"
                }
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
