import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AccessToken from '../services/AccessToken';
import baseurl from '../services/baseurl';
import Endurl from '../services/endurl';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const MainScreen = ({navigation}) => {
  const [newsData, setnewsData] = useState([]);
  const [textData, setTextData] = useState([]);

  const getData = () => {
    axios
      .get(`${baseurl}${Endurl.Headline}?country=us&apiKey=${AccessToken}`)
      .then(res => {
        setnewsData(res?.data?.articles);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const onSearch = () => {
    axios
      .get(`${baseurl}${Endurl.search}?q=${textData}&apiKey=${AccessToken}`)
      .then(res => setnewsData(res?.data?.articles))
      .catch(e => console.log(e));
  };

  useEffect(() => {
    if (textData == '') {
      getData();
    }
    getData();
  }, [textData]);

  const renderComponent = ({item}) => {
    console.log(item);
    return (
      <View style={style.renderView}>
        <Image style={style.imgStyle} source={{uri: item?.urlToImage}} />
        <View style={style.viewStyle}>
          <Text style={style.textStyle}>{item?.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={style.searchViews}>
        <TextInput
          style={style.searchStyle}
          value={textData}
          placeholder={'Search'}
          onChangeText={val => setTextData(val)}
        />
        <TouchableOpacity style={style.buttonSTyle} onPress={() => onSearch()}>
          <Text style={style.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={newsData}
          renderItem={renderComponent}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  renderView: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    borderWidth: 1,
  },
  imgStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewStyle: {
    position: 'absolute',
    bottom: 0,
  },
  searchStyle: {
    borderWidth: 1,
    width: 280,
    height: 40,
    paddingLeft: 20,
  },
  buttonSTyle: {
    borderRadius: 2,
    backgroundColor: 'grey',
    width: 100,
    height: 40,
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  searchViews: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
