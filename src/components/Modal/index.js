import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';
import style from './modal.scss';

const maskClassNames = {
  enter: style['mask-enter'],
  enterActive: style['mask-enter-active'],
  exit: style['mask-exit'],
  exitActive: style['mask-exit-active']
};

const modalClassNames = {
  enter: style['modal-enter'],
  enterActive: style['modal-enter-active'],
  exit: style['modal-exit'],
  exitActive: style['modal-exit-active']
};

const createModalRoot = () => {
  const root = document.createElement('div');

  root.id = 'modal-root';
  document.body.appendChild(root);

  return root;
};

const modalRoot = createModalRoot();

const Modal = ({ title, visible, children, onClose }) => (
  <Portal container={modalRoot}>
    <CSSTransition
      in={visible}
      timeout={400}
      classNames={maskClassNames}
      unmountOnExit
    >
      {(state) => (
        <div className={style.mask}>
          <div className={style.wrapper}>
            <CSSTransition
              in={state === 'entered'}
              timeout={400}
              classNames={modalClassNames}
              unmountOnExit
            >
              <div className={style.container}>
                <header className={style.header}>
                  <h1>{title}</h1>
                  <button
                    className={style['close-button']}
                    onClick={onClose}
                  >
                  </button>
                </header>
                <section className={style.content}>
                  {children}
                </section>
              </div>
            </CSSTransition>
          </div>
        </div>
      )}
    </CSSTransition>
  </Portal>
);

export default Modal;
