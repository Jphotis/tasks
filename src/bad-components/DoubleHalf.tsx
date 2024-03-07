import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ChangeValue {
    setDhValue: (value: number) => void;
    x: number;
}

// 3 functions are components because they return JSX components
function Doubler({ setDhValue, x }: ChangeValue): JSX.Element {
    return <Button onClick={() => setDhValue(2 * x)}>Double</Button>;
}

function Halver({ setDhValue, x }: ChangeValue): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * x)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} x={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} x={dhValue}></Halver>
        </div>
    );
}
