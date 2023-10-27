
import PropTypes from "prop-types";
import { FriendsList, LiItem,  } from "./FriendList.styled";

export function FriendList({ friends }) {
  return (
    <FriendsList className="friend-list">
      {friends.map(({ id, avatar, isOnline, name }) => (
        <LiItem key={id} className="item">
          <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </LiItem>
      ))}
    </FriendsList>
  );
}



FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};




