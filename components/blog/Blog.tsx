import React from "react";
import style from "./Blog.module.css";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";
import { blogsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";

async function Blog() {
  const blogPosts = await sanityFetch<SanityDocument[]>({
    query: blogsQuery,
  });

  return (
    <section className={style.blog} id="blog">
      <h1 className="title">Blog</h1>
      <div className={style.blog_posts}>
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} intro={post.intro} link={post.link} />
        ))}
      </div>
    </section>
  );
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
        <p className="">{intro}</p>
        <div>
          <Link href={link} target="_blank" className={style.link}>
            <GoLinkExternal />
          </Link>
        </div>
      </div>
    </div>
  );
}
