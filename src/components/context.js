import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const AppContext = React.createContext();

const getNotes = ()=> localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
const getFavourites = ()=> localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [];
const AppProvider = ({ children }) => {
    const [notes, setNotes] = useState(getNotes());
    const [color, setColor] = useState('');
    const [isColorOpen, setisColorOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState('');
    const [favourites, setFavourites] = useState(getFavourites());

    const openModal = (color) => {
        setColor(color);
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
        setCurrentNote('');
    }
    const toggleColorsContainer = () => {
        setisColorOpen(!isColorOpen);
    }
    const handleCurrentNoteChange = (e) => {
        setCurrentNote(e.target.value);
    }
    const addNote = ()=>{
        const newNote = {id: new Date().getTime(), text: currentNote, color: color, month: new Date().getMonth(), day: new Date().getDate(), year: new Date().getFullYear()};
        setNotes([...notes, newNote]);
        setColor('');
        setCurrentNote('');
    }
    const addToFavourites = (id)=>{
        const inFavourites = favourites.find(item=> item.id == id);
        const note = notes.find(item=> item.id == id);
        if(inFavourites){
            setFavourites(favourites.filter(item => item.id != id));
        }else{
            setFavourites([...favourites, note]);
        }
    }
    const deleteNote = (id)=>{
        setFavourites([...favourites].filter(item=> item.id != id));
        setNotes([...notes].filter(item=> item.id != id));
    }
    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('favourites', JSON.stringify(favourites));
    },[notes, favourites])
    return <AppContext.Provider value={{ openModal, closeModal, modalOpen, isColorOpen, handleCurrentNoteChange, toggleColorsContainer, currentNote, notes, color, addNote, favourites, addToFavourites, deleteNote }}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider }