import React, { ReactNode, ReactElement } from 'react';
import { Child } from './child';

const defaultContainerProps = {
  heading: <strong>Parent</strong>,
};

type ParentProps = { children: ReactNode } & typeof defaultContainerProps;

const Parent = ({ children, heading }: ParentProps): ReactElement => {
  return (
    <div>
      {heading}
      <Child color="red" onClick={() => console.log('Clicked')}>
        {children}
      </Child>
    </div>
  );
};

Parent.defaultProps = defaultContainerProps;

export default Parent;
