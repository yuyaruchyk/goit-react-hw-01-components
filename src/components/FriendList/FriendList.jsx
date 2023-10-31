
import PropTypes from "prop-types";
import { FriendsList, LiItem, FriendAvatar  } from "./FriendList.styled";

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <LiItem key={id} >
             <div
            
            style={{   backgroundColor: isOnline ? 'green' : 'red',
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              marginRight: '8px', }}
          ></div>
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




