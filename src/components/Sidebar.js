import React, {useReducer} from 'react'
import styled from 'styled-components';
import {BsPlus} from 'react-icons/bs';
import Color from './Color';
import { useGlobalContext } from './context';
const colors = ['#f6be6d', '#f66d6d', '#6d92f6', '#6df692', '#ad6df6']

const Sidebar = () => {
  const {isColorOpen, toggleColorsContainer} = useGlobalContext()
  
  return <SidebarContainer>
    <h1>DNOTE</h1>

    <div className="icon-container" onClick={toggleColorsContainer}>
      <i><BsPlus /></i>
    </div>
    <div className={`colors-container ${isColorOpen ? 'open-colors': null}`}>
      {
        colors.map((color, index)=> <Color key={index} background={color} />)
      }
    </div>
  </SidebarContainer>
}


const SidebarContainer = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 10rem;
    padding: 5rem 1rem;
    z-index: 100;
    border-right: 1px solid #999;
    h1{
      margin-bottom: 5rem;
      text-align:center;
      font-size: 2rem;
      font-family: cursive;
    }
    .icon-container{
      margin: 0 auto;
      width: 5rem;
      height: 5rem;
      background-color: black;
      border-radius: 50%;
      z-index: 100;
      position: relative;
      i{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
      font-size: 3rem;
      margin-top: .5rem;
      }
    }
    .colors-container{
      transform: translateY(-5rem);
      opacity: 0;
      transition: .5s;
      &.open-colors{
        transform: translateY(0rem);
        opacity: 1;
      }
    }
    @media screen and (max-width: 700px){
      width:7rem;
      padding: 5rem .75rem;
      h1{
        font-size: 1.5rem;
      }
    }
    @media screen and (max-width: 500px){
      
    }
`

export default Sidebar