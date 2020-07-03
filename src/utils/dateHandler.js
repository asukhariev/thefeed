import PropTypes from 'prop-types';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateHandler = {
  published: (timestamp) => {
    if (!timestamp || timestamp === '') {
      return 'recently';
    }
    const date = new Date(+timestamp);
    const month = months[date.getMonth()];
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  },
};

dateHandler.propTypes = {
  timestamp: PropTypes.instanceOf(Date),
};
