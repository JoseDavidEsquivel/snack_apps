
import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={[styles.container, {flex:4, flexDirection: "row"}]}>
        <View style={[styles.container, {flex:1, backgroundColor:"yellow"}]}>
        </View>
        <View style={[styles.container, {flex:7, flexDirection: "column"}]}>
          <View style={[styles.container, {flex:3, flexDirection: "row"}]}>
            <View style={[styles.container, {flex:7, backgroundColor:"darkred"}]}/>
            <View style={[styles.container, {flex:5, backgroundColor:"blue"}]}/>
          </View>
          <View style={[styles.container, {flex:1, flexDirection: "row"}]}>
            <View style={[styles.container, {flex:5, backgroundColor:"yellow"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"orange"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"yellow"}]}/>
          </View>
        </View>
      </View>
      <View style={[styles.container, {flex:6, flexDirection: "row"}]}>
        <View style={[styles.container, {flex:5, flexDirection: "column"}]}>
          <View style={[styles.container, {flex:1, flexDirection: "row"}]}>
            <View style={[styles.container, {flex:1, backgroundColor:"cyan"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"darkred"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"red"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"darkred"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"red"}]}/>
          </View>
          <View style={[styles.container, {flex:5, flexDirection: "row"}]}>
            <View style={[styles.container, {flex:1, backgroundColor:"blue"}]}/>
          </View>
            
        </View>
        <View style={[styles.container, {flex:1, flexDirection: "column"}]}>
            <View style={[styles.container, {flex:1, backgroundColor:"cyan"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"yellow"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"orange"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"yellow"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"violet"}]}/>
            <View style={[styles.container, {flex:1, backgroundColor:"orange"}]}/>
        </View>
        <View style={[styles.container, {flex:2, flexDirection: "row"}]}>
            <View style={[styles.container, {flex:1, backgroundColor:"darkred"}]}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 2,
  },
  imagen: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});



export default Flex;
