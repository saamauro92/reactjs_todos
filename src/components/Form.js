import { useState, useEffect, useRef } from "react";


const Form = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.focus()
    })

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

        <form onSubmit={handleSubmit}>

            <>
                {props.edit ? (
                    <>

                        <input type="input" value={input} onChange={onChangeInput}
                            ref={inputFocus}
                        />
                        <button type="submit" className={input ? "" : "button-disabled"} disabled={!input}>Update </button>
                    </>
                )

                    :
                    <>
                        <input type="input" value={input} onChange={onChangeInput}
                            ref={inputFocus}
                        />
                        <button type="submit" className={input ? "" : "button-disabled"} disabled={!input}>Add To do </button>
                    </>
                }

            </>
        </form>


    )
}

export default Form;