import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Intro from "@/components/layout/Intro";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery, projectsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export default async function Home() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: projectsQuery,
  });
  const blogPosts = await sanityFetch<SanityDocument[]>({ query: blogsQuery });

  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Blog blogPosts={blogPosts} />
      <Contact />
    </main>
  );
}
