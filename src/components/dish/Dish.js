// @flow

import React, {memo} from 'react';
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
import {StyledText} from '../shared/styles/text';
import {calculateCalories, getNutritionalValue} from '../../utils/calculate';
import type {IDish} from '../../types/IMeals';
import {defaultDish} from '../../constants/images';

interface IProps {
  dish: IDish;
}

const Dish: React$StatelessFunctionalComponent<IProps> = ({
  dish,
}): React$Element => {
  const image = dish.image ? dish.image : defaultDish;
  return (
    <StyledRoot>
      <StyledImage source={{uri: image}} />
      <StyledColumn>
        <StyledRow>
          <StyledName>{dish.name}</StyledName>
        </StyledRow>
        <StyledRow>
          <StyledRow>
            <StyledText>Fat:</StyledText>
            <StyledFat>{getNutritionalValue(dish.fat)}g</StyledFat>
          </StyledRow>
          <StyledRow>
            <StyledText>Carbon:</StyledText>
            <StyledCarbon>{getNutritionalValue(dish.carbon)}g</StyledCarbon>
          </StyledRow>
          <StyledRow>
            <StyledText>Protein:</StyledText>
            <StyledText>{getNutritionalValue(dish.protein)}g</StyledText>
          </StyledRow>
        </StyledRow>
        <StyledRow>
          <StyledKcal>
            {calculateCalories(dish.carbon, dish.fat, dish.protein)}kcal
          </StyledKcal>
          <StyledText>100{dish.unit}</StyledText>
        </StyledRow>
      </StyledColumn>
    </StyledRoot>
  );
};

export default memo(Dish);
