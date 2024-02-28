"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import cn from "classnames";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col justify-center max-w-[560px] m-auto">
      <h1 className="text-3xl font-semibold"> Personality Test App </h1>
      <br />

      <p className="text-gray-600">
        Discover your true self with our Personality Checker app. Unveil your
        unique traits and strengths effortlessly. Gain valuable insights for
        personal growth and development.
        <br />
        <br />
        Start now for a journey of self-discovery!
      </p>

      <div>
        <form className="mt-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-semibold text-gray-900"
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
        <button
          onClick={() =>
            router.push(`/questions/ac8a1e71-03e3-48c2-80e4-3d3660e0e5f5`)
          }
          disabled={!name}
          className={cn(
            "bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-full px-12 rounded-full",
            !name && "bg-gray-500"
          )}
        >
          Discover Your Personality Trait
        </button>
      </div>
    </main>
  );
}
