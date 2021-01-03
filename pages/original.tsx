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
  // const { data: userData } = useAllUsersQuery();

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

  // この方法だとcacheされない
  // 上でuseAllUsersQueryを使うとリクエストが走る
  const { data } = await apolloClient.query({
    query: AllUsersDocument,
  });

  return {
    props: {
      initialApolloState: data,
    },
    revalidate: 1,
  };
};

export default Original;
