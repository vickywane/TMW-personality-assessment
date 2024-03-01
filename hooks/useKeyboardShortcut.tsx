import { SUPPORTED_ALPHA_KEYS } from "@/mock/data";
import { useKeyBoardShortcutProps } from "@/utils/types";
import React from "react";

export const useKeyBoardShortcut = ({
  callback,
  actionKey,
}: useKeyBoardShortcutProps) => {
  React.useEffect(() => {
    const eventListener = (event: any) => {
      let isRecognizedKey = false;
      let keyMatch = actionKey;

      if (!keyMatch) {
        keyMatch = SUPPORTED_ALPHA_KEYS.find(
          ({ key }) => key.toLowerCase() === event.key
        );
      }

      if (!keyMatch) return;

      if ("key" in event) {
        isRecognizedKey =
          event.key.toLocaleLowerCase() === keyMatch.key.toLocaleLowerCase() ||
          event.key.toLocaleLowerCase() === keyMatch.keyName;
      } else {
        isRecognizedKey = event.keyCode === keyMatch.keyCode;
      }

      if (isRecognizedKey) {
        callback(keyMatch?.key);
      }
    };

    document.addEventListener("keydown", eventListener);
    return () => {
      document.removeEventListener("keydown", eventListener);
    };
  });
};
