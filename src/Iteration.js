import React, { useState } from "react";
import { render } from "@testing-library/react";

const Iteration = () => {
    const [names, setNames] = useState([
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
        { id: 4, text: "d" },
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = (e) => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText("");
    };
    const onRemove = (id) => {
        const nextName = names.filter((name) => name.id !== id);
        setNames(nextName);
    };

    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default Iteration;
