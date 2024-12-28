import { groq } from "next-sanity";

// 1. Get all projects
export const projectsQuery = groq`*[_type == "project"] {
  title,
  slug,
  description,
  mainImage{
    asset->{url},
    alt
  },
  gallery[]{
    asset->{url}
  },
  tags,
  link,
  github,
  publishedAt
}`;

// 2. Get a single project by its slug
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{ 
  title,
  description,
  mainImage{
    asset->{url},
    alt
  },
  gallery[]{
    asset->{url}
  },
  tags,
  link,
  github,
  publishedAt
}`;

// 3. Get all project slugs
export const projectPathsQuery = groq`*[_type == "project" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;
// 4. Get all blogs
export const blogsQuery = groq`*[_type == "blog"] {
  title,
  slug,
  content,
  mainImage{
    asset->{url},
    alt
  },
  tags,
  author,
  publishedAt
}`;

// 5. Get a single blog by its slug
export const blogQuery = groq`*[_type == "blog" && slug.current == $slug][0]{ 
  title,
  content,
  mainImage{
    asset->{url},
    alt
  },
  tags,
  author,
  publishedAt
}`;

// 6. Get all blog slugs
export const blogPathsQuery = groq`*[_type == "blog" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;