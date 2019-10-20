import React from 'react';
import AppView from '../shared/AppView';
import {screens} from '../constants/screens';
import CustomButton from '../components/CustomButton';
import I18n from 'i18next';
import {toLowerCaseFirstLetter} from '../utils/string';

class Home extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <AppView
        headerTitle={'Home'}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {screens
          .map((screen, index) => {
            if (screen.name === 'Home') {
              return;
            }
            return (
              <CustomButton
                key={index}
                buttonStyle={{
                  marginBottom: 10,
                  padding: 10,
                  alignItems: 'center',
                  backgroundColor: '#900',
                }}
                textStyle={{fontSize: 16, color: 'white'}}
                title={I18n.t(
                  `routeLabel.bodyParts`,
                )}
                onPress={() => navigation.navigate(screen.name)}
              />
            );
          })
          .filter(component => component !== undefined)}
      </AppView>
    );
  }
}

export default Home;
