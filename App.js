import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text-Clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native Session
      </Text>
      <TouchableHighlight
        onPress={() => {
          console.log("Image Tapped");
        }}
      >
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("Yes");
              },
            },
            {
              text: "No",
              onPress: () => {
                console.log("No");
              },
            },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
