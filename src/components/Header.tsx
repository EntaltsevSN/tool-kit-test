import { Link, useLocation } from "react-router-dom";
import Form from "./Form";

const Header = () => {
  const { pathname } = useLocation();

  return <header className="header">
    <h1 className="header__title">
      <Link to="/">Github Repository Search</Link>
    </h1>

    {
      pathname.includes('/repository')
        ? <Link to='/'>Вернуться на главную, чтобы продолжить поиск</Link>
        : localStorage.getItem('token') === null
          ? 'Поиск по репозиториям будет доступен после ввода правильного токена'
          : <Form />
    }
  </header>
};

export default Header;