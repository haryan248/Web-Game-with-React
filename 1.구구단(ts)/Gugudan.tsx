import * as React from "react";
import { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState<number>(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState<number>(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult(`정답: ${value}`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      if (input) {
        input.focus();
      }
      // input!.focus();
      // input?.focus();
    } else {
      setResult(`땡 ${value}`);
      setValue("");
      input!.focus();
    }
  };
  // 함수로 분리할 경우에는 type정의가 필요

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

export default GuGuDan;
