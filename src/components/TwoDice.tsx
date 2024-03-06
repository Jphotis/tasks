import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1Val, setDie1Val] = useState<number>(0);
    const [die2Val, setDie2Val] = useState<number>(1);
    function rollDice() {
        setDie1Val(d6());
        //setDie2Val(d6());
    }
    function rollDice2() {
        setDie2Val(d6());
        //setDie2Val(d6());
    }
    return (
        <div>
            <span data-testid="left-die"> {die1Val}</span>
            <span data-testid="right-die"> {die2Val}</span>
            <Button onClick={rollDice}> Roll Left</Button>
            <Button onClick={rollDice2}> Roll Right </Button>
            {die1Val == die2Val && (die1Val != 1 ? "Win" : "Lose")}
        </div>
    );
}
