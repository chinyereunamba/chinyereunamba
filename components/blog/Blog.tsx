import React from "react";
import style from "./Blog.module.css";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";

function Blog() {
  return (
    <section className={style.blog} id="blog">
      <h1 className="title">Blog</h1>
      <div className={style.blog_posts}>
        <BlogPost
          title={"Getting Started with Python"}
          intro={
            "Whether you’re a coding novice, a Python explorer, or just curious, this guide is made for you. In this guide, you’d learn how to install python to your local machine. I would be using the Windows OS."
          }
          link="https://medium.com/@chinyereunamba17/getting-started-with-python-80a7263c9fdb"
        />
      </div>
    </section>
  );
}

export default Blog;

type BlogProps = { link: string; intro: string; title: string };
function BlogPost({ link, intro, title }: BlogProps) {
  return (
    <div className={style.blog_post}>
      <div className={style.blog_post__content}>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div>
          <Link href={link} target="_blank" className={style.link}>
            <GoLinkExternal />
          </Link>
        </div>
      </div>
    </div>
  );
}
