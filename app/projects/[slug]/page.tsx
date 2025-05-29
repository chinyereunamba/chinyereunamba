import style from "@/components/projects/Projects.module.css";
import BackArrow from "@/components/utils/BackArrow";
import Link from "next/link";
import { Button } from "@/components/utils/Button";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { Suspense } from "react";

interface Img {
  alt: string;
  asset: { url: string };
}

type Project = SanityDocument & {
  slug?: { current: string };
  title?: string;
  description?: string;
  gallery?: Img[];
  link?: string;
};

export default async function Page({ params }: { params: QueryParams }) {
  const project = await sanityFetch<Project>({
    query: projectQuery,
    params: params,
  });

  if (!project) {
    return notFound();
  }

  // Fallback for gallery images
  const imgs: Img[] = project?.gallery ?? [];

  return (
    <section className={`${style.project_det}`}>
      <BackArrow />
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <article>
            <h1>{project?.title ?? "Untitled Project"}</h1>
            <summary>
              {project?.description ?? "No description available."}
            </summary>
          </article>

          {project?.link && (
            <Button className="text-s mt-4">
              <Link href={project.link} target="_blank">
                View Site
              </Link>
            </Button>
          )}

          <div className={style.det_img}>
            {imgs.map((item, id) => (
              <div key={id}>
                <Image
                  src={item?.asset?.url}
                  alt={item?.alt || "Project Image"}
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </section>
  );
}
