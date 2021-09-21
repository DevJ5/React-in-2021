import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

// Fetch posts and then the user
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = getState().posts;
  // Use lodash to get the unique user id's
  // const userIds = _.uniq(_.map(posts, 'userId'));
  // Can also be done with just a set:
  const userIds = new Set(posts.map(({ userId }) => userId));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

export const fetchUser = (id) => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};

// Fetch user memoized

// export const fetchUser = (id) => (dispatch, getState) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// });
