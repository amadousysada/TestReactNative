import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, Image, Alert } from 'react-native';

export default class Details extends Component {



  constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
}
static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,

    });

  render() {
    const { params } = this.props.navigation.state;
    const products = params ? params.products : null;

            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <FlatList
                        ref='listRef'
                        data={products}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
                </View>
            );
}

  renderItem({item, index}) {
        return (
            <View style={styles.row}>
            <TouchableHighlight style={styles.button} onPress={() => this.onPress(item)}>
              <Image
                style={{width: 200, height: 100}}
                source={{uri:item.image}}
              />

            </TouchableHighlight>
                <Text style={styles.title}>
                    {item.name}
                </Text>
            </View>
        )
}
 onPress = (item) => {
   Alert.alert(
     item.name,
     'Prix :' +item.price,
     [
       {text: 'OK', onPress: () => {}},
     ],
     { cancelable: false }
   )
 }


}

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
