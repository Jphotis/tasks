import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*
           <div>
                {colors.map((newColor: string) => (
                    <Form.Check
                        key={newColor}
                        inline
                        type="radio"
                        name="emotions"
                        onChange={updateColor}
                        id="emotion-check-red"
                        label="Red"
                        value="red"
                        checked={color === newColor}
                    />
                ))}
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-red"
                    label="Red"
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-green"
                    label="Green"
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-blue"
                    label="Blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-orange"
                    label="Orange"
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-yellow"
                    label="Yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-purple"
                    label="Purple"
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-black"
                    label="Black"
                    value="black"
                    checked={color === "black"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    id="emotion-check-white"
                    label="White"
                    value="white"
                    checked={color === "white"}
                />

                <div>You have chosen {color}</div>
            </div>
        </div>
*/
export function ChangeColor(): JSX.Element {
    const [colors] = useState<string[]>([
        "red",
        "green",
        "blue",
        "orange",
        "yellow",
        "purple",
        "black",
        "white"
    ]);
    const [color, setColor] = useState<string>(colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Change Color</h3>
            </div>
            <div>
                {colors.map((newColor: string) => (
                    <Form.Check
                        key={newColor}
                        inline
                        type="radio"
                        name="emotions"
                        onChange={updateColor}
                        id={`color-check-${newColor}`}
                        label={`${(
                            <div>
                                <span style={{ backgroundColor: newColor }}>
                                    {newColor}
                                </span>
                            </div>
                        )}`}
                        value={`${newColor}`}
                        checked={color === newColor}
                    />
                ))}
            </div>
            <div>
                {"You have chosen "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid={"colored-box"}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
