import React from "react"
import style from "./Blog.module.css"
import { GoLinkExternal } from "react-icons/go"
import Link from "next/link"

function Blog() {
  return (
    <section className={style.blog} id="blog">
      <h1 className="title">Blog</h1>
      <div className={style.blog_posts}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </section>
  )
}

export default Blog

function BlogPost() {
  return (
    <div className={style.blog_post}>
      <div className={style.blog_post__content}>
        <h1>Blog post - Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          necessitatibus suscipit fuga, doloribus nesciunt hic quas placeat
        </p>
        <div>
          <Link href={"/"} className={style.link}>
            <GoLinkExternal />
          </Link>
        </div>
      </div>
    </div>
  )
}
