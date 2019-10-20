import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {grey} from '../shared/colors';
import {editBodyPart} from '../utils/asyncStorage';

class BodyPartsList extends Component {
  state = {
    editButtonState: 'notClicked',
    editedBodyPart: '',
  };

  renderItem() {
    const {item, index} = this.props;
    const {editButtonState, editedBodyPart} = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 5,
        }}>
        {editButtonState === 'notClicked' && (
          <React.Fragment>
            <Text>
              {index + 1} {item.name}
            </Text>
            <Icon.Button
              name="pencil"
              size={22}
              color="#900"
              backgroundColor={grey}
              onPress={() => this.setEditButtonState('clicked')}
            />
          </React.Fragment>
        )}
        {editButtonState === 'clicked' && (
          <React.Fragment>
            <TextInput
              onChangeText={editedBodyPart => this.setState({editedBodyPart})}
              value={editedBodyPart}
              onSubmitEditing={() => this.editBodyPart(item.id)}
            />
            <View style={{flexDirection: 'row'}}>
              <Icon.Button
                name="check"
                size={22}
                color="#900"
                backgroundColor={grey}
                onPress={() => this.editBodyPart(item.id)}
              />
              <Icon.Button
                name="times"
                size={22}
                color="#900"
                backgroundColor={grey}
                onPress={() => this.setEditButtonState('notClicked')}
              />
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }

  editBodyPart = async bodyId => {
    const {editedBodyPart} = this.state;
    const {getBodyParts} = this.props;
    this.setEditButtonState('notClicked');
    await editBodyPart({id: bodyId, name: editedBodyPart});
    await getBodyParts();
  };

  setEditButtonState = editButtonState => {
    return this.setState({editButtonState});
  };

  componentDidMount() {
    const {item} = this.props;
    this.setState({editedBodyPart: item.name});
  }

  render() {
    return this.renderItem();
  }
}

BodyPartsList.propTypes = {};

export default BodyPartsList;
