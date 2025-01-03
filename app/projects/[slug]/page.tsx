import style from "@/components/projects/Projects.module.css";
import BackArrow from "@/components/utils/BackArrow";
import Link from "next/link";
import { Button } from "@/components/utils/Button";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Image from "next/image"; // Use next/image for optimized images

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await sanityFetch<SanityDocument>(projectQuery, {
    slug: params.slug,
  });

  // Fallback for gallery images
  const imgs = project?.gallery ?? [];

  return (
    <section className={style.project_det}>
      <BackArrow />
      <section>
        <h1>{project?.title ?? "Untitled Project"}</h1>
        <p>{project?.description ?? "No description available."}</p>

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
                src={item.asset.url}
                alt={item.alt || "Project Image"}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
