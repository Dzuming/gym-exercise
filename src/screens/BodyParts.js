// @Flow
import React, { Component } from 'react';
import { Button, FlatList, TextInput } from 'react-native';
import AppView from '../shared/AppView';
import { createBodyPart, getBodyParts } from '../utils/asyncStorage';
import I18n from 'react-native-i18n';
import BodyPartsList from './BodyPartsList';

class BodyParts extends Component {
  state = {
    bodyPart: '',
    bodyParts: [],
    isLoading: false
  };

  addBodyParts = () => {
    this.showLoader(true);
    createBodyPart(this.state.bodyPart).then(async () => {
      this.setState({ bodyParts: await getBodyParts() });
      this.showLoader(false);
    });
  };

  getBodyParts = async () => {
    const bodyParts = await getBodyParts();
    if (Array.isArray(bodyParts)) {
      this.setState({ bodyParts });
    }
  };

  async componentDidMount() {
    await this.getBodyParts();
  }

  showLoader = state => this.setState({ isLoading: state });

  render() {
    const { bodyPart, bodyParts, isLoading } = this.state;

    return (
      <AppView headerTitle={'Body Parts'} isLoading={isLoading}>
        <TextInput
          style={{ height: 40 }}
          placeholder={I18n.t('typeBodyPart')}
          value={bodyPart}
          onChangeText={text => this.setState({ bodyPart: text })}
        />
        <Button
          onPress={this.addBodyParts}
          title={I18n.t('addBodyPart')}
          color="#841584"
          accessibilityLabel="Add body part"
        />
        <FlatList
          data={bodyParts}
          extraData={this.state}
          renderItem={({ item, index }) => (
            <BodyPartsList
              item={item}
              index={index}
              getBodyParts={this.getBodyParts}
            />
          )}
          keyExtractor={item => item.id}
        />
      </AppView>
    );
  }
}

export default BodyParts;
