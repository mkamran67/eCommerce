import React from 'react';
import { Alert } from 'react-bootstrap';

/**
 *
 * @param {Object} Props
 * @param {String} Props.variant
 * @param {Array} Props.children
 */
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
