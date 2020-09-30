import React, { useContext, useState } from 'react'
import { ListContext } from '../Context/ListContext'
import ListItem from './ListItem'

export default function Body() {
const {list, setList} = useContext(ListContext)
const [input, setInput] = useState()
    
    return (
        <div>
            <h1>
                List of Todos:
            </h1>
            {
                list.map((value, index) => {
                    return (
                        <ListItem checked = {value.checked} data={value.checked}
                        id={index}
                        key={index}
                        ></ListItem>
                    )
                })
            }
            <div className='from'>
                <label>Add List Item</label>
                <textarea onChange={(e) => {
                    setInput(e.target.value)
                }} value={input} />

                <button onClick={() => {
                    const newList = [...list]
                    newList.push({data: input, checked: false})
                    console.log('list', typeof(newList[0].data), newList)

                    setList(newList)
                    setInput('')

                }}> Add!</button>
            
            </div>
        </div>
        
    )
}
