import { Link } from "gatsby"
import React from "react"
import insta from "../images/footer/insta.png"
import twitter from "../images/footer/twitter.png"
import vk from "../images/footer/vk.png"
import hero from "../images/hero/hero12.png"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer_content maxWidth1200px">
          <div className="footer_content__top footer_block">
            <img src={hero} alt="logo icon"/>
          </div>
          <div className="footer_block footer_nav">
            <Link to="/">Главная</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/articles">Статьи</Link>
            <Link to="/reports">Отчёты</Link>
            <Link to="/reviews">Отзывы</Link>
          </div>
          <div className="footer_content__center footer_block">
            {/* <div className="text_inline">
              <p>
                Позвоните нам для бесплатной консультации:
              </p>
              <a href="tel:+71112223344"> +7(111) 222-33-44</a>
            </div>
            <div className="text_inline">
              <p>
                ИЛИ
              </p>
            </div> */}
            <div className="text_column">
              <p>Напишите нам:</p> 
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/?text=Здесь%20будет%20текст!">+7(111) 222-33-44 </a><p className="desktop_only"> | </p>
              < a target="_blank" rel="noopener noreferrer" href="tg://msg_url?url=http%3A%2F%2Fsomesite.com&amp;text=Здесь%20будет%20текст!">@psychoYKT</a><p className="desktop_only"> | </p>
              <a href="mailto:psychoYKT@gmail.com" rel="noopener noreferrer">psychoYKT@gmail.com</a>
          
            </div>
          </div>
          <p className="footer_block">
            ИП Иванова И.И. ИНН 1435313131313 ОГРН 3131435131311313001
          </p>
          <div className="footer_content__bottom footer_block">
            <a><img src={insta} alt="insagram icon"/></a>
            <a><img src={twitter} alt="twitter icon" /></a>
            <a><img src={vk} alt="vk icon" /></a>
          </div>
          
        </div>
      </footer>
    )
  }
}




export default Footer
