import Profile from '.src//components/Profile';
import FriendList from '.src//components/FriendList';
import TransactionHistory from './src/components/TransactionHistory';
import userData from './src/components/userData.json';
import friends from './src/components/friends.json';
import transactions from './src/components/transactions.json';
import './App.css';

const App = () => {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
