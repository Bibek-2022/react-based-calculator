import React from "react";

const btns = [
  {
    level: "AC",
    clsName: "clear",
  },
  {
    level: "C",
    clsName: "clean",
  },
  {
    level: "/",
    clsName: "divide",
  },
  {
    level: "*",
    clsName: "multi",
  },
  {
    level: "+",
    clsName: "plus",
  },
  {
    level: "-",
    clsName: "minus",
  },
  {
    level: "7",
    clsName: "no-7",
  },
  {
    level: "8",
    clsName: "no-8",
  },
  {
    level: "9",
    clsName: "no-9",
  },
  {
    level: "4",
    clsName: "no-4",
  },
  {
    level: "5",
    clsName: "no-5",
  },
  {
    level: "6",
    clsName: "no-6",
  },
  {
    level: "1",
    clsName: "no-1",
  },
  {
    level: "2",
    clsName: "no-2",
  },
  {
    level: "3",
    clsName: "no-3",
  },
  {
    level: "0",
    clsName: "no-0",
  },
  {
    level: ".",
    clsName: "no-dot",
  },
  {
    level: "=",
    clsName: "no-ans",
  },
];
export const Button = () => {
  return (
    <div class="items">
      {btns.map((btn, i) => {
        return <button className={btn.clsName}>{btn.level}</button>;
      })}

      {/* <button class="clean">C</button>
      <button class="divide">/</button>
      <button class="multi">*</button>
      <button class="plus">+</button>
      <button class="minus">-</button>
      <button class="no-7">7</button>
      <button class="no-8">8</button>
      <button class="no-9">9</button>
      <button class="no-4">4</button>
      <button class="no-5">5</button>
      <button class="no-6">6</button>
      <button class="no-1">1</button>
      <button class="no-2">2</button>
      <button class="no-3">3</button>
      <button class="no-0">0</button>
      <button class="no-dot">.</button>
      <button class="no-ans">=</button> */}
    </div>
  );
};
