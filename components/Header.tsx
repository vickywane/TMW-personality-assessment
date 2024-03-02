"use client";
import {
  TRAIT_STORAGE_KEY,
  clearStorageItem,
  getStorageItem,
} from "@/services/localStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Header() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const data = getStorageItem(TRAIT_STORAGE_KEY);

    setUsername(data?.name);
  }, []);

  const restartAssessment = () => {
    clearStorageItem(TRAIT_STORAGE_KEY);

    router.push("/");
  };

  return (
    <header className="bg-white h-[55px] flex items-center w-full">
      <nav className="flex flex-row justify-between w-full px-12">
        <div className="flex items-center">
          <Link href={"/"}>
            <p id="name">
              Trait Checker |
              <span id="username" className="text-lg font-medium ml-2">{username} </span>{" "}
              Assesment
            </p>
          </Link>
        </div>

        <div>
          <Button 
            testId="restart-assessment-btn"
            onClick={restartAssessment}
            styleClass={"bg-blue-500 hover:bg-blue-700"}
            title="Restart Assessment"
          />
        </div>
      </nav>
    </header>
  );
}
