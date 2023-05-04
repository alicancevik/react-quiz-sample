import React from "react";

const Answer = (props) => {
    const { questionKey,question, option, selectedAnswer, handleChange } = props; 
    console.log("Answer Question: ",question);
    console.log("Answer key: ",questionKey);
    console.log("Selected Answer: ",selectedAnswer);
    console.log("Selected Option: ",option);
  return (
    <li>
      <label>
        <input
          type="radio"
          name={"questionkey_" + questionKey}
          value={option}
          checked={selectedAnswer === option}
          onChange={handleChange}
        />
        {option}
      </label>
    </li>
  );
};

export default Answer;