import React from 'react';

const RootContext = React.createContext(null);

export function RootContextConsumer(Component) {
  return function Wrapper(props) {
    return (
      <RootContext.Consumer>
        {store => <Component {...props} store={store} />}
      </RootContext.Consumer>
    );
  };
}

export default RootContext;
