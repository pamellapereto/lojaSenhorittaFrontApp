import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { ipnode } from "../../../config/ip";
import { styles } from "../css/Styles";

export default function Content(props: any) {
  const { idusuario } = props;

  const [carregando, setCarregando] = useState(true);

  const [itensCarrinho, setItensCarrinho] = useState([
    {
      idcarrinho: "",
      idusuario: "",
      chavecarrinho: "",
      idproduto: "",
      nomeproduto: "",
      preco: "",
      quantidade: "",
      subtotal: "",
    },
  ]);

  useEffect(() => {
    fetch(`${ipnode}/api/usuarios/carrinho/3`)
      .then((response) => response.json())

      .then((rs) => {
        setItensCarrinho(rs.output);
        setCarregando(false);
        console.log(rs.output);
      })

      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      {carregando ? (
        <ActivityIndicator size={30} color="#000" />
      ) : (
        <View>
          <ScrollView horizontal={false}>
            {itensCarrinho.map((itens, ix) => (
              <View
                key={ix}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  padding: 10,
                  borderBottomWidth: 1,
                  borderColor: "silver",
                }}
              >
                <View style={{ flexDirection: "column", flex: 1 }}>
                  <Text style={styles.produto}>
                    Produto: {itens.nomeproduto}
                  </Text>

                  <Text style={styles.preco}>Preço: R$ {itens.preco}</Text>

                  <Text style={styles.preco}>
                    Subtotal: R$ {itens.subtotal}
                  </Text>

                  <TouchableOpacity
                    style={styles.btnRemoverCarrinho}
                    onPress={() => alert("Removido do carrinho")}
                  >
                    <Text style={styles.txtCarrinho}>
                      <AntDesign name="delete" size={24} color="white" />
                      Remover
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.quantidade}>
                    Quantidade: - {itens.quantidade} +
                  </Text>
                </View>
              </View>
            ))}

            <TouchableOpacity
              style={styles.btnFecharPedido}
              onPress={() => alert("Concluir o pedido")}
            >
              <Text style={styles.txtFecharPedido}>Concluir o pedido</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
