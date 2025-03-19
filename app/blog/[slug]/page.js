export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../../content/${slug}.mdx`);

  return (
    <div className="mt-50 w-screen h-screen flex flex-col justify-start items-center gap-20">
      <div className="max-w-screen-lg flex flex-col justify-around items-start">
        <Post />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "blockchain" }, { slug: "homeserver" }];
}

export const dynamicParams = false;
