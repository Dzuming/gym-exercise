// @flow

import React, {memo} from 'react';
import {StyledHeader} from './styles';

interface IProps {
  title: string;
}
const Header: React$StatelessFunctionalComponent<IProps> = ({
  title,
}): React$Element => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default memo(Header);
