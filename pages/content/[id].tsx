// Next.js Static Site Generation (SSG) With Dynamic Parameters 
import React from 'react'
import { useRouter } from 'next/router';
import { PostProps } from '@/interface';


const Post: React.FC<PostProps> = ({ data }) => {
    console.log(data);
    const router = useRouter();
    if (router.isFallback) {
        return (
            <h1>Loading Data ...</h1>
        )
    }
    return (
        <>
            <h3>Title : {data.title}</h3>
            <p>{data.body}</p>
        </>
    )
};

export default Post;

export async function getStaticPaths() {
    // it will handle all static data like we have dict of 100 posts only and user trying to fetch 101 or 10000 post then it will show 404 page ,since related data does nto exist.
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    // we are limiting here in links but in the getStaticProps() methods we are sending all data upto 100 .so, it will show our message then show data (b/c it will check whether it really exist or not)
    const paths = posts.slice(0,10).map((post: {id: Number, userId: Number, title: string, body: string}) => {
        return {
        params: {
            id: post.id.toString(),
        },
        };
    });
    return {
        // define static paths
        // paths: [
            // {
            //     params: {
            //         id: "1"
            //     }
            // }
        // ],
        // defining dynamic path
        paths,
        // fallback: false  // it will return 404 and redirect to 404 page
        fallback: true  // it will show loading and fetching data or an error message 
        // in case of fallback = true , we need to manage fallback(error in data fetch or etc) in this we are using useRouter for this purpose.
        // fallback: 'blocking' // it will reload and fetch data
    }
}

// below function name will remain same in any cases
export async function getStaticProps(context: { params: any; }) {
    // this function is used to provide required data from API using props
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await response.json();
    return {
        props: {
            data
        }
    }
}