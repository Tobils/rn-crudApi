import React from 'react';
import {ScrollView, View} from 'react-native';
import CallApi from './pages/callAPI';
import CallApiAxios from './pages/callAxios';

const App = () => {
  return (
    <ScrollView>
      {/* <CallApi></CallApi> */}
      <CallApiAxios />
    </ScrollView>
  );
};
export default App;
