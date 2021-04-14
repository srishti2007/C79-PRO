import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import db from "../config";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      allRequests: [],
    };
    this.requestRef = null;
  }

  getAllRequests = () => {
    this.requestRef = db
      .collection("exchange_requests")
      .onSnapshot((snapshot) => {
        var allRequests = [];
        snapshot.forEach((doc) => {
          allRequests.push(doc.data());
        });
        this.setState({
          allRequests: allRequests,
        });
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    console.log(item.item_name);
    return (
      <ListItem key={i} bottomDivider>
        rightElement={
          <TouchableOpacity><Text>VIEW</Text></TouchableOpacity>
        }
        <ListItem.Content>
         
          <ListItem.Title>{item.item_name}</ListItem.Title>
          <ListItem.Subtitle>{item.item_description}</ListItem.Subtitle>

        </ListItem.Content>
      </ListItem>
    );
  };
  componentDidMount() {
    this.getAllRequests();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "rgb(236, 236, 236)" }}>
        <View style={{ flex: 1 }}>
          {this.state.allRequests.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Barter</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allRequests}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontColor: "black",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
