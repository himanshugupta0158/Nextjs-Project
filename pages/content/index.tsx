import { ContentProps } from "@/interface";
import Link from "next/link";
import React from "react";



const Content: React.FC<ContentProps> = ({ posts }) => {
  return (
    <div>
      <h1>Content Page</h1>

      <ul>
        <hr />
        {posts.map((data, index) => {
          return (
            <li key={index}>
              <Link href={`/content/${data.id}`}>
                <h2>{data.title}</h2>
              </Link>
              {/* <hr /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;

// below function name will remain same in any cases
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts: posts.slice(0, 20),
    },
  };
}
