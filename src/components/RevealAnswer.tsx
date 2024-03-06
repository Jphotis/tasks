import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [Answer, setAnswer] = useState<boolean>(false);
    function showAnswer(): void {
        setAnswer(!Answer);
    }
    return (
        <div>
            <Button onClick={showAnswer}>Reveal Answer</Button>{" "}
            {Answer && <div>42</div>}
        </div>
    );
}
