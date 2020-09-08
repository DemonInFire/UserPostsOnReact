import React, {createContext, useState} from 'react'

export const CurrentPostContext = createContext()

const CurrentPostContextProvider = (props) => {
    const [state, setState] = useState({
        title:'Title',
        content:'Content',
    })

    const postInformation = (title, content) => {
        setState({
            title,
            content
        })
    }

    return (
        <CurrentPostContext.Provider value={{ state, postInformation }}>
            {props.children}
        </CurrentPostContext.Provider>
    )
}

export default CurrentPostContextProvider