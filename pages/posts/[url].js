import Head from 'next/head'

import Link from 'next/link'

import axios from 'axios';

import parse from 'html-react-parser';

export async function getServerSideProps ({ params }) {
    const res = await axios.get(`${process.env.API_URL}/blogs/${params.url}`);

    return {
        props: {
            data: res.data.blog[0]
        }
    }
}

const Post = ({ data }) => {    
    return (
        <div>
            <Head>
                <title>{data.metaTitle}</title>
                <meta name="description" content={data.metaDescription} />

                <meta property="og:title" content={data.metaTitle} />
                <meta property="og:description" content={data.metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://backend.mrfast.io${data.thumbnail}`} />
            </Head>
            
            <Link href={`/posts`}>
                <a> Go Back </a>
            </Link>

            <h1> {data.shortDescription} </h1>

            {parse(data.content)}
        </div>
    )
}

export default Post;