import { Link } from "gatsby"
import React from "react"
import heroBlack from "../images/hero/hero1.png"
import hero from "../images/hero/hero12.png"
import home from "../images/nav/image3.png"
import { useMediaQuery } from 'react-responsive'
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1051 })
  return isDesktop ? children : null
}
const Responsive = ({ children }) => {
  const isResponsive = useMediaQuery({ maxWidth: 1050 })
  return isResponsive ? children : null
}
class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      burgerMenuPos: "100%"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.state.burgerMenuPos === "100%") {
      this.setState({
        burgerMenuPos: "0"
      })
    } else {
      this.setState({
        burgerMenuPos: "100%"
      })
    }
  }
  render() {
    return (
      <header>
        <div className="header_content maxWidth1200px">
          <Responsive>
            <Link to="/" >
              <img className="header_content__img" src={heroBlack} alt="background"/>
            </Link>
          </Responsive>
          <Desktop>
            <nav>
              <ul>
                <li style={this.props.activeLinkHome}><Link to="/"><img src={home} alt="home icon"/></Link></li>
                <li style={this.props.activeLinkServices}><Link to="/services" style={this.props.activeLinkServicesText}>Услуги</Link></li>
                <li style={this.props.activeLinkArticles}><Link to="/articles" style={this.props.activeLinkArticlesText}>Статьи</Link></li>
                <li style={this.props.activeLinkReports}><Link to="/reports" style={this.props.activeLinkReportsText}>Отчёты</Link></li>
                <li style={this.props.activeLinkReviews}><Link to="/reviews" style={this.props.activeLinkReviewsText} >Отзывы</Link></li>
              </ul>
            </nav>
          </Desktop>
          <Responsive>
            <nav className="mobile_nav" style={{ left: this.state.burgerMenuPos }}>
              <img src={hero} alt="logo icon"/>
              <ul>
                <li style={this.props.activeLinkHomeMobile}><Link to="/">Главная</Link></li>
                <hr />
                <li style={this.props.activeLinkServicesMobile}><Link to="/services" style={this.props.activeLinkServicesText}>Услуги</Link></li>
                <hr />
                <li style={this.props.activeLinkArticlesMobile}><Link to="/articles" style={this.props.activeLinkArticlesText}>Статьи</Link></li>
                <hr />
                <li style={this.props.activeLinkReportsMobile}><Link to="/reports" style={this.props.activeLinkReportsText}>Отчёты</Link></li>
                <hr />
                <li style={this.props.activeLinkReviewsMobile}><Link to="/reviews" style={this.props.activeLinkReviewsText} >Отзывы</Link></li>
              </ul>
              <button className="burger_menu_close" onClick={this.handleClick}>
                {/* <hr className="hr1"/>
                <hr className="hr2"/> */}
                <p>×</p>
              </button>
            </nav>

          </Responsive>
          <Desktop>
            <div className="header_right_block">
              <p>
                Бесплатная консультация:<a href="tel:+71112223344"> +7 (111) 222-33-44</a>
              </p>
            </div>
          </Desktop>
          <Responsive>
            <button className="burger_menu" onClick={this.handleClick}>
              <hr />
              <hr />
              <hr />
            </button>
          </Responsive>

        </div>
      </header>
    )
  }
}


export default Header
