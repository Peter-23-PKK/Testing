import { useEffect, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';


const App = () => {
  const [users, SetUsers] = useState([]);


  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => {
        SetUsers(json.data);
      });
  });

  return (
    <View style={{ padding: 25, marginTop: 25 }}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", marginVertical: 20, backgroundColor: 'pink', padding: 20, borderRadius: 20 }}>
            <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50, borderRadius: 20, marginRight: 20 }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: 'white', marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>{item.first_name}{item.last_name}</Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
  
export default App;
