import React from 'react';
import PropTypes from 'prop-types';

export default function LoadingMessage({ count, loading }) {
  return (
      <>
      {
        count > 0 && 
        <div className="count-container">
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

LoadingMessage.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}