import React, { useState, useEffect } from 'react';
import { Modal } from 'react-tote-box';
import style from './error-message.scss';

const ErrorMessage = ({ error }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error]);

  return (
    <Modal title="Error" visible={visible} onClose={() => setVisible(false)} animation="fadeLeft">
      <p className={style.content}>{error && error.message}</p>
    </Modal>
  );
};

export default ErrorMessage;
