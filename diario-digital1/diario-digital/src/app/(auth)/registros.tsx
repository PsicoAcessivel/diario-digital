import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function Registros() {
  const registros = [
    {
      id: "1",
      titulo: "Hoje foi um bom dia",
      data: "26/09/2026",
      texto: "Consegui estudar bastante e me senti mais tranquilo durante o dia.",
    },
    {
      id: "2",
      titulo: "Dia cansativo",
      data: "24/09/2026",
      texto: "Hoje fiquei um pouco ansioso por causa das atividades da escola.",
    },
    {
      id: "3",
      titulo: "Momento de gratidão",
      data: "20/09/2026",
      texto: "Passei um tempo com minha família e isso me deixou mais feliz.",
    },
  ];

  return (
    <SafeAreaView style={estilos.container}>
      <LinearGradient
        colors={[Cores.fundo2, Cores.fundo1]}
        style={estilos.fundo}
      >
        {/* Bolha superior */}
        <LinearGradient
          colors={[Cores.border1, Cores.border2]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={estilos.bolhaTopo}
        />

        <ScrollView
          contentContainerStyle={estilos.conteudo}
          showsVerticalScrollIndicator={false}
        >
          <Text style={estilos.titulo}>MEUS REGISTROS</Text>

          <Text style={estilos.subtitulo}>
            Aqui estão os registros que você escreveu no Diário Digital.
          </Text>

          {registros.map((item) => (
            <View key={item.id} style={estilos.card}>
              <Text style={estilos.data}>{item.data}</Text>

              <Text style={estilos.tituloCard}>{item.titulo}</Text>

              <Text style={estilos.textoCard}>{item.texto}</Text>

              <Pressable style={estilos.botaoLer}>
                <Text style={estilos.textoBotaoLer}>Ler registro</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        {/* Bolha inferior */}
        <LinearGradient
          colors={[Cores.border2, Cores.border1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={estilos.bolhaBaixo}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.fundo2,
  },

  fundo: {
    flex: 1,
  },

  conteudo: {
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 100,
  },

  bolhaTopo: {
    position: "absolute",
    top: -70,
    left: -60,
    width: 230,
    height: 180,
    borderBottomRightRadius: 170,
    borderBottomLeftRadius: 90,
    borderTopRightRadius: 80,
    opacity: 0.8,
  },

  bolhaBaixo: {
    position: "absolute",
    bottom: -70,
    right: -60,
    width: 230,
    height: 180,
    borderTopLeftRadius: 170,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 80,
    opacity: 0.8,
    zIndex: -1,
  },

  titulo: {
    color: Cores.basic,
    fontSize: Fontes.grande1,
    fontFamily: Fontes.logo,
    textAlign: "center",
    marginBottom: 10,
  },

  subtitulo: {
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
    textAlign: "center",
    marginBottom: 25,
    opacity: 0.85,
  },

  card: {
    backgroundColor: Cores.cards,
    borderWidth: 2,
    borderColor: Cores.border2,
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },

  data: {
    color: Cores.border1,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseBold,
    marginBottom: 6,
  },

  tituloCard: {
    color: Cores.basic,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseBold,
    marginBottom: 10,
  },

  textoCard: {
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
    lineHeight: 22,
    marginBottom: 16,
  },

  botaoLer: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: Cores.border2,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },

  textoBotaoLer: {
    color: Cores.border2,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseBold,
  },
});