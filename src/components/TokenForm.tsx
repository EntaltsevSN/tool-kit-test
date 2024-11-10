import { useNavigate } from "react-router-dom";

const TokenForm = () => {
  const navigate = useNavigate()

  function submitTokenToLocalStorage(e) {
    e.preventDefault();

    localStorage.setItem('token', e.target[0].value);
    navigate(0)
  }

  return <form className="token-form" onSubmit={(e) => submitTokenToLocalStorage(e)}>
    <label className="token-form__label">Введите токен для работы с Github</label>
    <input type="text" className="token-form__input" placeholder="Начинается с ghp_" />
    <button className="token-form__button" type="submit">Сохранить</button>
  </form>
}

export default TokenForm;