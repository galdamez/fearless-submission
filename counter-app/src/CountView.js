import PropTypes from 'prop-types';
export default function CountView({ count, loading }) {
  return (
      <>
      {
        count > 0 && 
        <div className="count-view-container">
          {
            loading ? 
              <span className="loading-message">Loading&hellip;</span>
              :
              <span>{count} hits</span>
          }
        </div>
      }
    </>
  )
}

CountView.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}