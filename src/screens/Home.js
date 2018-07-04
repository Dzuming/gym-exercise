import React from 'react';
import { Button, View, Text } from 'react-native';
import AppView from "../shared/AppView";

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <AppView headerTitle={'Home'} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    title="Go to Body parts"
                    onPress={() => this.props.navigation.navigate('BodyParts')}
                />
            </AppView>
        );
    }
}

export default Home