import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<string>(""); // Use these to change the number of attempts
    const numAdd = parseInt(numRequest) || 0;
    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumRequest(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts == 0}
                >
                    Use
                </Button>
                <Button onClick={() => setAttempts(attempts + numAdd)}>
                    Gain
                </Button>
            </div>
            <div>Number of attempts left: {attempts}</div>
        </div>
    );
}
