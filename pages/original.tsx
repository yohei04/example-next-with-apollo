import React from 'react';
import Link from 'next/link';
import {
  AllPostsDocument,
  AllUsersDocument,
  useAllPostsQuery,
  useAllUsersQuery,
} from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import PostUpvoter from '../components/PostUpvoter';
import { GetStaticProps } from 'next';

const Original = ({ initialApolloState: userData }) => {
  // const  allPosts  = initialApolloState.ROOT_QUERY;

  // const { data } = useAllPostsQuery({ variables: { skip: 0, first: 10 } });
  // console.log(data);

  // const { data: userData } = useAllUsersQuery();

  // console.log(userData);

  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <section>
        <ul>
          {userData?.allUsers.map((user) => (
            <li>{user.firstName}</li>
          ))}
          {/* {data?.allPosts.map((post, index) => (
            <li key={post.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={post.url}>{post.title}</a>
                <PostUpvoter id={post.id} votes={post.votes} />
              </div>
            </li>
          ))} */}
        </ul>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const apolloClient = initializeApollo();

  // await apolloClient.query({
  //   query: AllPostsDocument,
  //   variables: { skip: 0, first: 10 },
  // });

  const { data } = await apolloClient.query({
    query: AllUsersDocument,
  });

  console.log(data?.allUsers);

  // return {
  //   props: {
  //     initialApolloState: apolloClient.cache.extract(),
  //   },
  //   revalidate: 1,
  // };

  return {
    props: {
      initialApolloState: data,
    },
    // revalidate: 1,
  };

  // console.log(apolloClient.cache.extract());

  // return addApolloState(apolloClient, {
  //   props: {},
  //   // revalidate: 1,
  // });
};

export default Original;
