import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/localization';
import Home from './src/screens/Home';

const App = () => {
  return (
    // Keeps content away from the notch and system bars
    <SafeAreaProvider>
      {/* White status bar icons */}
      <StatusBar style="light" />
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
