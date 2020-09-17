import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalContextProvider = (props) => {
    const [isModalOpen, setModalOpen] = useState(false)

    const toggleModal = () => setModalOpen(!isModalOpen)

    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider