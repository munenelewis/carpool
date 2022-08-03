import {Text, View} from 'react-native';

import CardHolder from '../../components/cardHolder';
import ContentLayout from '../../components/cardLayout';
import Notification from '../../components/notifications';
import React from 'react';
import Search from '../../components/search';

const HomeScreen: React.FC = () => {
  return (
    <ContentLayout>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '70%', flex: 1}}>
          <Search />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
          }}>
          <Notification />
        </View>
      </View>
      <View style={{width: '100%', height: '50%', padding: 10}}>
        <CardHolder />
        <CardHolder />
        <CardHolder />
        <CardHolder />
        <CardHolder />
        <CardHolder />
        <CardHolder />
      </View>
    </ContentLayout>
  );
};

export default HomeScreen;
