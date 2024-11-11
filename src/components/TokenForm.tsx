import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TokenForm = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  function submitTokenToLocalStorage() {
    localStorage.setItem('token', token);
    navigate(0);
  }

  function isDisabled() {
    return !token.startsWith('ghp_') || token.length !== 40;
  }

  return <form className="token-form" >
    <label className="token-form__label">Введите токен для работы с Github</label>
    <input 
      type="text" 
      className="token-form__input" 
      placeholder="Начинается с ghp_" 
      value={token} 
      onChange={e => setToken(e.target.value)}
    />
    <button 
      className="token-form__button" 
      type="button" 
      onClick={submitTokenToLocalStorage} 
      disabled={isDisabled()}
    >Сохранить</button>
  </form>
}

export default TokenForm;