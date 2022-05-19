import { useState } from "react";


const Form = (props) => {

    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length < 1) { return; }
        props.onSubmit({ id: Math.floor(Math.random() * 100000), todo: input });

        setInput("");
    }





    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="input" value={input} onChange={onChangeInput} />
                <button type="submit" className={input ? "" : "button-disabled"} disabled={!input}>Add To do </button>
            </form>




        </>
    )
}

export default Form;