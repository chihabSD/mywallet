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
import countries from '../helpers/countries.json';
import LinearGradient from 'react-native-linear-gradient';
const CountriesModal = ({
  toggleModal,
  modalVisible,
  handleSelectedCountries,
}) => {
  const [search, setSearch] = useState('');
  const [currentCharacterCount, setCurrentCharacterCounter] = useState(0);
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(null);
  const handleKeyword = text => {
    setSearch(text);
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <View style={{height: 120, paddingTop: 10}}>
          <Header title="Countries" onPress={toggleModal} close={true} />
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{backgroundColor: 'grey', padding: 0, margin: 15}}>
            <TextInput
              onChangeText={text => handleKeyword(text)}
              autoCorrect={false}
              value={search}
              placeholder="search for currency"
              style={{backgroundColor: '#f1f1f1', padding: 10}}
            />
          </View>

          <ScrollView style={{height: 100}}>
            <View style={{paddingHorizontal: 20}}>
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
                    key={country.name}
                    style={{
                      marginBottom: 10,
                      borderTopWidth: 1,
                      paddingTop: 10,
                      marginTop: 10,
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
