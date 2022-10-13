import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image } from 'react-native';

export default function UserScreen() {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const Item = item => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 20, backgroundColor: 'orange', padding: 20, borderRadius: 20 }}>
        <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, borderRadius: 20, marginRight: 20 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ color: 'white', marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>{item.name}{item.lname}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, marginTop: 20 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Item
            name={item.first_name}
            lname={item.last_name}
            picture={item.avatar}
            email={item.email}
          />
        )}
      />
    </View>
  );
};