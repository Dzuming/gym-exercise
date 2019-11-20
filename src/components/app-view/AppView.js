// @flow

import React, {memo} from 'react';
import Loader from '../Loader';
import {StyledAppView} from './styles';
import {Header} from '../header';

interface IProps {
  isLoading: boolean;
  children: React$Node;
  title: string;
}

const AppView: React$StatelessFunctionalComponent<IProps> = ({
  isLoading,
  children,
  title,
}): React$Element<any> => (
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

export default memo<IProps>(AppView);
