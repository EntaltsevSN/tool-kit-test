import { Link } from "react-router-dom";

const Page404 = () => {
  return <div className="page404">
    <h2 className="page404__title">404</h2>
    <p className="page404__subtitle">Такой страницы тут нет. Введите запрос в поисковике или просто перейдите на <Link to="/">главную страницу</Link>.</p>
  </div>
};

export default Page404;