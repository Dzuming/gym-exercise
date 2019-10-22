// @flow

import React, {memo} from 'react';
import Loader from '../Loader';
import {StyledAppView} from './styles';

interface IProps {
  isLoading: boolean;
  children: React$Element<any> | React$Element<any>[];
}

const AppView: React$StatelessFunctionalComponent<IProps> = ({
  isLoading,
  children,
}): React$Element<any> => (
  <StyledAppView>{isLoading ? <Loader /> : children}</StyledAppView>
);

export default memo<IProps>(AppView);
