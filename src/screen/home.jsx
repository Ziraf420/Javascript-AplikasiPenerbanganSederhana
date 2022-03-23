import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { JADWAL, MASKAPAI, BANDARA } from "../utl/data";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const Home = ({ navigation }) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");

  const departureRef = useRef("");
  const arrivalRef = useRef("");

  const onSubmit = () => {
    let newDeparture;
    // let lowDeparture = departure.toLowerCase();
    console.log(departure);
    for (const [key, value] of Object.entries(BANDARA)) {
      if (value.bandara_nama === departure) {
        newDeparture = key;
        break;
      }
    }

    let newArrival;
    for (const [key, value] of Object.entries(BANDARA)) {
      if (value.bandara_nama === arrival) {
        newArrival = key;
        break;
      }
    }

    navigation.navigate("Detail", {
      departure: newDeparture,
      arrival: newArrival,
      date: date,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <Input
                type="text"
                // ref={arrivalRef}
                value={departure}
                // onChange={e => setDeparture(e.target.value)}
                onChangeText={setDeparture}
                placeholder="Lokasi Keberangkatan"
                label="Lokasi Keberangkatan"
                autoCompleteType={undefined}
                leftIcon={
                  <FontAwesome
                    name="plane-departure"
                    size={20}
                    color="#88b454"
                  />
                }
                leftIconContainerStyle={{
                  padding: 10,
                }}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Input
                // ref={arrivalRef}
                value={arrival}
                // onChange={e => setArrival(e.target.value)}
                onChangeText={setArrival}
                placeholder="Lokasi Tujuan"
                label="Lokasi Tujuan"
                autoCompleteType={undefined}
                leftIcon={
                  <FontAwesome name="plane-arrival" size={20} color="#88b454" />
                }
                leftIconContainerStyle={{
                  padding: 10,
                }}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Input
                type="text"
                value={date}
                onChangeText={setDate}
                autoCompleteType={undefined}
                placeholder="Masukan Tanggal Keberangkatan"
                label="Tanggal Keberangkatan"
                leftIcon={
                  <FontAwesome name="calendar-alt" size={20} color="#88b454" />
                }
                leftIconContainerStyle={{
                  padding: 10,
                }}
              />
            </View>
            <View style={styles.fieldContainer}>
              {/* <Button title="Cari" style={styles.button} onPress={onSubmit}/> */}
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.textButton}>Cari</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.copyright}>
          <Text>Copyright Muhammad Fariz Luthfi - 119140199</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#88b454",
  },
  screenContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  formContainer: {
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    paddingTop: 30,
    borderRadius: 15,
    // height: '150%',
  },
  fieldContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingTop: 2,
  },
  button: {
    backgroundColor: "orange",
    color: "orange",
    borderRadius: 15,
    height: 40,
    alignItems: "center",
    padding: 10,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  copyright: {
    marginTop: 100,
    alignItems: "center",
  },
});

export default Home;
