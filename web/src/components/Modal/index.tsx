import React, { useCallback, useEffect } from 'react'
import Switch from '@material-ui/core/Switch';

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
            <ModalWrapper className="container">
                <h1>Novo Veículo</h1>
                <Form>
                    <input type="text" name="name" id="name" placeholder="Veículo"/> 
                    <input type="text" name="model" id="model" placeholder="Marca"/> 
                    <input type="number" name="year" id="year" placeholder="Veículo"/> 
                    <label><Switch></Switch>Vendido</label>
                    <textarea name="description" id="description" cols={40} rows={10} placeholder="Descrição"></textarea>
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