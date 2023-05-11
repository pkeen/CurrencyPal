import React, {useState, useRef} from 'react';
import style from './SimpleTwoButtonHighlightState.module.css'


export default function SimpleTwoButtonHighlightState() {

    const [selected, setSelected] = useState(null)

    function handleFocus() {
        setSelected(true)
    }

    function handleBlur() {
        setSelected(false)
    }

    return (
        <div onFocus={handleFocus} onBlur={handleBlur}>
            <input id={1} name={1} type='text' className={selected && style['selected']}></input>
            <input id={2} name={2} type='text' className={selected && style['selected']}></input>
        </div>
    )
}