import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, VKIcon, VKShareButton } from 'react-share';
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => <img className={"news_inside_img"} src={node.data.target.fields.file['en-US'].url} width="680px" />,

    },
}
class BlogPostContentfulTemplate extends React.Component {
    render() {
        return (
            <Layout
                activeLinkArticles={{ borderBottom: "5px solid #58AFCA" }}
            >
                <div className="news_inside ">
                    <h1>
                        {this.props.data.contentfulPost.title}
                    </h1>
                    <p className="par_date">{this.props.data.contentfulPost.date}</p>
                    <Img fluid={this.props.data.contentfulPost.image.fluid} />


                    <div className="news_inside_text">
                        {documentToReactComponents(this.props.data.contentfulPost.text.json, options)}
                    </div>
                    <p className="share_p">Поделиться</p>
                    <div className="social_share">

                        <div className="social_share_block">
                            <FacebookIcon size={40} round={true} />
                            <FacebookShareButton url={"https://site/blog/" + this.props.data.contentfulPost.id} className="fb_style" />
                        </div>
                        <div className="social_share_block">
                            <TwitterIcon size={40} round={true} />
                            <TwitterShareButton url={"https://site/blog/" + this.props.data.contentfulPost.id} className="fb_style" />
                        </div>
                        <div className="social_share_block">
                            <VKIcon size={40} round={true} />
                            <VKShareButton url={"https://site/blog/" + this.props.data.contentfulPost.id} className="fb_style" />
                        </div>
                    </div>
                    <Link className="main_link main_link__articles" to={"/articles/"}>
                        Все статьи
                    </Link>
                </div>

            </Layout>
        )
    }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
    query($id: String) {    
    contentfulPost (id: {eq: $id}){
      id
      title
      date(formatString: "DD/MM/YYYY")
      image{
        fluid{
          ...GatsbyContentfulFluid
        }
      }
      text {
        json
      }
    }
  }
`
