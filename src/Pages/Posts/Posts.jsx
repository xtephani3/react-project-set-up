import AboutBookIcon from "../../assets/svgs/about-book.svg?react";
import { Button } from "../../components/Buttons/Button";
import "./Posts.css";
import { PostsItem } from "./PostsItem";

export function Posts() {
  return (
    <div className="posts-container">
      <div className="posts-content">
        <img
          className="posts-bird-sticker"
          src="/images/stickers/birds-left.png"
        />
        <div className="header">
          <div className="header-info">
            <span className="title">
            <AboutBookIcon />
            EXPLORE NEWSLETTER
          </span>
          <h3 className="subtitle">Most Popular Post.</h3>
          </div>

          <div className="header-action">
          <Button variant={"primary"}>All Blog Post</Button>
          </div>
        </div>

        <div className="posts">
          <PostsItem artSrc={"/images/posts/1.jpg"} />
          <PostsItem artSrc={"/images/posts/2.jpg"} />
          <PostsItem artSrc={"/images/posts/3.jpg"} />
        </div>
      </div>
    </div>
  );
}
