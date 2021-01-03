import { GetStaticProps } from 'next';
import App from '../components/App';
import Header from '../components/Header';
import InfoBox from '../components/InfoBox';
import PostList, {
  allPostsQueryVars, ALL_POSTS_QUERY
} from '../components/PostList';
import Submit from '../components/Submit';
import { addApolloState, initializeApollo } from '../lib/apolloClient';

const IndexPage = ({}) => {
  return (
    <App>
      <Header />
      <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
      <Submit />
      <PostList />
    </App>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

export default IndexPage;
