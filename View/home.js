import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import Util from '../Util/common';
import ProcessListPage from './processlist';

var screensize = {width:Dimensions.get('window').width, height:Dimensions.get('window').height};

var simuData = 
{
  ProcessName: '手工贴片+炉前目检',
}


export default class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {ProcessName: simuData.ProcessName};
  }

  render() {
    return (
    	<TouchableHead headTitle='当前工序' headTouch={this.state.ProcessName}
      onPress={()=>this.gotoProcessList()}
      />
    );
  }

  gotoProcessList() {
    this.props.navigator.push({
      component: ProcessListPage,
      passProps: {
        callback: (msg)=>{this.ChangeProcess(msg);}
      },
    })
  }

  ChangeProcess(msg){
    this.setState({ ProcessName: msg });
  }

};


class TouchableHead extends Component{
	constructor(props) {
    super(props);
    this.state = { width: Dimensions.get('window').width/3, };

  };

  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.titleStyle}>
    			<Text>{this.props.headTitle}</Text>
    		</View>
    		<TouchableHighlight style={styles.item} onPress={this.props.onPress}>
	        	<Text>{this.props.headTouch}</Text>
	        </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  titleStyle:
  {
  	borderColor:'red',
  	borderWidth:1,
  	width:screensize.width/3,
  	height:screensize.height/10,
  	justifyContent: 'center',
  	alignItems:'center',
  },
  item:{
  	flex:1,
  	borderColor:'red',
  	borderWidth:1,
  	justifyContent: 'center',
  	height:screensize.height/10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});