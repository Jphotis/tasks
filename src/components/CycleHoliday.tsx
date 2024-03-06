import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Ordered by date. Alphabet order is:
// NewYears, ValentinesDay, MyBDay, July4, Christmas
// Christmas, July4, MyBDay, NewYears, ValentinesDay
type holidayList =
    | "NewYears"
    | "ValentinesDay"
    | "MyBDay"
    | "July4"
    | "Christmas";
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holidayList>("NewYears");

    function changeByDate(currHoliday: holidayList) {
        setHoliday(
            currHoliday === "NewYears"
                ? "ValentinesDay"
                : currHoliday === "ValentinesDay"
                ? "MyBDay"
                : currHoliday === "MyBDay"
                ? "July4"
                : currHoliday === "July4"
                ? "Christmas"
                : "NewYears"
        );
    }
    function changeByAlphabet(currHoliday: holidayList) {
        setHoliday(
            currHoliday === "Christmas"
                ? "July4"
                : currHoliday === "July4"
                ? "MyBDay"
                : currHoliday === "MyBDay"
                ? "NewYears"
                : currHoliday === "NewYears"
                ? "ValentinesDay"
                : "Christmas"
        );
    }
    return (
        <div>
            <Button onClick={() => changeByDate(holiday)}>
                {" "}
                Advance by Year
            </Button>
            <Button onClick={() => changeByAlphabet(holiday)}>
                {" "}
                Advance by Alphabet
            </Button>
            Holiday:{" "}
            {holiday === "NewYears"
                ? "🥳"
                : holiday === "ValentinesDay"
                ? "❤️"
                : holiday === "MyBDay"
                ? "🎂"
                : holiday === "July4"
                ? "🇺🇸"
                : "🎁"}
        </div>
    );
}
