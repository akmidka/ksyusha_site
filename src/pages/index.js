import React from "react"
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../components/style/ksysha.css"
import hero from "../images/hero/hero1.png"
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1051 })
  return isDesktop ? children : null
}
const Responsive = ({ children }) => {
  const isResponsive = useMediaQuery({ maxWidth: 1050 })
  return isResponsive ? children : null
}
let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: true,
  buttons: false,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        // slidesToShow: 4,
        // slidesToScroll: 4,
        // dots: true,
        // arrows: false,
      }
    },
  ]
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
    query{
      serv1: file(relativePath: {eq: "services/1.png"}) {
        childImageSharp {
            fluid(quality: 100){
                ...GatsbyImageSharpFluid
            }
        }
      }
      serv2: file(relativePath: {eq: "services/2.png"}) {
        childImageSharp {
            fluid(quality: 100){
                ...GatsbyImageSharpFluid
            }
        }
      }
      serv3: file(relativePath: {eq: "services/3.png"}) {
        childImageSharp {
            fluid(quality: 100){
                ...GatsbyImageSharpFluid
            }
        }
      }
      allContentfulReviews(sort: {fields: createdAt, order: DESC},limit: 4,filter: {node_locale: {eq: "en-US"}}){
        edges{
          node{
            name
            organisation
            pretext
            image{
              fluid(quality: 100){
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      desktopReports: allContentfulReports(sort: {fields: createdAt, order: DESC},limit: 1,filter: {node_locale: {eq: "en-US"}}){
        edges{
          node{
            photos{
              fluid(quality: 100){
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      mobileReports: allContentfulReports(sort: {fields: createdAt, order: DESC},limit: 1,filter: {node_locale: {eq: "en-US"}}){
        edges{
          node{
            photos{
              fluid(quality: 100){
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      allContentfulPost(sort: {fields: createdAt, order: DESC},limit: 4,filter: {node_locale: {eq: "en-US"}}){
        edges{
          node{
            id
            title
            subtitle
            text {
              json
            }
            image{
              fluid(quality: 100){
                ...GatsbyContentfulFluid
              }
            }
            date(formatString: "DD/MM/YYYY")
        }
      }
    }   
  }   
    `}

    render={data => (
      <Layout
        activeLinkHome={{ borderBottom: "5px solid #58AFCA" }}
        activeLinkHomeMobile={{ borderLeft: "3px solid #58AFCA" }}
      >
        <SEO title="Домашняя" />
        <div className="maxWidth1200px hero">
          <img src={hero} alt="logo background"/>
        </div>
        <div className="maxWidth1200px title_separation">
          <hr />
          <h1>
            Услуги
        </h1>
        </div>
        <div className="maxWidth1200px services">

          <div className="services__block">
            <div className="services__block__img">
              <Img fluid={data.serv1.childImageSharp.fluid} />
            </div>
            <h4>
              Услуга №1
          </h4>
            <p>
              Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы).
          </p>
          </div>
          <div className="services__block">
            <div className="services__block__img">
              <Img fluid={data.serv2.childImageSharp.fluid} />
            </div>
            <h4>
              Услуга №2
          </h4>
            <p>
              Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы).
          </p>
          </div>
          <div className="services__block">
            <div className="services__block__img">
              <Img fluid={data.serv3.childImageSharp.fluid} />
            </div>
            <h4>
              Услуга №3
          </h4>
            <p>
              Классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы).
          </p>
          </div>
        </div>
        <Link className="main_link" to="/services">
          Узнать больше
    </Link>
        <div className="maxWidth1200px title_separation">
          <hr />
          <h1>
            Статьи
      </h1>
        </div>
        <div className="maxWidth1200px articles">
          {data.allContentfulPost.edges.map(document => (
            <Link to={"/articles/" + document.node.id} className="articles__block" key={document.node.id}>
              <div className="articles__block__left_side">
                <Img fluid={document.node.image.fluid} />
              </div>
              <div className="articles__block__right_side">
                <h4>
                  {document.node.title}
                </h4>
                <p>
                  {document.node.subtitle}
                </p>
                <p className="reports_text_date">
                  {document.node.date}
                </p>
              </div>
            </Link>
          ))}

        </div>
        <Link className="main_link" to="/articles">
          Читать больше
    </Link>
        <div className="maxWidth1200px title_separation">
          <hr />
          <h1>
            Отчёты
          </h1>
        </div>
        <Desktop>
          <div className="maxWidth1200px reports">
            {data.desktopReports.edges.map(document => (
              document.node.photos.slice(0, 6).map(props => (
                <Img fluid={props.fluid} className="reports__image" />
              ))
            ))}
          </div>
        </Desktop>
        <Responsive>
          <div className="maxWidth1200px reports">
            {data.mobileReports.edges.map(document => (
              document.node.photos.slice(0, 3).map(props => (
                <Img fluid={props.fluid} className="reports__image" />
              ))
            ))}
          </div>
        </Responsive>
        <Link className="main_link" to="/reports">
          Увидеть больше
      </Link>
        <div className="maxWidth1200px title_separation">
          <hr />
          <h1>
            Отзывы о нас
      </h1>
        </div>
        <div className="maxWidth1200px reviews">
          <Slider
            {...settings}
            className="maxWidth1200px "
          >
            {data.allContentfulReviews.edges.map(document => (
              <>
                <Img fluid={document.node.image.fluid} className="reviews__block__img" />
                <div className="reviews__block__right_side ">
                  <h4>
                    {document.node.name}
                  </h4>
                  <p>
                    {document.node.pretext}
                  </p>
                  <p>
                    {document.node.organisation}
                  </p>
                </div>
              </>
            ))}
          </Slider>
        </div>
        <Link className="main_link main_link__reviews" to="/reviews">
          Все отзывы
        </Link>
      </Layout>
    )}
  />
)

export default IndexPage
