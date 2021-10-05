import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
  Modal,
} from 'react-native';
import Header from '../components/Header';
import {COLORS, FONTS} from '../constants';
// import {useModals} from '../hooks/useModals';
// import {useRedux} from '../hooks/useRedux';
// import appFonts from '../../styles/appFonts';
import countries from '../helpers/countries.json';
import LinearGradient from 'react-native-linear-gradient';
const CountriesModal = ({
  //   toggleCurrencyModal,
  //   currencyModal,
  toggleModal,
  modalVisible,
  handleSelectedCountries,
}) => {
  // const {authModal} =    useModals()
  const [search, setSearch] = useState('');
  const [currentCharacterCount, setCurrentCharacterCounter] = useState(0);
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(null);

  const handleKeyword = text => {
    // console.warn(text);
    // setCurrentCharacterCounter(currentCharacterCount + 1);
    setSearch(text);

    // console.warn(currentCharacterCount);
    if (currentCharacterCount > 1) {
      console.warn('X');
    } else {
      console.warn('Y');
    }
    // const formattedQuery = text.toLowerCase();
    // console.warn(formattedQuery);
    // const filteredData = filter(currency, user => {
    //   return contains(user, formattedQuery);
    // });
    // setData(filteredData);
    setTimeout(() => {
      setCurrentCharacterCounter(0);
    }, 4000);
    // setQuery(text);
  };
  //   useEffect(() => {
  //     // console.warn(search.length);
  //     if (search.length === 0) {
  //       return null;
  //     }
  //     setCurrentCharacterCounter(currentCharacterCount + 1);
  //   }, [search]);
  return (
    <Modal
      animationType="slide"
      //   transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}

      // isVisible={true} style={{margin: 0}}
    >
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <View style={{height: 120, paddingTop: 10}}>
          <Header title="Countries" onPress={toggleModal} close={true} />
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* <TryAgainText>CloSE</TryAgainText> */}
          <View style={{backgroundColor: 'grey', padding: 0, margin: 15}}>
            <TextInput
              onChangeText={text => handleKeyword(text)}
              autoCorrect={false}
              value={search}
              placeholder="search for currency"
              style={{backgroundColor: '#f1f1f1', padding: 10}}
            />
          </View>

          {/* "name": "Tuvalu",
        "flag": "🇹🇻",
        "code": "TV",
        "dial_code": "+688" */}
          <ScrollView style={{height: 100}}>
            <View style={{paddingHorizontal: 20}}>
              {/* {currency.filter(({name}) => name.indexOf(search.toLocaleLowerCase()) > -1)} */}
              {countries
                .filter(
                  ({name}) => name.indexOf(search.toLocaleLowerCase()) > -1,
                )
                .map(country => (
                  <TouchableOpacity
                    onPress={() => {
                      handleSelectedCountries(country);
                      toggleModal();
                    }}
                    //   onPress={() => console.warn(country)}
                    key={country.name}
                    style={{
                      // flexDirection: 'row',
                      marginBottom: 10,
                      borderTopWidth: 1,
                      paddingTop: 10,
                      //   paddingBottom: 10,
                      marginTop: 10,
                      // alignItems: 'center',
                      borderTopColor: '#f1f1f1',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{marginRight: 5}}>{country.flag}</Text>
                      <Text>{country.name}</Text>
                    </View>
                    <Text
                      style={{...FONTS.body3, color: 'grey', marginRight: 10}}>
                      {country.dial_code}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default CountriesModal;
