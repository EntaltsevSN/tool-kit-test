import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  function clearToken() {
    localStorage.removeItem('token');
    navigate(0)
  }
  
  return <footer className="footer">
    <p>Проект разработан как тестовое задание для компании Tool-kit!</p>
    <a onClick={clearToken}>Ввести новый токен</a>
  </footer>
};

export default Footer;