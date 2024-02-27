/* eslint-disable indent */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (que: Question): boolean => que.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (que: Question): boolean =>
            que.body !== "" || que.expected !== "" || que.options.length !== 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const val = questions.find((que: Question): boolean => que.id === id);
    return val ? val : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((que: Question): boolean => que.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((que: Question): string => que.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (sum: number, que: Question): number => sum + que.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return sumPoints(
        questions.filter((que: Question): boolean => que.published)
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published\n";
    const csv = questions
        .map(
            (que: Question): string =>
                `${que.id},${que.name},${que.options.length},${que.points},${que.published}`
        )
        .join("\n");
    return header + csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = questions.map(
        (que: Question): Answer => ({
            questionId: que.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pubQ = questions.map(
        (que: Question): Question => ({
            ...que,
            id: que.id, // How to copy values that do not need to be deepcopied
            name: que.name,
            body: que.body,
            type: que.type,
            expected: que.expected,
            points: que.points,
            options: [...que.options],
            published: true
        })
    );
    return pubQ;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const typeQ: Question[] = questions.filter(
        (que: Question): boolean => que.type === "multiple_choice_question"
    );
    return typeQ.length === questions.length || typeQ.length === 0;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const mapQ: Question[] = questions.map(
        (que: Question): Question => ({
            ...que,
            id: que.id, // How to copy values that do not need to be deepcopied
            name: que.name,
            body: que.body,
            type: que.type,
            expected: que.expected,
            points: que.points,
            options: [...que.options],
            published: que.published
        })
    );
    const emptQ = [...mapQ, makeBlankQuestion(id, name, type)];

    return emptQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQ: Question[] = questions.map(
        (que: Question): Question => ({
            ...que,
            id: que.id,
            name: que.id === targetId ? newName : que.name,
            body: que.body,
            type: que.type,
            expected: que.expected,
            points: que.points,
            options: [...que.options],
            published: que.published
        })
    );
    return newQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQ: Question[] = questions.map(
        (que: Question): Question => ({
            ...que,
            id: que.id,
            name: que.name,
            body: que.body,
            type: que.id === targetId ? newQuestionType : que.type,
            expected: que.expected,
            points: que.points,
            options:
                que.id === targetId &&
                newQuestionType !== "multiple_choice_question"
                    ? []
                    : [...que.options],
            published: que.published
        })
    );
    return newQ;
}

/**
 * Deep Copies the whole quesiton object
 */
export function deepCopyQuestion(que: Question): Question {
    const deepCopy: Question = {
        ...que,
        id: que.id,
        name: que.name,
        body: que.body,
        type: que.type,
        expected: que.expected,
        points: que.points,
        options: [...que.options],
        published: que.published
    };
    return deepCopy;
}
/**
 * Replaces an option within an option list depending on the replacement ID. Used for the editOption() function.
 */
export function replaceOption(
    optionList: string[],
    newOption: string,
    optId: number
): string[] {
    const newOptions: string[] = optionList.map((opt: string): string => opt);
    optId !== -1
        ? newOptions.splice(optId, 1, newOption)
        : newOptions.splice(newOptions.length, 0, newOption);
    return newOptions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    /*
    const target: Question = questions.find(
        (que: Question): boolean => que.id === targetId
    );
    const ind: number =
        targetOptionIndex === -1 ? target.options.length : targetOptionIndex;
    const newOpt: string[] = [...target.options];
*/
    const finalQs: Question[] = questions.map(
        (que: Question): Question => ({
            ...que,
            id: que.id,
            name: que.name,
            body: que.body,
            type: que.type,
            expected: que.expected,
            points: que.points,
            options:
                que.id === targetId
                    ? replaceOption(
                          [...que.options],
                          newOption,
                          targetOptionIndex
                      )
                    : [...que.options],
            published: que.published
        })
    );
    return finalQs;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const currQuestion: Question[] = questions.filter(
        (que: Question): boolean => que.id === targetId
    );
    const ind: number = questions.findIndex(
        (que: Question): boolean => que.id === targetId
    );
    const dupQuestion: Question = {
        ...currQuestion[0],
        options: [...currQuestion[0].options]
    };
    const newQuestion: Question = duplicateQuestion(newId, dupQuestion);
    const finalQs: Question[] = questions.map(
        (que: Question): Question => ({
            ...que,
            id: que.id,
            name: que.name,
            body: que.body, // These are fine
            type: que.type,
            expected: que.expected,
            points: que.points,
            options: [...que.options], // This is needed
            published: que.published
        })
    );
    finalQs.splice(ind + 1, 0, {
        ...newQuestion,
        id: newQuestion.id,
        name: newQuestion.name,
        body: newQuestion.body, // These are fine
        type: newQuestion.type,
        expected: newQuestion.expected,
        points: newQuestion.points,
        options: [...newQuestion.options], // This is needed
        published: newQuestion.published
    });
    return finalQs;
}
