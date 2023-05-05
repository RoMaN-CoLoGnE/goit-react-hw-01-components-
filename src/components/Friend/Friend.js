import PropTypes from 'prop-types';
import s from './Friend.module.css';
import noImage from '../Profile/noImage.jpg';

function Friend({ avatar, name, isOnline }) {
  return (
    <li className={s.ListItem}>
      <span className={isOnline ? s.StatusOnline : s.StatusOffline}></span>
      <img
        className={s.Avatar}
        src={avatar ?? noImage}
        alt="User avatar"
        width="48"
      />
      <p className={s.Name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
