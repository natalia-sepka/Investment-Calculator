import Header from "./components/Header";
import UserInput from "./components/UserInput";
import {useState} from "react";
import Results from "./components/Results";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 100,
        expectedReturn: 10,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1 && userInput.initialInvestment > 0 &&
        userInput.annualInvestment >= 0 && userInput.expectedReturn >=0;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue, // conversion from string to number
            };
        });
    }

  return (
      <>
        <Header />
        <UserInput onChange={handleChange} userInputValue={userInput}/>
          {inputIsValid && <Results userInput={userInput} />}
          {!inputIsValid && <p className="center">Please input valid input data!</p>}
      </>
  );
}

export default App;
