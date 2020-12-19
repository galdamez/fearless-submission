import PropTypes from 'prop-types';
import './CounterButton.css';
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