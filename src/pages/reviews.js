import React from "react"
import {  StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../components/style/ksysha.css"
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => <img className={"news_inside_img"} src={node.data.target.fields.file['en-US'].url} width="680px" alt="article photo"/>,

    },
}

const IndexPage = () => (
    <StaticQuery
        query={graphql`
    query{
         
        allContentfulReviews(sort: {fields: createdAt, order: DESC},filter: {node_locale: {eq: "en-US"}}){
            edges{
                node{
                    name
                    organisation
                    text {
                        json
                        }
                    image{
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
            activeLinkReviews={{ borderBottom: "5px solid #58AFCA" }}
            activeLinkReviewsMobile={{borderLeft: "3px solid #58AFCA"}}
            >
                <SEO title="Отчёты" />
                <div className="maxWidth1200px title_separation">
                    <h1>
                        Отзывы
                    </h1>

                </div>

                <div className="maxWidth1200px reviews_content">
                    {data.allContentfulReviews.edges.map(document => (
                        <div className="reviews_content__block" key={document.node.name}>
                            <Img fluid={document.node.image.fluid} alt={document.node.name}/>
                            <h4>
                                {document.node.name}
                            </h4>
                            {documentToReactComponents(document.node.text.json, options)}
                            <p className="org_text">
                                {document.node.organisation}
                            </p>
                        </div>
                    ))}

                </div>
            </Layout>
        )}
    />
)

export default IndexPage
