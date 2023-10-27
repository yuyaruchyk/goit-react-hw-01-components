import PropTypes from "prop-types";
import { Container, ProfileDescription, SecondaryDescription, DescriptionItems, Image, Name, Stats, StatsList, Label} from "./Profile.styled"


export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <ProfileDescription className="description">
        <Image src={avatar} alt="User avatar" />
        <SecondaryDescription> <Name>{username}</Name>
        <DescriptionItems> <p>{'@' + tag}</p>
        <p className="location">{location}</p></DescriptionItems>
          
         </SecondaryDescription>
       
      </ProfileDescription>
      
        
      <Stats className="stats">
        <StatsList>
          <Label className="label">Followers: </Label>
          <span className="quantity">{stats.followers}</span>
        </StatsList>
        <StatsList>
          <Label className="label">Views: </Label>
          <span className="quantity">{stats.views}</span>
        </StatsList>
        <StatsList>
          <Label className="label">Likes: </Label>
          <span className="quantity">{stats.likes}</span>
        </StatsList>
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