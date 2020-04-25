import React from "react"
import { StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../components/style/ksysha.css"
import Slider from "react-slick";
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // arrows: true,
    // buttons: true,
    // centerMode: true,
    initialSlide: 0,
    arrows: true,  
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,  
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,  
            }
        },
    ]
}
const IndexPage = () => (
    <StaticQuery
        query={graphql`
    query{
        
        allContentfulReports(sort: {fields: createdAt, order: DESC},filter: {node_locale: {eq: "en-US"}}){
            edges{
                node{
                    title
                    photos{
                        title
                            fluid(quality: 100){
                            ...GatsbyContentfulFluid
                            }
                    }
                }
            }
        }
    }   
    `}

        render={data => (
            <Layout
                activeLinkReports={{ borderBottom: "5px solid #58AFCA" }}
                activeLinkReportsMobile={{borderLeft: "3px solid #58AFCA"}}
            >
                <SEO title="Отчёты" />
                <div className="maxWidth1200px title_separation">
                    <h1>
                        Отчёты
                    </h1>

                </div>

                <div className="maxWidth1200px reports_content">
                    {data.allContentfulReports.edges.map(document => (
                        <>
                        <Slider
                            {...settings}
                            key={document.node.title}
                        >
                            {/* {document.title} */}
                            {document.node.photos.map(props => (
                                <Img fluid={props.fluid} />
                            ))}
                        </Slider>
                            <p className="reports_slider_title">{document.node.title}</p>
                        </>
                    ))}

                </div>
            </Layout>
        )}
    />
)

export default IndexPage
