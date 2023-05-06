import PropTypes from 'prop-types';
import Container from '../Container/Container';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <section className={s.Transaction}>
      <Container>
        <div className={s.TransactionWrapper}>
          <h2 className={s.TransactionTitle}>Transaction History</h2>
          <table className={s.TransactionTable}>
            <thead className={s.TransactionThead}>
              <tr>
                <th className={s.TransactionHeader}>Type</th>
                <th className={s.TransactionHeader}>Amount</th>
                <th className={s.TransactionHeader}>Currency</th>
              </tr>
            </thead>

            <tbody>
              {items.map(({ id, type, amount, currency }) => (
                <tr className={s.TransactionRow} key={id}>
                  <td className={s.TransactionCell}>{type}</td>
                  <td className={s.TransactionCell}>{amount}</td>
                  <td className={s.TransactionCell}>{currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
