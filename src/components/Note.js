import React from 'react';
import styled from 'styled-components';
import { FaStar, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { useState } from 'react';
const Note = ({ id, text, color, month, day, year}) => {
  const { favourites, addToFavourites, deleteNote } = useGlobalContext();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const [openAll, setOpenAll] = useState(false);
    return <NoteStyled background={color}>
      <i className={`favourites-icon ${favourites.find(item => item.id == id) ? 'infavourites' : null}`} onClick={() => { addToFavourites(id) }}><FaStar /></i>
      {text.length > 200 ? <p>{openAll ? text : text.substring(0, 200)} <p className='toggle-note' onClick={()=>{setOpenAll(!openAll)}}>{openAll ? 'See Less': 'Read More ...'}</p></p> : <p>{text}</p>}
      <h6>{months[month]} {day}, {year}</h6>
      <i className="trash-icon" onClick={() => deleteNote(id)}><FaTrash /></i>
    </NoteStyled>

}

const NoteStyled = styled.article`
  padding: 3rem 2rem 2.5rem;
  border-radius: 1.6rem;
  background-color: ${({ background }) => background};
  min-height: 20rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  word-wrap: break-word;
  min-width: 100%;
  max-width: 100%;
  margin: 0 auto;
  p{
    font-size: 1.4rem;
    display: inline-block;
  }
  .toggle-note{
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
  h6{
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .favourites-icon, .trash-icon{
    position: absolute;
    right: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
    background-color: black;
    border-radius: 50%;
    font-size: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .favourites-icon{
    top: 2rem;
    color: white;
    &.infavourites{
      color: gold !important;
    }
  }
  .trash-icon{
    bottom: 2rem;
    color: crimson;
  }
  
`

export default Note