import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

var ProcessListData=[
	{
		id:1,
		name:'半自动浸锡'
	},
	{
		id:2,
		name:'后焊'
	},
	{
		id:3,
		name:'剪脚'
	},
	{
		id:4,
		name:'洗板'
	},
	{
		id:5,
		name:'测试'
	},
	{
		id:6,
		name:'半成品送检'
	},
	{
		id:7,
		name:'首件制作'
	},
	{
		id:8,
		name:'首件验证'
	},
]

export default class ProcessListPage extends Component{
  constructor(props) {
    super(props);
    this.state = {ProcessListData: ProcessListData};
  }

  render() {
  	var itemLists = [];

  	for (var i =0 ; i <= ProcessListData.length - 1; i++) {
  		itemLists.push(
    		<TouchableHighlight key={ProcessListData[i].id} name={ProcessListData[i].name}
    		 onPress={this.chooseProcess.bind(this, ProcessListData[i].name)}>
    		<Text style={styles.item}>{ProcessListData[i].name}</Text>
    		</TouchableHighlight>
  		);
  	};
    return (
    	<ScrollView>
    		{itemLists}
    	</ScrollView>
      
    );
  }

  chooseProcess(msg){
  	this.props.navigator.pop();
  	this.props.callback(msg);
  }
};

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor:'red',
    flexDirection:'row',
  },
  titleStyle:
  {
  	borderColor:'red',
  	borderWidth:1,
  	justifyContent: 'center',
  	alignItems:'center',
  },
  item:{
  	flex:1,
  	borderColor:'red',
  	borderWidth:1,
  	justifyContent: 'center',
  	height:40,
  },
});