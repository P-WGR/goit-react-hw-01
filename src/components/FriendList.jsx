import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

export default FriendList;
