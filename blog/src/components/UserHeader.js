import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ fetchUser, userId, user }) => {
  // useEffect(() => {
  //   fetchUser(userId);
  // }, [fetchUser, userId]);

  return user ? <div>{user.name}</div> : null;
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  return {
    user,
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
