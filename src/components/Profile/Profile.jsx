import PropTypes from "prop-types";
import { Container, ProfileDescription, SecondaryDescription, DescriptionItems, Image, Name, Stats, } from "./Profile.styled"


export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container className="profile">
      <ProfileDescription className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <SecondaryDescription> <Name className="name">{username}</Name>
        <DescriptionItems> <p className="tag">{'@' + tag}</p>
        <p className="location">{location}</p></DescriptionItems>
          
         </SecondaryDescription>
       
      </ProfileDescription>
      
        
      <Stats className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </Stats>
    </Container>
  );
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};