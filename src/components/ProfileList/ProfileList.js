import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';
import s from './ProfileList.module.css';

function ProfileList({ items }) {
  return (
    <ul className={s.ProfileList}>
      {items.map(item => (
        <li className={s.ProfileItem} key={item.tag}>
          <Profile
            username={item.username}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            stats={item.stats}
            // {...item}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    })
  ),
};

export default ProfileList;
