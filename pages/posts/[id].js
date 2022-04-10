import Link from 'next/link'

import axios from 'axios';

export async function getServerSideProps ({ params }) {
    const res = await axios.get(`${process.env.API_URL}/posts/${params.id}`);

    return {
        props: {
            data: res.data
        }
    }
}

const Post = ({ data }) => {    
    return (
        <div>
            <Link href={`/posts`}>
                <a> Go Back </a>
            </Link>

            <h1> {data.title} </h1>

            <p> {data.body} </p>
        </div>
    )
}

export default Post;