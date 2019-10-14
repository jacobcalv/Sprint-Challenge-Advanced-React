import React, {useState} from 'react'
import styled from 'styled-components'


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
    const Input = styled.input`
        width: 10%;
        margin-left: 45%;
    `
    const FavoritePlayer = styled.h2`
        text-align: center;
    `
    return(
    <>
    <form>
        <Input placeholder='type favorite player here' onSubmit={e=> e.preventDefault()} onChange={e => setMyFavorite(e.target.value)}>

        </Input>

    </form>
    <FavoritePlayer>My Favorite Player is: {localStorage.getItem('favoritePlayer')}</FavoritePlayer>
    </>
)}

export default FavoritePlayer