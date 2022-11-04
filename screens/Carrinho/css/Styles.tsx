import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    flex: 2,
    marginTop: 29,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  titulo: {
    fontSize: 20,
    color: "white",
    fontweight: "bold",
  },

  btnCarrinho: {
    padding: 20,
    backgroundColor: "#600",
    margin: 20,
    borderRadius: 50,
  },

  txtCarrinho: {
    fontSize: 15,
    color: "white",
    fontweight: "bold",
    textAlign: "center",
  },

  btnRemoverCarrinho: {
    backgroundColor: "red",
    width: 200,
    padding: 5,
    borderRadius: 10,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
  },

  produto: {
    padding: 15,
    fontSize: 15,
    fontWeight: "bold",
  },

  preco: {
    paddingLeft: 28,
    paddingBottom: 15,
    color: "#900",
    fontSize: 15,
    fontWeight: "bold",
  },

  quantidade: {
    paddingBottom: 15,
    fontSize: 15,
    color: "darkblue",
    fontWeight: "bold",
  },

  btnFecharPedido: {},

  txtFecharPedido: {},
});
