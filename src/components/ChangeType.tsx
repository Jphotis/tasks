import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setqType] = useState<QuestionType>("short_answer_question");
    function switchqType(): void {
        if (qType == "short_answer_question") {
            setqType("multiple_choice_question");
        } else {
            setqType("short_answer_question");
        }
    }
    return (
        <div>
            {" "}
            <Button onClick={switchqType}>Change Type</Button>
            {qType == "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
