
import PropTypes from "prop-types";
import { FriendsList, LiItem, FriendAvatar, Status  } from "./FriendList.styled";

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <LiItem key={id} >
           <Status $status={isOnline}></Status>
          <FriendAvatar src={avatar} alt="User avatar" width="38" />
          <p>{name}</p>
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




