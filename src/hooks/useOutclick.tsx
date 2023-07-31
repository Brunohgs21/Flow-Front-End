import React from "react";
import { useRef, useEffect } from "react";

export const useOutClick = (callback: () => void, parametro: 1 | 2) => {
  const ref = useRef(null);

  useEffect(() => {
    function modalOutClick(event: { target: any }) {
      const target = event.target;
      const element = ref.current;

      if (parametro == 1) {
        if (target.name != "password") {
          callback();
        }
      }
      if (parametro == 2) {
        if (target.tagName == "SECTION") {
          callback();
        }
      }
    }

    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);
  return ref;
};
