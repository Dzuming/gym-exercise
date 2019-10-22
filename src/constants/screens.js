// @flow

import React from 'react';
import {Home, Timer, Gym, Meals, Settings} from '../screens';
import {TabIcon} from '../components/tab-icon';
import {IScreen} from '../types/IScreen';

export const screens: IScreen[] = [
  {
    name: 'Timer',
    component: Timer,
    icon: (color: string) => <TabIcon name={'timer'} color={color} />,
  },
  {
    name: 'Meals',
    component: Meals,
    icon: (color: string) => <TabIcon name={'local-dining'} color={color} />,
  },
  {
    name: 'Home',
    component: Home,
    icon: (color: string) => <TabIcon name={'home'} color={color} />,
  },
  {
    name: 'Gym',
    component: Gym,
    icon: (color: string) => <TabIcon name={'fitness-center'} color={color} />,
  },
  {
    name: 'Settings',
    component: Settings,
    icon: (color: string) => <TabIcon name={'settings-input-composite'} color={color} />,
  },
];
