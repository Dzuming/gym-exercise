/**
 * @flow strict
 */

import * as React from 'react';
import {StyledHeader} from './styles';

type IProps = {
  title: string,
};
function Header({title}: IProps): React.Node {
  return <StyledHeader>{title}</StyledHeader>;
}

export default (React.memo(Header): React.AbstractComponent<IProps>);
