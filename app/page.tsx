import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl"> Personality Test App </h1>

      <p> Answer questions about yourself </p>

      <div className="mt-12">
        <Link href={"/questions"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Start Test
          </button>
        </Link>
      </div>
    </main>
  );
}
