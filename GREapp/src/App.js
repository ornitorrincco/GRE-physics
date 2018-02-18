import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  WebView,
  TextInput } from 'react-native';
import Katex from 'react-native-katex';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
      userInputEnabled: true,
      userInputEnabledEditable: true,
      userInputOnFocus: false,
      userInputLength: 100,
      userInputLines: 4
    };
  }

  render() {
    const { header,
      container,
      textBox,
      inputTextBox,
      headerTitle } = styles;
      const inlineStyle = `
        html, body {
          display: flex;
          background-color: #fafafa;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        .katex {
          font-size: 4em;
          margin: 0;
          display: flex;
        }
        `;

    return (
      <View style={{ flex: 1 }}>
        <View style={header}>
          <Text style={headerTitle}>EQUATION GENERATOR</Text>
        </View>
        <View style={{ flex: 1 }}>
        <Katex
          expression="c=\pm\sqrt{a^2 + b^2}"
          style={styles.katex}
          inlineStyle={inlineStyle}
          displayMode={false}
          throwOnError={false}
          errorColor="#f00"
          macros={{}}
          colorIsTextColor={false}
          onLoad={() => this.setState({ loaded: true })}
          onError={() => console.error('Error')}
        />
        </View>
        <View style={container}>
          <View style={textBox}>
            <TextInput
            // multiline={true} TODO(ornitorrincco) multiline is not working properly with enter key
            numberOfLines={this.state.userInputLines}
            style={inputTextBox}
            onChangeText={(userInput) => this.setState({ userInput })}
            onSubmitEditing={() => {
              Alert.alert(this.state.userInput);
            }}
            value={this.state.userInput}
            maxLength={this.state.userInputLength}
            editable={this.state.userInputEnabled}
            selectTextOnFocus={this.state.userInputOnFocus}
            underlineColorAndroid="transparent"
            />
          </View>
          <Text>SomeBody</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  katex: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ecf8f9'
  },
  container: {
    flex: 4,
    backgroundColor: '#221e22'
  },
  textBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ecf1f2'
  },
  inputTextBox: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 24,
    backgroundColor: '#9fd6f0',
  }
};

export default App;
