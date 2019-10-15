import React, {useState} from 'react'
import styled from 'styled-components'
import './App.css'

const UseLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
  
    const setValue = value => {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    };
  
    return [storedValue, setValue];
  };

const FavoritePlayer = ()=>  {
    const [myfavorite, setMyFavorite] = UseLocalStorage("favoritePlayer", "");

    const FavoritePlayer = styled.h2`
        text-align: center;
    `
    return(
    <>
    <FavoritePlayer>My Favorite Player is: {myfavorite}</FavoritePlayer>
    <form onSubmit={e=>e.preventDefault()}>
        <input className='input' placeholder='type favorite player here' value={myfavorite} onChange={e=> setMyFavorite(e.target.value)} >

        </input>

    </form>

    </>
)}

export default FavoritePlayer