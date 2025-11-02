import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { TypographyShowcase } from './src/components/TypographyShowcase';
import { theme } from './src/config/theme';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TypographyShowcase />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default App;
