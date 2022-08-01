import PropTypes from 'prop-types';
import cn from 'classnames';

import '../index.css';
import styles from './UIButton.module.css';

const UIButton = ({ 
  text, onClick,
  disabled, theme = 'dark',
  classes
}) => {
  return (
    <button
    onClick = { onClick }
    disabled = { disabled }
    className = { cn(styles.button, styles[theme], classes)}
    >
      { text }
    </button>
  )
}

UIButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default UIButton;