import { defineField, defineType } from "sanity";

interface Project {
  title: string;
  slug: { current: string };
  description?: string;
  mainImage: {
    asset: { _ref: string };
    alt?: string;
  };
  gallery: Array<{
    asset: { _ref: string };
  }>;
  tags: string[];
  link?: string;
  github?: string;
  publishedAt?: string; // ISO 8601 string format for datetime
}

export default defineType({
  name: "project",
  title: "Portfolio Works",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "GitHub Repository",
      type: "url",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
});
