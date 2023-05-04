import React from "react";
import Answer from "./Answer";

const Question = (props) => {
    const { questionKey, question, options, selectedAnswer, handleChange } = props;
    return (
        <div>
            <h3>{question}</h3>
            <ul>
                {options.map((option) => (
                    <Answer
                        questionKey={questionKey}
                        question={question}
                        option={option}
                        selectedAnswer={selectedAnswer}
                        handleChange={handleChange}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Question;
