import Link from 'next/link'

import axios from 'axios';

import Next from '../../public/images/next.png';

import Image from 'next/image';

import styles from '../../styles/sass/pages/posts.module.scss';

import { useRouter } from 'next/router';

import PostTranslation from '../../components/translations/post.translation.json';

// import { PostTranslation } from '../../components/translations/posts.translation';

export async function getServerSideProps () {
    const res = await axios.get(`${process.env.API_URL}/blogs/0/6`);

    return {
        props: {
            data: res.data.blog
        }
    }
}

const Index = ({ data }) => {
    const router = useRouter()

    return (
        <div>
            <h1> {PostTranslation[router.locale]["title"]} </h1>

            <Image 
                src={Next}
                alt="Next logo"
            />

            <ul>
                {data.length ? data.map(item => {
                    return (
                        <li key={item.id}>
                            <Link href={`/posts/${item.url}`}>
                                <a className={styles.link}> 
                                    {item.shortContent} 
                                </a>
                            </Link>
                        </li>
                    )
                }) : null}
            </ul>
        </div>
    )
}

export default Index;