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
        <Results userInput={userInput} />
      </>
  );
}

export default App;
