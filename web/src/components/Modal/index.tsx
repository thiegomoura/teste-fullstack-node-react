import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import api from '../../services/api';
import { Switch, FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {
    Background, ModalWrapper, Form
} from './styles';
import { useCar } from '../../contexts/CarContext';
import { orange, red } from '@material-ui/core/colors';

const Modal = () => {
    const { isAddingCar, setIsAddingCar } = useCar();
    const [carName, setCarName] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [isSold, setIsSold] = useState(false);
    const [description, setDescription] = useState('');

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && isAddingCar)
                setIsAddingCar(!isAddingCar)
        },
        [isAddingCar, setIsAddingCar],
    )

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => {
            document.removeEventListener('keypress', keyPress)
        }
    }, [keyPress])

    const OrangeSwitch = withStyles({
        switchBase: {
            color: orange[300],
            '&$checked': {
                color: orange[500],
            },
            '&$checked + $track': {
                backgroundColor: orange[500],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    async function handleSaveCar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newCar = {
            carName,
            brand,
            year,
            description,
            isSold
        }
        try {
            await api.post('/cars', newCar);
            setIsAddingCar(false);
            setCarName('');
            setBrand('');
            setYear('');
            setIsSold(false);
            setDescription('');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        isAddingCar ? (
            <Background>
                <ModalWrapper className="container">
                    <h2>Novo Veículo</h2>
                    <Form onSubmit={handleSaveCar}>
                        <input type="text" name="name" id="name" placeholder="Veículo" value={carName} onChange={e => setCarName(e.target.value)} required />
                        <input type="text" name="model" id="model" placeholder="Marca" value={brand} onChange={e => setBrand(e.target.value)} required />
                        <input type="number" name="year" id="year" placeholder="Ano de fabricação" value={year} onChange={e => setYear(e.target.value)} required />
                        <FormControlLabel
                            control={<OrangeSwitch checked={isSold} onChange={(e) => setIsSold(e.target.checked)} name="checked" />}
                            label="Está vendido?"
                        />
                        <textarea name="description" id="description" cols={40} rows={10} placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
                        <hr />
                        <footer>
                            <button type="submit">Cadastrar</button>
                            <button onClick={() => setIsAddingCar(!isAddingCar)}>Cancelar</button>
                        </footer>
                    </Form>
                </ModalWrapper>
            </Background>
        ) :
            (
                <React.Fragment />
            )
    )
}

export default Modal
