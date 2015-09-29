/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;


var HelloWord = React.createClass({
  render: function() {
    return (
    
        <Text style={styles.text}>Hello World (Again)</Text>
    
    );
  }
});

var ReactNativeProjDemo1 = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
          style={styles.container} 
          initialRoute={{
            title: 'Property Finder',
            component: SearchPage
          }} >
          
      </NavigatorIOS>
        
    
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

AppRegistry.registerComponent('ReactNativeProjDemo1', () => ReactNativeProjDemo1);
