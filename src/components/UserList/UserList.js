import React from 'react';
import families from '../../families.json';
import UserSelfCard from '../UserCard/index.js';
import styles from '../UserCard/UserSelfCard.module.scss';

const fakeCache = {};
const promises = {};

const FetchAndShowUser = ({ userId }) => {
  let user = fakeCache[userId];
  if (user) {
    return <UserSelfCard user={user} />;
  } else if (!promises[userId]) {
    promises[userId] = new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = families.find(user => user.id === userId);
        fakeCache[userId] = user;
        resolve(user);
      }, Math.random() * 2500);
    });
  }
  throw promises[userId];
};

const UserList = ({ useSuspenseList }) => {
  const fetchingUsers = families.slice(0, 8).map(user => (
    <React.Suspense
      key={user.id}
      fallback={<div className={styles.card}>Loading...</div>}>
      <FetchAndShowUser userId={user.id} />
    </React.Suspense>
  ));

  if (useSuspenseList) {
    return (
      <React.unstable_SuspenseList revealOrder="together">
        {fetchingUsers}
      </React.unstable_SuspenseList>
    );
  } else {
    return fetchingUsers;
  }
};

export default UserList;
