import React, { useCallback, useEffect } from 'react'

import {
    Background, ModalWrapper, Form
} from './styles';

const Modal: React.FC = (showModal, setShowModal) => {

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal)
                setShowModal(!showModal)
        },
        [showModal, setShowModal],
    )

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => {
            document.removeEventListener('keypress', keyPress)
        }
    }, [keyPress])
    return (
        <Background>
            <ModalWrapper>
                <h1>Novo Veículo</h1>
                <Form>
                    <input type="text" name="name" id="name" placeholder="Veículo"/> 
                    <input type="text" name="model" id="model" placeholder="Marca"/> 
                    <input type="number" name="year" id="year" placeholder="Veículo"/> 
                    <input type="text" name="carName" id="carName" placeholder="Veículo"/> 
                    <textarea name="description" id="description" cols={30} rows={10} placeholder="Descrição"></textarea>
                    <hr />
                    <footer>
                        <button>Cadastrar</button>
                        <button>Cancelar</button>
                    </footer>
                </Form>
            </ModalWrapper>
        </Background>
    )
}

export default Modal