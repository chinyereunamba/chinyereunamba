export default function Page({ params: { slug } }) {
  return <div>My Post: {slug}</div>;
}


export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}