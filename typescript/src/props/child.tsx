import React, { ReactNode, ReactElement } from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
  children: ReactNode | ReactNode[];
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

// This one doesn't need children to be defined in the interface and has other React features.
// But its old and shouldnt be used anymore.
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}): ReactElement => {
  return (
    <div>
      {color}
      <button onClick={onClick}>{children}</button>
    </div>
  );
};
