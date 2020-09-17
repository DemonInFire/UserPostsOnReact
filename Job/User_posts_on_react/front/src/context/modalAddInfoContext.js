import React, { createContext, useState } from 'react'

export const ModalAddPostContext = createContext()

const ModalAddPostContextProvider = (props) => {
    const [isAddPostModalOpen, setAddPostModalOpen] = useState(false)

    const toggleAddPostModalOpen = () => setAddPostModalOpen(!isAddPostModalOpen)

    return (
        <ModalAddPostContext.Provider value={{ isAddPostModalOpen, toggleAddPostModalOpen }}>
            {props.children}
        </ModalAddPostContext.Provider>
    )
}

export default ModalAddPostContextProvider