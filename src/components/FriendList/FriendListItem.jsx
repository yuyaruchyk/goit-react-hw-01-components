import PropTypes from 'prop-types';
import { LiItem, Status, FriendAvatar } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <LiItem $isOnline={isOnline}>
      <Status $status={isOnline}></Status>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </LiItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
