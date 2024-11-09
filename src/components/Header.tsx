const Header = () => {
  return <header className="header">
    <h1 className="header__title">
      <a href="/">Github Repository Search</a>
    </h1>

    <form action="" className="form">
      <label className="form__label">Найди нужный репозиторий или автора</label>
      <input className="form__input" type="search" name="" id="" placeholder="Введите ключевые слова или имя автора, начиная с @" />
      <div className="form__helper">
        Примеры запросов:
        <a>@EntaltsevSN</a>
        <a>react</a>
        <a>@facebook</a>
        <a>goodbyedpi</a>
      </div>
    </form>
  </header>
};

export default Header;