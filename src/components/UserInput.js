import { useState } from "react";

export default function UserInput({ value, onChange }) {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 100,
        expectedReturn: 10,
        duration: 10,
    });

    function handleChange(inputIndetifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIndetifier]: newValue,
            };
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            handleChange("initialInvestment", event.target.value)
                        }
                    ></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) =>
                            handleChange("annualInvestment", event.target.value)
                        }
                    ></input>
                </p>
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) =>
                            handleChange("expectedReturn", event.target.value)
                        }
                    ></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => handleChange("duration", event.target.value)}
                    ></input>
                </p>
            </div>
        </section>
    );
}
