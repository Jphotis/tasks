import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [name, setName] = useState<string>("");
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Correct Answer is {expectedAnswer}:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
                <Form.Text className="WhatIsThis">
                    Correct Ansswer is {expectedAnswer}. Your answer:{" "}
                    {name == expectedAnswer ? "✔️" : "❌"}
                </Form.Text>
            </Form.Group>
            <div></div>
            {
                //<h3>Check Answer</h3>
            }
        </div>
    );
}
