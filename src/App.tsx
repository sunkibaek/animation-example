import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import Item from "./Item";

const DATA: string[] = new Array(100)
  .fill(undefined)
  .map((_, index) => String(index));

const NUM_COLUMNS = 5;

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const { width } = useWindowDimensions();
  const dimension = width / NUM_COLUMNS;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <FlatList<string>
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        data={DATA}
        numColumns={NUM_COLUMNS}
        renderItem={({ item }) => (
          <Item key={item} content={item} dimension={dimension} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
