import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Friend from './Friend/Friend';
import s from './FriendsList.module.css';

function FriendList({ items }) {
  return (
    <section className={s.Friends}>
      <Container>
        <ul className={s.FriendsList}>
          {items.map(item => (
            <Friend
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
