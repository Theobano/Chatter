import { Link, NavLink } from "react-router-dom";
import { SidebarContainer } from "./Sidebar.style";
import { AccountIcon, AnalyticsIcon, BookmarksIcon, DraftsIcon, FeedIcon, NotificationIcon, TeamBlogsIcon, TrendingTagsIcon } from "../../assets/icons";
import { useRef } from "react";

interface SidebarProps {
    sidebarRef: React.RefObject<HTMLDivElement>;
}

export function Sidebar(
    { sidebarRef }: SidebarProps
) {
    function onCloseClick() {
        sidebarRef.current?.classList.remove("open");
    }
    return (
        <SidebarContainer ref={sidebarRef}>
         <div className="logo">
                <h2>CHATTER</h2>
             <button className="close-button" aria-label="close sidebar" onClick={onCloseClick}>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <div className="links">
                <section className="overview">
                    <h4>Overview</h4>
                    <div>
                        <NavLink to="/feed" end>
                            <span className="icon">
                                <FeedIcon />
                            </span>
                            <span>Feed</span>
                        </NavLink>
                        <NavLink to="" end>
                            <span className="icon">
                                <BookmarksIcon />
                            </span>
                            <span>Bookmarks</span>
                        </NavLink>
                        <NavLink to="" end>
                            <span className="icon">
                                <TeamBlogsIcon />
                            </span>
                            <span>Team blogs</span>
                        </NavLink>
                        <NavLink to="" end>
                            <span className="icon">
                                <DraftsIcon />
                            </span>
                            <span>Drafts</span>
                        </NavLink>
                        <NavLink to="" end>
                            <span className="icon">
                                <AnalyticsIcon />
                            </span>
                            <span>Analytics</span>
                        </NavLink>
                    </div>
                </section>
                <section className="trending-tags">
                    <h4><span>
                        Trending tags
                    </span>
                        <span>
                            <TrendingTagsIcon />
                        </span>
                    </h4>
                    <div className="tags">
                        <NavLink to="" end>
                            Programming
                        </NavLink>
                        <NavLink to="" end>
                            Data science
                        </NavLink>
                        <NavLink to="" end>
                            Technology
                        </NavLink>
                        <NavLink to="" end>
                            Machine learning
                        </NavLink>
                        <NavLink to="" end>
                            Politics
                        </NavLink>
                        <NavLink to="" end>
                            See all
                        </NavLink>
                    </div>
                </section>
                <section className="personal">
                    <h4>Personal</h4>
                    <div>
                        <NavLink to="" end>
                            <span className="icon">
                                <AccountIcon />
                            </span>
                            <span>Account</span>
                        </NavLink>
                        <NavLink to="" end>
                            <span className="icon">
                                <NotificationIcon />
                            </span>
                            <span>Notifications</span>
                        </NavLink>
                        <Link to="" className="logout">
                            <h4>Log out</h4>
                        </Link>
                    </div>
                </section>
                </div>
        </SidebarContainer>
    )
}