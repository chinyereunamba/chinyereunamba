import { fileUrlList, getProject } from "@/services/appwrite";
import style from "@/components/projects/Projects.module.css";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import BackArrow from "@/components/utils/BackArrow";
import Link from "next/link";
import { Button } from "@/components/utils/Button";

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProject();
  const data = project?.find((item) => item.slug == params.slug);
  const imgs = (await fileUrlList(data?.slug as string)).reverse();
  const Img = ({ img }: { img: string }) => (
    <Image src={img} height={1000} width={1300} alt="project-img" />
  );
  return (
    <section className={style.project_det}>
      <BackArrow />
      <section>
        <h1>{data?.project_name}</h1>
        <p>{data?.desc}</p>
        {data?.$collectionId && (
          <Button className="text-s mt-4">
            <Link href={"https://mediaplur.com"} target="_blank">
              View Site
            </Link>
          </Button>
        )}
        <div className={style.det_img}>
          {imgs.map((item, id) => (
            <Img img={item} key={id} />
          ))}
        </div>
      </section>
    </section>
  );
}
