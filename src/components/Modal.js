import React, { useReducer } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from './context';
const Modal = () => {
    const {modalOpen, closeModal, currentNote, handleCurrentNoteChange, addNote} = useGlobalContext();

    return modalOpen && <ModalContainer>
        <div className="modal">
            <h1>Input Note</h1>
            <textarea value={currentNote} onChange={handleCurrentNoteChange}></textarea>
            <div className="btn-container">
                <button onClick={() => { closeModal(); addNote() }}>ADD NOTE</button>
                <button className='close-btn' onClick={closeModal}>Close</button>
            </div>
        </div>
    </ModalContainer>
}


const ModalContainer = styled.article`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    z-index: 200;
    display: grid;
    place-items: center;
    .modal{
        width: 90vw;
        max-width: 500px;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.4rem;
        padding: 2rem;
        h1{
            text-align: center;
            font-size: 3rem;
            margin-bottom:2rem;
            font-family: cursive;
        }
        textarea{
            min-width: 100%;
            max-width: 100%;
            min-height: 20rem;
            max-height: 20rem;
            padding: 1.5rem;
        }
        .btn-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            button{
            margin-top: 3rem;
            padding: 1rem 4rem;
            font-size: 1.6rem;
            }
        }
    }
`

export default Modal