import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useGlobalContext } from './context';
import {BsStarFill} from 'react-icons/bs'
import Note from './Note';
const NotesContainer = () => {
  const { notes } = useGlobalContext();
  return <Container>
    <div className="title">
      <h1>NOTES</h1>
      <Link to='/favourites' className="favourites-container">
        <i><BsStarFill /></i>
        <p>Favourites</p>
      </Link>
    </div>
    <div className="notes-container">
      {
        notes.map(note => {
          return <Note key={note.id} {...note} />
        })
      }
    </div>
  </Container>
}


const Container = styled.section`
    margin-left: 10rem;
    height: 100vh;
    padding: 5rem 2rem;
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      .favourites-container{
        padding: 1rem 2rem;
        background-color: lightgray;
        color: black;
        font-size: 1.5rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap:1rem;
        border-radius: 3rem;
        i{
          font-size: 1.8rem;
          color: gold;
        }
      }
      h1{
        font-size: 4rem;
        font-family: cursive;
      }
    }
    .notes-container{
      margin-top: 6rem;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 3rem;
      justify-content: space-between;
    }
    @media screen and (max-width: 700px){
      margin-left: 7rem;
      .notes-container{
        padding: 5rem 1rem;
        grid-template-columns: repeat(2, 1fr);
      }
      .title{
        width: 100%;
        gap: 0rem;
        h1{
          font-size: 2rem;
        }
      }
    }
    @media screen and (max-width: 500px){
      .notes-container{
        grid-template-columns: repeat(1, 1fr);
      }
    }
    @media screen and (min-width: 2000px){
      .notes-container{
        grid-template-columns: repeat(4, 1fr);
      }
    }
`

export default NotesContainer