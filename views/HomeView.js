import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import Button from "../components/Button";
import LinearGradient from "react-native-linear-gradient";

class HomeView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }} colors={["#4c669f", "#3b5998"]}>
        <View style={{ marginLeft: 10, marginRight: 20, marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 36, marginVertical: 15, color: "white" }}>
              Deixe o APP com sua cara.
            </Text>
            <Text style={{ marginBottom: 10, color: "white" }}>
              Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginBottom: 50 }}
          >
            <Button
              style={{ marginRight: 10 }}
              title="Fazer Login"
              onPress={() => navigation.push("Login")}
            />
            <Button
              title="Adicionar"
              onPress={() => navigation.push("Viagens")}
            />
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginVertical: 5 }}
          >
            <FlatList
              data={[
                { key: "0", title: "Minhas viagens", view: "Viagens" },
                { key: "1", title: "Comprar", view: "Comprar" },
                { key: "2", title: "Minha conta", view: "MinhaConta" }
              ]}
              renderItem={({ item }) => (
                <Text
                  style={{
                    color: "#ffffff",
                    fontWeight: "700",
                    marginVertical: 10,
                    fontSize: 18
                  }}
                  onPress={() => navigation.push(item.view)}
                >
                  {item.title}
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeView;
