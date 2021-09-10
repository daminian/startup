import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="*" className="header__logo" />
        <h3 className="header__title">Название</h3>
        <p className="header__subtitle">И какой нибудь логунг</p>
        <menu className="header__menu">
          <a className="header__link">главаная</a>
          <a className="header__link">портфолио</a>
          <a className="header__link">о нас</a>
          <a className="header__link">география</a>
          <a className="header__link">контакты</a>
        </menu>
        <div className="header__contact">
          <img src="" className="header__img"/>
          8(902)272-93-14
        </div>
      </header>
      <section className="description">
        <h1 className="description__title">Услуги по строитеству и ремонту железнодорожных путей</h1>
        <p className="description__subtitle">Компания проводит строительные и ремонтные работы на территории более чем 20 субъектов Российской Федерации</p>
        <form className="form form_description">
          <div className="form__container">
            <p className="form__title">Оставьте заявку на бесплатную консультацию</p>
            <div className="form__input-container">
              <label htmlFor="name" className="form__label">Имя</label>
              <input type="text" name="name"/>
            </div>
            <div className="form__input-container">
              <label htmlFor="tel" className="form__label">Телефон</label>
              <input type="tel" name="tel"/>
            </div>
            <div className="form__input-container">
              <label htmlFor="email" className="form__label">Почта</label>
              <input type="email" name="email"/>
            </div>
            <button type="submit" className="form__button">отправить</button>
          </div>
        </form>
      </section>
      <section className="geography">
        <h2 className="geography__title">География работ</h2>
        <p className="geography__subtitle">ООО «Компания» реализует проекты на всей территории Российской Федерации.</p>
        <p className="geography__text">Компания проводит строительные и ремонтные работы на территории более чем 20 субъектов Российской Федерации,
          постоянно расширяя географию присутствия на всю территорию страны. Работа компании ведется как в крупных городах областного значения, так и в небольших
          населенных пунктах. Заказчиками могут быть региональные или федеральные компании, крупные компании из разных сфер деятельности,заинтересованные в осуществлении
          транспортных проектов.
        </p>
        <img src="1" className="geography__image" />
      </section>
      <section className="portfolio">
        <div>SLIDER</div>
      </section>
      <section className="advantages">
        <h3 className="advantages__title">Преимущества работы с нами</h3>
        <div className="advantages__grid">
          <div className="card">
            <img className="card__image"/>
            <h4 className="card__title"></h4>
            <p className="card__text"></p>
          </div>
        </div>
      </section>
      <section className="about">
        <h3 className="about__title">Компания ООО”Название”</h3>
        <p className="about__text">Оказывает широкий спектр услуг по строительству и ремонту железнодорожных путей,
          Ремонт железнодорожных тупиков, стрелочных переводов, переездов. Опытные сотрудники, наличие необходимого оборудования
          позволяет в кратчайшие сроки выполнить работы любой сложности качественно и в кратчайшие сроки. Гибкая ценовая политика,
          наличие СРО. Подбор материалов от новых до Б/У от партнёров.
        </p>
        <div className="about__container">
          <img className="about__image"/>
          <img className="about__image"/>
        </div>
        <img className="about__photo"/>
      </section>
      <section className="contacts">
        <h3 className="contacts__title">Контакты</h3>
        <p className="contacts__name">Телефон</p>
        <p className="contacts__contact_name">8(902)272-93-14</p>
        <form className="form form_contacts">
          <div className="form__container">
            <p className="form__title">Оставьте заявку на бесплатную консультацию</p>
            <div className="form__input-container">
              <label htmlFor="name" className="form__label">Имя</label>
              <input type="text" name="name"/>
            </div>
            <div className="form__input-container">
              <label htmlFor="tel" className="form__label">Телефон</label>
              <input type="tel" name="tel"/>
            </div>
            <div className="form__input-container">
              <label htmlFor="email" className="form__label">Почта</label>
              <input type="email" name="email"/>
            </div>
            <button type="submit" className="form__button">отправить</button>
          </div>
        </form>
      </section>
      <footer className="footer">
        <p className="footer__copyrights">Все права защищены</p>
        <a className="footer__develop"><img className="footer__logo" /> Разработка сайта - студия “ТвойСтартап”</a>
      </footer>
    </div>
  );
}

export default App;
