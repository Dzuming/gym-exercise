import React, {Component} from 'react';
import {getLanguage} from '../utils/asyncStorage';
import LanguageProvider from '../providers/LanguageProvider';
import Loader from './Loader';

class Internalization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      language: '',
    };
  }
  async componentDidMount() {
    const language = await getLanguage();

    this.setState({language});
    this.setState({loading: false});
  }
  render() {
    const {children} = this.props;
    const {loading, language} = this.state;
    return loading ? (
      <Loader />
    ) : (
      <LanguageProvider language={language}>
        {React.Children.map(children, child => React.cloneElement(child))}
      </LanguageProvider>
    );
  }
}

Internalization.propTypes = {};

export default Internalization;
