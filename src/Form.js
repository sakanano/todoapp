import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')
    //入力値がSubmitされたとき追加する
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
    }

    // すべて削除
    const allDelete = e => {
        let check = window.confirm('すべて削除してもいいですか？？')
        if(check) {
           window.location.reload()
        } else {
            e.preventDefault()
        }
    }

    return (
        <form>
            <input 
                type='text'
                onChange={e =>{
                    setValue(e.target.value)
                }} />
            <button onClick={handleSubmit}>追加</button>
            <button onClick={allDelete}>全て消す</button>
        </form>
    )
}

export default Form