import React from 'react';
import PropTypes from 'prop-types';

import style from '@sass/components/button.module.scss'

const Button = ({
  children, type, primary = false, size,
}) => {
  const getClassName = () => {
    const baseClassName = style.button;

    const primaryClassName = primary ? style['button-primary'] : {};
    const sizeClassName = size ? style[`button-size-${size}`] : {};

    return `${baseClassName} \
    ${primaryClassName} \
    ${sizeClassName}`;
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={getClassName()}>{children}</button>
  );
};

Button.defaultProps = {
  children: <></>,
  type: 'button',
  primary: false,
  size: 'medium',
};

Button.propTypes = {
  children: PropTypes.element,
  type: PropTypes.oneOf(['button', 'submit']),
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['auto', 'small', 'medium']),
};

export default Button;
