import { useRef, useEffect } from "react";

function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = window.setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
  return savedCallback.current;
}

export default useInterval;
