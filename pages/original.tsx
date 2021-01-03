import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { AllUsersDocument, User } from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';

const Original = ({ allUsers }: { allUsers: User[] }) => {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <section>
        <ul>
          {allUsers.map((user) => (
            <>
              <li>{user.firstName}</li>
              <li>{user.email}</li>
            </>
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

  const {
    data: { allUsers },
  } = await apolloClient.query({
    query: AllUsersDocument,
  });

  return addApolloState(apolloClient, {
    props: {
      allUsers,
    },
    revalidate: 1,
  });
};

export default Original;
