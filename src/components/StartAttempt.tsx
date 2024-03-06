import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    function startQuiz() {
        setQuizInProgress(true);
        setNumAttempts(numAttempts - 1);
    }
    function stopQuiz() {
        setQuizInProgress(false);
    }
    return (
        <div>
            {" "}
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || numAttempts == 0}
            >
                {" "}
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                {" "}
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumAttempts(numAttempts + 1)}
                disabled={quizInProgress}
            >
                {" "}
                Mulligan{" "}
            </Button>
            {numAttempts}
        </div>
    );
}
