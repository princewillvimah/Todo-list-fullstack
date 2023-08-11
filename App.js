import { StatusBar as expoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NativeBaseProvider} from 'native-base'
import Toast from 'react-native-toast-message';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Main from './Main';
const queryClient = new QueryClient()
export default function App() {

  return (
  <QueryClientProvider client={queryClient}>
   <NativeBaseProvider>
    <Main/>
    <Toast />
   </NativeBaseProvider>
  </QueryClientProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
  },
});
