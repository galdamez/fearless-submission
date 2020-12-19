import PropTypes from 'prop-types';
import './CountView.css';
export default function CountView({ count, loading }) {
  return (
    <div className="count-view-container">
      {
        count === 0 && !loading &&
        <span className="welcome-message">Please click above to get started</span>
      }
      {
        loading && 
        <span className="loading-message">Loading&hellip;</span>
      }
      {
        count > 0 && !loading && 
        <span>{count} hits</span>
      }
    </div>
  )
}

CountView.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}