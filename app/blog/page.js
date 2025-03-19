import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "how I built a proof-of-work blockchain",
      date: "2025-03-19",
      slug: "proof-of-work-blockchain",
    },
    {
      title: "homserver stuff",
      date: "2025-03-20",
      slug: "homserver-stuff",
    },
    {
      title: "proof-of-work blockchain",
      date: "2025-03-21",
      slug: "proof-of-work-blockchain-2",
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center gap-20">
      <div className="w-full h-1/3 bg-zinc-300 flex justify-center">
        <div className="w-full max-w-screen-lg flex items-center">
          <h1 className="text-5xl font-bold">Blog</h1>
        </div>
      </div>
      <div className="max-w-screen-lg flex flex-col gap-15 justify-around items-start">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col items-start justify-between"
          >
            <div className="flex items-center gap-10">
              <Link href={`/blog/${post.slug}`}>
                <h1 className="text-2xl">{post.title}</h1>
              </Link>
              <span className="text-xl italic text-zinc-300">{post.date}</span>
            </div>
            <p>
              A lightweight blockchain in Go with proof-of-work, BadgerDB
              storage, and a CLI. Built from scratch to explore blockchain and
              cryptographic fundamentals.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
