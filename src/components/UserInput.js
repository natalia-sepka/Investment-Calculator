
export default function UserInput({ onChange, userInputValue }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInputValue.initialInvestment}
                        onChange={(event) =>
                            onChange("initialInvestment", event.target.value)
                        }
                    ></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInputValue.annualInvestment}
                        onChange={(event) =>
                            onChange("annualInvestment", event.target.value)
                        }
                    ></input>
                </p>
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInputValue.expectedReturn}
                        onChange={(event) =>
                            onChange("expectedReturn", event.target.value)
                        }
                    ></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInputValue.duration}
                        onChange={(event) => onChange("duration", event.target.value)}
                    ></input>
                </p>
            </div>
        </section>
    );
}
