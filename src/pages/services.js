import React from "react"
import {  StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"
import "../components/style/ksysha.css"


const IndexPage = () => (
    <StaticQuery
        query={graphql`
    query{
        bg: file(relativePath: {eq: "bg1.png"}) {
            childImageSharp {
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }   
        stat1:   file(relativePath: {eq: "stat1.png"}) {
            childImageSharp {
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            } 
        }
        stat2:   file(relativePath: {eq: "stat2.png"}) {
            childImageSharp {
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            } 
        }
        whatsapp: file(relativePath: {eq: "footer/waImg.png"}){
            childImageSharp {
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            } 
        }
        telegram: file(relativePath: {eq: "footer/tImg.png"}){
            childImageSharp {
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            } 
        }
        gmail: file(relativePath: {eq: "footer/gImg.png"}){
            childImageSharp {
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }   
    `}

        render={data => (
            <Layout
                activeLinkServices={{borderBottom: "5px solid #58AFCA"}}
                activeLinkServicesMobile={{borderLeft: "3px solid #58AFCA"}}
            >
                <SEO title="Услуги" />
                <BackgroundImage
                    className="maxWidth1200px hero hero__content"
                    fluid={data.bg.childImageSharp.fluid}
                >
                    <div className="hero__block">
                        <h1>
                            Групповые услуги психолога
                </h1>
                        <hr />
                        <p>
                            Помогают сплотить коллектив и бла бла бла бла бла бла бла блабла бла бла блабла бла бла блабла бла бла блабла бла бла бла
                </p>
                    </div>
                </BackgroundImage>

                <div className="maxWidth1200px title_separation">
                    <h1>
                        Услуги
            </h1>
                </div>
                <div className="maxWidth1200px services__content">
                    <h4>
                        Название первой услуги
            </h4>
                    <p>
                        Большая часть текста сделана из разделов 1.10.32–3 книги Цицерона «На грани Добра и Зла» («De finibus bonorum et malorum»). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit является первой известной человечеству версией («Больше нет никого из тех, кто любит скорбь, поскольку это горе и поэтому хочет заполучить это»). Находка присваивается Ричарду МакКлинтоку (Richard McClintock), филологу, руководителю публикаций в колледже Хампден-Сидней, что в Вирджинии; он искал «citings consectetur» в классической латинской литературе, термин, который встречается удивительно редко в том литературном тексте.
            </p>
                    <h4>
                        Почему это важно
            </h4>
                    <p>
                        Большая часть текста сделана из разделов 1.10.32–3 книги Цицерона «На грани Добра и Зла» («De finibus bonorum et malorum»). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit является первой известной человечеству версией («Больше нет никого из тех, кто любит скорбь, поскольку это горе и поэтому хочет заполучить это»). Находка присваивается Ричарду МакКлинтоку (Richard McClintock), филологу, руководителю публикаций в колледже Хампден-Сидней, что в Вирджинии; он искал «citings consectetur» в классической латинской литературе, термин, который встречается удивительно редко в том литературном тексте.
            </p>
                    <h4>
                        Какая-то статистика
            </h4>
                    <div className=" maxWidth1200px services__content__img">
                        <Img fluid={data.stat1.childImageSharp.fluid} />
                        <Img fluid={data.stat2.childImageSharp.fluid} />
                    </div>
                </div>

                <div className="maxWidth1200px title_separation">
                    <h1>
                        Сколько это стоит
                     </h1>

                </div>
                <div className="maxWidth1200px prices">
                    <div className="prices__block prices__block1">
                        <h1>
                            2000 ₽
                            </h1>
                        <h4>
                            Пакет “Базовый”
                            </h4>
                        <ul>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                        </ul>
                    </div>
                    <div className="prices__block prices__block2">
                        <h1>
                            2500 ₽
                            </h1>
                        <h4>
                            Пакет “Стандарт”
                            </h4>
                        <ul>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                        </ul>
                    </div>
                    <div className="prices__block prices__block3">
                        <h1>
                            3500 ₽
                            </h1>
                        <h4>
                            Пакет “Премиум”
                            </h4>
                        <ul>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                            <li>- элемент пакета;</li>
                        </ul>
                    </div>
                </div>

                <div className="maxWidth1200px title_separation">
                    <h1>
                        Свяжитесь с нами
                    </h1>
                </div>
                <div className="maxWidth1200px contact">
                    <div className="contact__block">
                        <Img fluid={data.whatsapp.childImageSharp.fluid} />
                        <p>
                            Нажмите, чтобы написать в WhatsApp
                        </p>
                        <a rel="noopener noreferrer" target="_blank" href="https://wa.me/?text=Здесь%20будет%20текст!">+7(111) 222-33-44</a>
                    </div>
                    <div className="contact__block">
                        <Img fluid={data.telegram.childImageSharp.fluid} />
                        <p>
                            Нажмите, чтобы написать в Telegram
                        </p>
                        <a rel="noopener noreferrer" target="_blank" href="tg://msg_url?url=http%3A%2F%2Fsomesite.com&amp;text=Здесь%20будет%20текст!">@psychoYKT</a>
                    </div>
                    <div className="contact__block">
                        <Img fluid={data.gmail.childImageSharp.fluid} />
                        <p>
                            Нажмите, чтобы написать e-mail
                        </p>
                        <a rel="noopener noreferrer" target="_blank" href="mailto:psychoYKT@gmail.com">psychoYKT@gmail.com</a>
                    </div>
                </div>


            </Layout>
        )}
    />
)

export default IndexPage
