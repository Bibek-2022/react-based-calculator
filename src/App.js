import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import { Title } from "./components/Title";

const operators = ["+", "-", "*", "/"];

const App = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  // const [str, setString] = useState("");

  const handleOnClick = (val) => {
    if (operators.includes(val) || val === "=") {
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;
      const firstNumberSet = textToDisplay.substring(0, lastOperatorIndex);
      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);
      const str = firstNumberSet + parseFloat(lastNumberSet); // octal case

      if (val === "=") {
        return onTotal(str);
      }
      setTextToDisplay(str + val);
      setLastOperator(val);
      return;
    }
    // handle DOT

    // if (operators.includes(val)) {
    //   setString = "";
    // }
    // setString(str + val);
    // console.log(str);
    // if (operators.includes(val) && str[0] === "0") {
    //   const lastOperatorIndex = lastOperator
    //     ? textToDisplay.lastIndexOf(lastOperator) + 1
    //     : 0;
    //   const lastNumberSet = textToDisplay.slice(lastOperatorIndex);

    //   setTextToDisplay(Number(lastNumberSet));

    //   setString("");
    // }

    // if (operators.includes(val)) {
    //   setLastOperator(val);
    // }

    // get last operator or 0
    if (val === ".") {
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;
      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);

      if (lastNumberSet.includes(".")) {
        return;
      }
    }

    //
    // if (val === ".") {
    //   if (lastOperator) {
    //     const lastOperatorIndex = textToDisplay.lastIndexOf(lastOperator);
    //     const lastNumberSet = textToDisplay.slice(lastOperatorIndex + 1);
    //     if (lastNumberSet.includes(".")) {
    //       return;
    //     }
    //   } else {
    //     if (textToDisplay.includes(".")) {
    //       return;
    //     }
    //   }
    // }
    if (val === ".") {
    }

    if (val === "=") {
      return onTotal();
    }
    if (val === "AC") {
      return setTextToDisplay("");
    }
    if (val === "C") {
      const str = textToDisplay.slice(0, -1);
      return setTextToDisplay(str);
    }

    if (operators.includes(val)) {
      const lastChar = textToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        const str = textToDisplay.slice(0, -1) + val;
        return setTextToDisplay(str);
      }
    }

    setTextToDisplay(textToDisplay + val);
  };

  const onTotal = (str) => {
    // let str = textToDisplay;
    const lastChar = str.slice(-1);
    // if (operators.includes(lastChar)) {
    //   str = str.slice(0, -1);
    // }
    // const split1 = str.split("");
    // let a = [];
    // let z = "";
    // let str2 = split1.map((x) => {
    //   if (!operators.includes(x)) {
    //     a.push(x);
    //   } else {
    //     z = z + Number(a.join("")) + x;
    //     a = [];
    //   }
    // });
    // console.log(z);

    const ttl = eval(str);
    setTextToDisplay(ttl.toString());
  };

  return (
    <div className="wrapper">
      {/* Title */}
      <Title />
      <div className="mainParent">
        <Display textToDisplay={textToDisplay} />
        <Button click={handleOnClick} />
      </div>
    </div>
  );
};

export default App;
