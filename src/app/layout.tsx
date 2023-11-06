import type { Metadata } from "next";
import "./globals.css";

async function ListItem({ id }: { id: number }) {
  const post = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  ).then(res => res.json() as Promise<{text: string; title: string; by: string}>);
  return <li>{post.text || post.title}</li>;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`
  ).then((res) => res.json() as Promise<number[]>);
  console.log(posts);
  return (
    <html lang="en">
      <body className="grid grid-rows-[60px_1fr] h-screen">
        <header className="bg-yellow-400 grid place-content-center font-semibold text-black">
          UIZard Hackernews Reader
        </header>
        <main className="grid grid-cols-[320px_1fr]">
          <aside>
            <ul>
              {posts.map((post) => (
                <ListItem key={post} id={post} />
              ))}
            </ul>
          </aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
