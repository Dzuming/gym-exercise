/**
 * @flow strict
 */

import * as React from 'react';
import {
  StyledCarbon,
  StyledColumn,
  StyledFat,
  StyledImage,
  StyledKcal,
  StyledName,
  StyledRoot,
  StyledRow,
} from './styles';
import {StyledText} from '../../shared/styles/text';
import {calculateCalories, getNutritionalValue} from '../../../utils/calculate';
import type {IProduct} from '../../../types/IMeals';
import {defaultProduct} from '../../../constants/images';

type IProps = {
  product: IProduct,
};

function Product({product}: IProps): React.Node {
  const image = product.image === undefined ? product.image : defaultProduct;
  return (
    <StyledRoot>
      <StyledImage source={{uri: image}} />
      <StyledColumn>
        <StyledRow>
          <StyledName>{product.name}</StyledName>
        </StyledRow>
        <StyledRow>
          <StyledRow>
            <StyledText>Fat:</StyledText>
            <StyledFat>{getNutritionalValue(product.fat)}g</StyledFat>
          </StyledRow>
          <StyledRow>
            <StyledText>Carbon:</StyledText>
            <StyledCarbon>{getNutritionalValue(product.carbon)}g</StyledCarbon>
          </StyledRow>
          <StyledRow>
            <StyledText>Protein:</StyledText>
            <StyledText>{getNutritionalValue(product.protein)}g</StyledText>
          </StyledRow>
        </StyledRow>
        <StyledRow>
          <StyledKcal>{calculateCalories(product.carbon, product.fat, product.protein)}kcal</StyledKcal>
          <StyledText>100{product.unit}</StyledText>
        </StyledRow>
      </StyledColumn>
    </StyledRoot>
  );
}

export default (React.memo<IProps>(Product): React.AbstractComponent<IProps>);
