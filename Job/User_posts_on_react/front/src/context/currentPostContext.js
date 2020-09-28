import React, {createContext, useState} from 'react'

export const CurrentPostContext = createContext()

const CurrentPostContextProvider = (props) => {
    const [state, setState] = useState({})

    const postInformation = (title, body) => {
        setState({
            title,
            body
        })
    }

    return (
        <CurrentPostContext.Provider value={{ state, postInformation }}>
            {props.children}
        </CurrentPostContext.Provider>
    )
}

export default CurrentPostContextProvider