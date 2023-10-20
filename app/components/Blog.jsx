import React from "react"
import style from "./Blog.module.css"
import { BiLinkExternal } from "react-icons/bi"
import Link from "next/link"

function Blog() {
    return (
        <section className={style.blog}>
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
        <div className={style.blog_post} id="blog">
            <div className={style.img}>
                <img src="" alt="" />
            </div>
            <div className={style.blog_post__content}>
                <h1>Blog post</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam, ducimus?
                </p>
                <div>
                    <span className={style.type}>Blog type</span>
                    <Link href={"/"} className={style.link}>
                        <BiLinkExternal />
                    </Link>
                </div>
            </div>
        </div>
    )
}
