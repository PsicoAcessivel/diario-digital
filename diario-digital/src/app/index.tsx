import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router, Href } from "expo-router";

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function Index() {
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

        <View style={estilos.cardTitulo}>
          <View style={estilos.logoContainer}>
            <Image
              source={require("../../assets/images/layout/logoPsicoAcessivel.png")}
              style={estilos.logo}
              resizeMode="contain"
            />

            <View>
              <Text style={estilos.bemVindo}>BEM-VINDO AO</Text>
              <Text style={estilos.titulo}>DIÁRIO DIGITAL</Text>
            </View>
          </View>
        </View>

        <Text style={estilos.subtitulo}>
          Seu espaço para registrar sentimentos, emoções e pensamentos.
        </Text>

        <View style={estilos.cardInfo}>
          <Text style={estilos.textoInfo}>
            Aqui você encontra um ambiente seguro para acompanhar seu humor,
            escrever sobre o seu dia e cuidar da sua saúde emocional.
          </Text>
        </View>

        <Text style={estilos.textoOpcao}>ACESSE UMA OPÇÃO</Text>

        <Pressable
          style={estilos.cardBotao}
          onPress={() => router.push("/login" as Href)}
        >
          <Text style={estilos.tituloBotao}>Entrar</Text>
          <Text style={estilos.subBotao}>Acesse sua conta.</Text>
        </Pressable>

        <Pressable
          style={estilos.cardBotao}
          onPress={() => router.push("/cadastro" as Href)}
        >
          <Text style={estilos.tituloBotao}>Criar conta</Text>
          <Text style={estilos.subBotao}>Faça seu cadastro.</Text>
        </Pressable>

        <Pressable
          style={estilos.cardBotao}
          onPress={() => router.push("/sobre" as Href)}
        >
          <Text style={estilos.tituloBotao}>Sobre o projeto</Text>
          <Text style={estilos.subBotao}>Conheça o Diário Digital.</Text>
        </Pressable>

        <Pressable
          style={estilos.cardBotao}
          onPress={() => router.push("/contato" as Href)}
        >
          <Text style={estilos.tituloBotao}>Contato</Text>
          <Text style={estilos.subBotao}>Fale com a equipe.</Text>
        </Pressable>

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
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 20,
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

  cardTitulo: {
    width: "100%",
    backgroundColor: Cores.cards,
    borderWidth: 2,
    borderColor: Cores.border2,
    borderRadius: 20,
    padding: 18,
    marginTop: 60,
    shadowColor: Cores.border2,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },

  bemVindo: {
    color: Cores.border2,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.logo,
    letterSpacing: 1,
  },

  titulo: {
    color: Cores.basic,
    fontSize: Fontes.grande2,
    fontFamily: Fontes.logo,
  },

  subtitulo: {
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    lineHeight: 24,
  },

  cardInfo: {
    width: "100%",
    backgroundColor: Cores.cards,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Cores.border2,
    padding: 18,
    marginBottom: 25,
    shadowColor: Cores.border2,
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },

  textoInfo: {
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
    textAlign: "center",
    lineHeight: 24,
  },

  textoOpcao: {
    color: Cores.border2,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseBold,
    alignSelf: "flex-start",
    marginBottom: 12,
  },

  cardBotao: {
    width: "100%",
    backgroundColor: Cores.cards,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Cores.border1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 14,
    shadowColor: Cores.border2,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  tituloBotao: {
    color: Cores.basic,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseBold,
  },

  subBotao: {
    color: Cores.basic,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseRegular,
    marginTop: 4,
    opacity: 0.85,
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
  },
});