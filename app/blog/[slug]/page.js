export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../../content/${slug}.mdx`);

  return (
    <div className="mt-50 w-screen flex flex-col justify-start items-center gap-20 h-auto min-h-screen mb-30">
      <div className="max-w-screen-lg w-9/10 flex flex-col justify-around items-start mx-10">
        <Post />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: "first-blog-post" },
    { slug: "blockchain" },
    { slug: "homeserver" },
    { slug: "wakatime" },
  ];
}

export const dynamicParams = false;
