import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { AllUsersDocument, Post, User } from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import { ALL_POSTS_QUERY, allPostsQueryVars } from '../components/PostList';
import PostUpvoter from '../components/PostUpvoter';

const Original = ({
  allPosts,
  allUsers,
}: {
  allPosts: Post[];
  allUsers: User[];
}) => {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <section>
        <ul>
          {allUsers.slice(18).map((user) => (
            <>
              <p>User</p>
              <li>{user.firstName}</li>
              <li>{user.email}</li>
            </>
          ))}
          <br />
          {allPosts.map((post, index) => (
            <li key={post.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={post.url}>{post.title}</a>
                <PostUpvoter id={post.id} votes={post.votes} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const apolloClient = initializeApollo();

  const {
    data: { allUsers },
  } = await apolloClient.query({
    query: AllUsersDocument,
  });

  const {
    data: { allPosts },
  } = await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {
      allPosts,
      allUsers,
    },
    revalidate: 1,
  });
};

export default Original;
