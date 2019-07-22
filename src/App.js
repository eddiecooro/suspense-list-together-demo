import React from 'react';
import styles from './App.module.scss';
import UserList from './components/UserList';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div>
          <p>{'With'}</p>
          <p>{'<SuspenseList revealMode="together"/>'}</p>
          <br />
          <UserList useSuspenseList={true} />
        </div>
        <div>
          <p>{'Without'}</p>
          <p>{'<SuspenseList />'}</p>
          <br />
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
