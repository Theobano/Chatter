import { NavLink, Outlet } from "react-router-dom";
import { FeedContainer } from "./Feed.style";
import { useEffect, useState, } from "react";
import { FeedArticle } from "./FeedArticle";

let data = require("../../../mock/article.json")

export function Feed() {

    // create state to hold articles
    const [articles, setArticles] = useState<any[]|null>(null)
    // sort articles by publishedAt

    // convert articles to jsx using FeedArticles
    // pass articles as props to FeedArticles
    // render FeedArticles in the div with className="feeds-container"

    useEffect(
        () => {
            // filter data by is_published
            data = data.filter(
                (article: any) => article.is_published === true
            )
            data = data.sort((a: any, b: any) => {
                return new Date(b.publish_at).getTime() - new Date(a.publish_at).getTime()
            }
            )

            
            // change data keys
            data = data.map((article: any) => {
                return {
                    id: article.id,
                    author: {
                        firstName: article.author.first_name,
                        lastName: article.author.last_name,
                        title: article.author.title,
                        profileImage: article.author.profile_pic
                    },
                    title: article.title,
                    body: article.content,
                    isPublished: article.is_published,
                    publishedAt: article.publish_at,
                    tags: article.tags,
                    views: article.views,
                    likes: article.likes,
                    comments: article.comments,
                    featuredImage: article.featured_image,
                    category: article.category
                }
            }
            );

            console.log(data[1])
              
            if (data) {
                 
                setArticles(data.slice(0, 10))
            } 
        }
        , []
    )
    useEffect(
        () => {
            console.log("articles",articles)
        } 
        , [articles]
    )
            
            
    return (
        <FeedContainer>
            <div className="heading">
                <h2>FEED</h2>
                <p>
                Explore different content you’d love 
                </p>
            </div>
            <div className="feeds">
                <div className="feed-tabs">
                    <NavLink to="/feed" end>For you</NavLink>
                    <NavLink to="/feed/featured" end>Featured</NavLink>
                    <NavLink to="/feed/recent" end>Recent</NavLink>
                </div>
                <div className="feeds-container">
                    {/* <Outlet /> */}

                    {articles?articles.map((article: any) => {
                       return <FeedArticle {...article} key={article.id} />
                    }
                    ):null}
                    
                </div>

            </div>
        </FeedContainer>
    )
}