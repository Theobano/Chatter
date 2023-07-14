import { Link } from "react-router-dom";
import { AnalyticsIcon, CommentsIcon, FavoriteIcon, OpenBookIcon } from "../../../assets/icons";
import { FeedArticleContainer } from "./FeedArticle.style";

interface FeedArticleProps {
    id: number;
    author: { firstName: string, lastName: string, title: string, profileImage: string };
    title: string;
    body: string;
    isPublished: boolean;
    publishedAt: string;
    tags: string;
    views: number;
    likes: number;
    comments: number;
    featuredImage: string;
    category: string;
}

export function FeedArticle(
    {
        id,
        author,
        title,
        body,
        isPublished,
        publishedAt,
        tags,
        views,
        likes,
        comments,
        featuredImage,
        category
    }: FeedArticleProps
) {

    // set publishedAt to month day, year
    publishedAt = new Date(publishedAt).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    )
    const readTime = Math.ceil(body.split(" ").length / 200);
    const displayText = body.split("/n/n")[0].slice(0, 200)


    return (
        <FeedArticleContainer>
            <Link to="">
                <div className="feed-article-header">
                    <div className="feed-article-author">
                        <img src={author.profileImage} alt="author" />
                        <div className="feed-article-author-info">
                            <h3>{author.firstName} {author.lastName}</h3>
                            <p>{author.title}</p>
                        </div>
                    </div>
                    <div className="feed-article-date">
                        <p>{publishedAt}</p>
                    </div>
                </div>
                <div className="feed-article-title">
                    <h2>{title}</h2>
                    <div className="feed-article-read-time"
                    ><OpenBookIcon /><span>{readTime} min{readTime > 1 ? 's' : null} read</span></div>
                </div>
                <div className="feed-article-short-text">
                    {displayText}
                </div>
                <div className="feed-article-featured-image">
                    <img src={featuredImage} alt="featured" />
                </div>
                <div className="feed-article-footer">
                    <div className="feed-article-comments">
                        <CommentsIcon /><span>{comments} comments</span>
                    </div>
                    <div className="feed-article-likes">
                        <FavoriteIcon /><span>{likes} likes</span>
                    </div>
                    <div className="feed-article-views">
                        <AnalyticsIcon /><span>{views} views</span>
                        </div>
                </div>
            </Link>

    </FeedArticleContainer>
    )
    
}