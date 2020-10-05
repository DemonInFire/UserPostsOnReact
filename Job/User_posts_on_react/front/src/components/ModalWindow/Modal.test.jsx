import React from 'react'
import Modal from './Modal'
import { render } from '@testing-library/react'

describe('Modal component', () => {
    const props = {
        children:<div>hi</div>
    }

    it('Render Modal', () => {
        render(<Modal {...props}/>)
    })

})