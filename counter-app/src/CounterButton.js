import PropTypes from 'prop-types';

export default function CounterButton({clickHandler}) {
  return (
    <button className="counter-button" onClick={clickHandler}>
        Get Count
    </button>
  )
}

CounterButton.propTypes = {
  clickHandler: PropTypes.func.isRequired
};