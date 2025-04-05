import Profile from './components/Profile.css';
import FriendList from './components/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory.css';
import userData from './components/userData.json';
import friends from './components/friends.json';
import transactions from './components/transactions.json';
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
