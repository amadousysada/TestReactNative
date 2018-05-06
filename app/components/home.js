'use strict';

import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, Image, Button,
    ActivityIndicator
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getCategories(); //call our action
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>

                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
                </View>
            );
        }
    }



    renderItem({item, index}) {
      console.log(item.name);
      const { navigate } = this.props.navigation;
      let url="";
      switch (item.name) {
        case "Boissons":
          url='http://parisistanbul41.fr/FR/autres_saveur/images%20saveurs/boisson.png';
          break;
        case "Sandwich":
          url='http://www.annarecetasfaciles.com/files/muffaletta-1-815x458.jpg';
          break;
        case "Snacks":
          url='http://blogs.plos.org/obesitypanacea/files/2016/04/snacks.jpg';
          break;
        default:
          break;
      }
        return (

            <View style={styles.row}>
              <TouchableHighlight style={styles.button} onPress={() => navigate('Details', { products: item.products,title: item.name })}>
                <Image
                  style={{width: 200, height: 100}}
                  source={{uri:url}}
                />

              </TouchableHighlight>
              <Text>{item.name}</Text>
            </View>
        )
    }
};




function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginLeft:50,
        marginRight:50,
        padding: 20
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    },
    te:{
      marginLeft:50,
    }
});
