import { withRouter, useRouter } from 'next/router';
import { getPost } from '../api/';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ErrorPage from '../components/ErrorPage';
import '../styles/global.scss';
import ReactGA from 'react-ga';

const Post = ({ data }) => {
    const [postData, setData] = useState(data);

    const router = useRouter();
    const { id } = router.query;


    useEffect(
        () => {
            getPost(id).then(res => res.json().then(json => setData(json.result[0])));
            ReactGA.initialize('UA-176555731-1');
            ReactGA.pageview(window.location.pathname + window.location.search);
        },
        [id],
    );

    return postData && postData.length !== 0 ?
        <Layout data={postData} type="article" />
        :
        <ErrorPage statusCode={404} />

};

Post.getInitialProps = async ({ req }) => {
    if (typeof window !== 'undefined') {
        return { data: null };
    }

    const id = req.url.replace('/', '');
    const res = await getPost(id);
    const json = await res.json();
    const data = json.result[0];
    return { data };
};

export default withRouter(Post);
