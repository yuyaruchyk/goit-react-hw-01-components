
import PropTypes from "prop-types";
import { FriendsList } from "./FriendList.styled";

export function FriendList({ friends }) {
  return (
    <FriendsList className="friend-list">
      {friends.map(({ id, avatar, isOnline, name  }) => (
        <li className="item" key={id}>
          <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
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




