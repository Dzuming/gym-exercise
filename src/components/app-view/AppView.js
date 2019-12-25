/**
 * @flow strict
 */

import * as React from 'react';
import {StyledAppView} from './styles';
import {Header} from '../header';
import {Loader} from '../shared/loader';

type IProps = {
  isLoading?: boolean,
  children: React.Node,
  title: string,
};

function AppView({isLoading = false, children, title}: IProps): React.Node {
  return (
    <StyledAppView>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header title={title} />
          {children}
        </>
      )}
    </StyledAppView>
  );
}

export default (React.memo<IProps>(AppView): React.AbstractComponent<IProps>);
