import { useState } from "react";

const Form = () => {



    const [input, setInput] = useState("");

    const handleSubmit = () => {

    }





    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="input" />
                <button type="submit">Add To do </button>
            </form>
        </>
    )
}

export default Form;