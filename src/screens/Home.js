import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FeaturesItems from '../components/FeaturesItems';
import HomeHeader from '../components/HomeHeader';
import PromoItems from '../components/PromoItems';
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {featuresData, specialPromoData} from '../helpers/data';
import {useRedux} from '../hooks/useRedux';
import {unauthenticate} from '../redux/reducers/login';

const Home = () => {
  const {dispatch} = useRedux();
  const [features, setFeatures] = React.useState(featuresData);
  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);

  function renderFeatures() {
    const Header = () => (
      <View style={{marginBottom: SIZES.padding * 2}}>
        <Text style={{...FONTS.h3}}>Features</Text>
      </View>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => `${item.id}`}
        renderItem={FeaturesItems}
        style={{marginTop: SIZES.padding * 2}}
      />
    );
  }

  function renderPromos() {
    const HeaderComponent = () => (
      <View>
        <HomeHeader />
        {/* {renderBanner()} */}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    );

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: SIZES.padding,
        }}>
        <TouchableOpacity
          onPress={() => dispatch(unauthenticate())}
          style={{flex: 1}}>
          <Text style={{...FONTS.h3}}>Special Promos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('View All')}>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>View All</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={specialPromos}
        keyExtractor={item => `${item.id}`}
        renderItem={PromoItems}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{marginBottom: 80}}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default Home;
