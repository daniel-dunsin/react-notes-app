import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import { FaHeart, FaChevronLeft } from 'react-icons/fa';
import Note from './Note';
const Favourites = () => {
    const { favourites } = useGlobalContext();
    return <Container>
      <Link to='/' className="back-to-home-icon">
        <FaChevronLeft />
      </Link>
        <div className="title">
            <h1>Favourite DNOTES</h1>
            <i><FaHeart /></i>
        </div>

        <div className="favourites-container">
            {
                favourites.map(favouriteNote => <Note key={favouriteNote.id} {...favouriteNote} />)
            }
        </div>
    </Container>
}

const Container = styled.main`
    padding: 5rem 2rem;
    .back-to-home-icon{
      position: fixed;
      left: 2rem;
      top: 3rem;
      color: black;
      font-size: 2.5rem;
    }
    .title{
        margin-top: 3rem;
        margin-bottom: 4rem;
       h1{
            font-size: 4rem;
            font-family: cursive;
            text-transform: uppercase;
            display: inline-block;
            margin-right: 1.5rem;
       }
       i{
            font-size: 3rem;
            color:red;
       }
    }
    .favourites-container{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 3rem;
        justify-content: space-between;
        
    }
    @media screen and (max-width: 700px){
      .favourites-container{
        grid-template-columns: repeat(2, 1fr);
      }
      .title{
        h1{
          font-size: 2rem;
        }
      }
    }
    @media screen and (max-width: 500px){
      .favourites-container{
        grid-template-columns: repeat(1, 1fr);
      }
    }
    @media screen and (min-width: 2000px){
      .favourites-container{
        grid-template-columns: repeat(4, 1fr);
      }
    }
`

export default Favourites