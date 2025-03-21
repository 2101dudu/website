import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "How I built a proof-of-work blockchain",
      date: "2025-03-19",
      slug: "blockchain",
      description:
        " A lightweight blockchain in Go with proof-of-work, BadgerDB storage, and a CLI. Built from scratch to explore blockchain and cryptographic fundamentals.",
    },
    {
      title: "Homserver stuff",
      date: "2025-03-20",
      slug: "homserver",
      description:
        " A lightweight blockchain in Go with proof-of-work, BadgerDB storage, and a CLI. Built from scratch to explore blockchain and cryptographic fundamentals.",
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center gap-20 mt-30">
      <div className="max-w-screen-lg flex flex-col gap-15 justify-around items-start">
        <h1 className="text-5xl font-bold">Blog</h1>
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col items-start justify-between"
          >
            <div className="flex items-center gap-10">
              <Link
                className="flex items-center gap-2 cursor-pointer"
                href={`/blog/${post.slug}`}
              >
                <h1 className="text-2xl underline">{post.title}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </Link>
              <span className="text-xl italic text-zinc-300">{post.date}</span>
            </div>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
