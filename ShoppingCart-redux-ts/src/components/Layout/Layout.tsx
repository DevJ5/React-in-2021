import { Fragment } from 'react';
import MainHeader from './MainHeader';

type LayoutProps = {
  children: JSX.Element[];
};

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
