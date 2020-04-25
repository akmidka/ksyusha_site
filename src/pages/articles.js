import React from "react"
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"
import "../components/style/ksysha.css"


const IndexPage = () => (
    <StaticQuery
        query={graphql`
    query{
        bg: file(relativePath: {eq: "bg2.png"}) {
            childImageSharp {
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }   
        allContentfulPost(sort: {fields: createdAt, order: DESC},filter: {node_locale: {eq: "en-US"}}){
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
                activeLinkArticles={{borderBottom: "5px solid #58AFCA"}}
                activeLinkArticlesMobile={{borderLeft: "3px solid #58AFCA"}}
            >
                <SEO title="Статьи" />
                <BackgroundImage
                    className="maxWidth1200px hero hero__articles"
                    fluid={data.bg.childImageSharp.fluid}
                >
                    <div className="hero__block">
                        <h1>
                        Немного о наших статьях что-нибудь
                </h1>
                        <hr />
                        <p>
                            Помогают сплотить коллектив и бла бла бла бла бла бла бла блабла бла бла блабла бла бла блабла бла бла блабла бла бла бла
                </p>
                    </div>
                </BackgroundImage>

                <div className="maxWidth1200px title_separation">
                    <h1>
                        Статьи
                    </h1>
                </div>
                <div className="maxWidth1200px articles__content">
                    {data.allContentfulPost.edges.map(document => (
                        <div className="articles__content__block" key={document.node.id}>
                            <Img fluid={document.node.image.fluid} />
                            <div className="articles__content__block__right_side">
                                <h1>
                                    {document.node.title}
                                </h1>
                                <p className="articles__p">
                                    {document.node.subtitle}
                                </p>
                                <p>
                                    {document.node.date}
                                </p>
                                <Link className="main_link " to={"/articles/"+document.node.id+"/"}>
                                Далее
                                </Link>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </Layout>
        )}
    />
)

export default IndexPage
