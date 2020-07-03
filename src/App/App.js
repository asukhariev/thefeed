import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from 'app/Routes/Routes';
import RNRestart from 'react-native-restart';
StatusBar.setBarStyle('dark-content', true);

const App = () => {
  useEffect(() => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  }, []);
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
