import PropTypes from 'prop-types';
import s from './Profile.module.css';
import noImage from './noImage.jpg';

function Profile({
  username,
  tag,
  location,
  avatar = noImage,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.ProfileWrapper}>
      <div className={s.Description}>
        <img
          className={s.Avatar}
          src={avatar ?? noImage}
          alt="User avatar"
          width="300"
        />
        <p className={s.Name}>{username}</p>
        <p className={s.Tag}>{tag}</p>
        <p className={s.Location}>{location}</p>
      </div>

      <ul className={s.Stats}>
        <li className={s.StatsItem}>
          <span className={s.Label}>Followers: </span>
          <span className={s.Quantity}>{followers}</span>
        </li>
        <li className={s.StatsItem}>
          <span className={s.Label}>Views: </span>
          <span className={s.Quantity}>{views}</span>
        </li>
        <li className={s.StatsItem}>
          <span className={s.Label}>Likes: </span>
          <span className={s.Quantity}>{likes}</span>
        </li>
      </ul>
    </div>
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
  }),
};

export default Profile;
