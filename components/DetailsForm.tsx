"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DetailsForm() {
const [ name, setName ] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl"> Personality Test App </h1>

      <p> Answer questions about yourself </p>

      <div>
        <form>
          <input value={name} placeholder="Your Name" />
        </form>
      </div>

      <div className="mt-12">
        <Link href={"/questions/ac8a1e71-03e3-48c2-80e4-3d3660e0e5f5"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Start Test
          </button>
        </Link>
      </div>
    </main>
  );
}
