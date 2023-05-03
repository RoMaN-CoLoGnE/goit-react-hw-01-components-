import PropTypes from 'prop-types';

function Section({ children }) {
  return <div>{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
