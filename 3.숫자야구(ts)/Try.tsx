import React, { memo } from "react";
import { FunctionComponent } from "react";
import { TryInfo } from "./types";

// const Try = memo(({ tryInfo }: { tryInfo: TryInfo }) => {
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div>{tryInfo.result}</div>
//     </li>
//   );
// });

// props 타입정의하는 방법
const Try: FunctionComponent<{ tryInfo: TryInfo }> = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

Try.displayName = "Try";
export default Try;
