import React, { ReactNode, ReactElement } from 'react';
import { Child } from './child';
import List from './list';

const defaultHeading = () => <strong>Parent</strong>;

// type ParentProps = { children: ReactNode; heading?: ReactNode };
interface ParentProps {
  children: ReactNode;
  heading?: () => ReactNode;
}

const Parent = ({
  children,
  heading = defaultHeading,
}: ParentProps): ReactElement => {
  return (
    <div>
      {heading?.()}
      <Child color="red" onClick={() => console.log('Clicked')}>
        {children}
      </Child>
      <List
        items={['a', 'b', 'c']}
        render={(item: string) => item.toUpperCase()}></List>
    </div>
  );
};

// const defaultContainerProps = {
//   heading: <strong>Parent</strong>,
// };
// type ParentProps = { children: ReactNode } & typeof defaultContainerProps;
// Parent.defaultProps = defaultContainerProps;
// Default props should no longer be used, instead use default parameters

export default Parent;
