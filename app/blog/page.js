import Link from "next/link";
import FadeIn from "../components/fadein";

export default function Blog() {
  const posts = [
    {
      title: "code time tracker",
      date: "2025-03-23",
      slug: "wakatime",
      description: "how WakaTime is incredible at making me question my life",
    },
    {
      title: "what I have running on my homeserver",
      date: "2025-03-22",
      slug: "homeserver",
      description: "the services/programs running on my homeserver",
    },
    {
      title: "how I built a proof-of-work blockchain",
      date: "2025-03-21",
      slug: "blockchain",
      description:
        "a lightweight, modular, high-performance blockchain in Go featuring PoW consensus, UTXO management, Merkle trees, ECDSA signing, P2P networking, and an efficient transaction validation pipeline.",
    },
    {
      title: "first blog post, kinda nervous",
      date: "2025-03-17",
      slug: "first-blog-post",
      description: "feat: first commit",
    },
  ];

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="w-screen h-auto flex flex-col justify-start items-center gap-20 mt-50 mb-40">
      <div className="md:max-w-screen-lg w-9/10 flex flex-col gap-15 justify-around items-start">
        <FadeIn>
          <h1 className="text-5xl font-bold">Blog</h1>
        </FadeIn>
        {posts.map((post, index) => (
          <FadeIn delay={200} key={index}>
            <div key={post.slug} className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-5">
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
                <p>·</p>
                <span className="text-xl italic opacity-50">{post.date}</span>
              </div>
              <p>{post.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
