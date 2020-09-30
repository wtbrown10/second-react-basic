import React, {useState, useEffect} from 'react'

export const ListContext = React.createContext() // creates the centext that allows it to be exported to other files


export default function ListContextProvider(props) {

    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem('Todo-List')) ?? [{data: 'Sample Text', checked: false}]
    })

    useEffect(() => {
        localStorage.setItem('Todo-List', JSON.stringify(state))
    }, [state])

    return (
        <ListContext.Provider value={{list: state, setList: setState}}>
            { props.children }
        </ListContext.Provider>
       
    )
}
