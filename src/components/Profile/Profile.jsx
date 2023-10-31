import PropTypes from "prop-types";
import { Container, ProfileDescription, SecondaryDescription, DescriptionItems, Image, Name, Stats, StatsList, Label} from "./Profile.styled"


export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <ProfileDescription>
        <Image src={avatar} alt="User avatar" />
        <SecondaryDescription> <Name>{username}</Name>
        <DescriptionItems> <p>{'@' + tag}</p>
        <p>{location}</p></DescriptionItems>
          
         </SecondaryDescription>
       
      </ProfileDescription>
      
        
      <Stats>
        <StatsList>
          <Label>Followers: </Label>
          <span>{stats.followers}</span>
        </StatsList>
        <StatsList>
          <Label>Views: </Label>
          <span>{stats.views}</span>
        </StatsList>
        <StatsList>
          <Label>Likes: </Label>
          <span>{stats.likes}</span>
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