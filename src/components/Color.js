import React, {useReducer} from 'react'
import styled from 'styled-components';
import { useGlobalContext } from './context';

const Color = ({ background }) => {
    const {openModal} = useGlobalContext();
    return <ColorContainer background={background} onClick={()=>{openModal(background)}}>
    </ColorContainer>
}


const ColorContainer = styled.div`
    width: 20px;
    height: 20px;
    display: block;
    margin: 2rem auto;
    background-color: ${({ background }) => background};
    border-radius: 50%;
`

export default Color