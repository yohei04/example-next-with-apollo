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

const Original = ({ initialApolloState }) => {
  console.log(initialApolloState);

  // const  allPosts  = initialApolloState.ROOT_QUERY;

  const { data } = useAllPostsQuery({variables: { skip: 0, first: 10 }});
  console.log(data)

  const { data: userData } = useAllUsersQuery()
  
  console.log(userData)

  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <section>
        <ul>
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
export default Original;

// export const getStaticProps: GetStaticProps = async (_context) => {
//   const apolloClient = initializeApollo();

//   await apolloClient
//     .query({
//       query: AllPostsDocument,
//       variables: { skip: 0, first: 10 },
//     })
//     .catch((err) => console.error('errrrrr', err));

//   console.log(apolloClient);

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// };
