import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);

    // This is the Control
    function updateCurrentChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>How do you feel?</Form.Label>
                    <Form.Select
                        value={currentChoice}
                        onChange={updateCurrentChoice}
                    >
                        {options.map((currOption: string) => (
                            <option value={currOption} key={currOption}>
                                {currOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {currentChoice === expectedAnswer ? "✔️" : "❌"}.
            </div>
        </div>
    );
}
