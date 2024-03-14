import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // Control
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function setStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    // These needed to be variables
    // No braces needed for JSX, only for Typescript.
    const form: JSX.Element = (
        <div>
            <Form.Check
                type="checkbox"
                id="is-isStudent-check"
                label="isStudent Status"
                checked={isStudent}
                onChange={setStudentStatus}
            />
            <Form.Group controlId="formTextBox">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={userName} onChange={updateStudentName} />
            </Form.Group>
        </div>
    );
    const val = userName + (isStudent ? " is a student" : " is not a student");
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="is-editmode-check"
                    label="Editmode Status"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </div>
            {/*    Ternary statements are allowed in return statements, but nested ternary statements are not allowed
            According to EsLint only. It is fine anywhere else.*/}
            <div>EditMode is {editMode ? "on" : "not on"}.</div>
            <div>{editMode ? form : val}</div>
        </div>
    );
}
