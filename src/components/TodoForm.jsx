import {useState} from 'react'

function TodoForm ( {onInsert} ) {
    const [text, setText] = useState()
    const onCustomSubmit = (e) => {
        e.preventDefault() //새로고침방지
        onInsert(text)
    }
    const onCustomChange = (e) => {
        setText(e.target.value)
    }


    return ( 
        <>
            {/* input,button태그 */}
            <from onSubmit = {onCustomSubmit}>
                <input type = "text" onChange = {onCustomChange} />
                <button type = "submit">입력</button>
            </from>
        </> 
    );
}

export default TodoForm