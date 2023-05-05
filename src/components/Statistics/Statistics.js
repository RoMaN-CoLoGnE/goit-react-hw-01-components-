import PropTypes from 'prop-types';
import Container from '../Container/Container';
import getRandomTextColor from './GetRandomColor';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.Statistics}>
      <Container>
        <div className={s.StatWrap}>
          {title && <h2 className={s.Title}>{title}</h2>}
          <ul className={s.StatList}>
            {stats.map(({ id, label, percentage }) => (
              <li
                className={s.ListItem}
                key={id}
                style={{ color: getRandomTextColor() }}
              >
                <span className={s.Label}>{label}</span>
                <span className={s.Percentage}>{percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
