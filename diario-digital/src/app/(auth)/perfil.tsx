import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router, Href } from "expo-router";

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";
import { useAutenticacao } from "@/hooks/use.Autenticacao";

export default function Perfil() {
  const { usuarioContexto, deslogar, deslogarContexto } = useAutenticacao();

  async function sair() {
    const retorno = await deslogar();

    if (retorno === "sucesso") {
      await deslogarContexto();

      router.replace("/login" as Href);
    }
  }

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

        <View style={estilos.card}>
          <Image
            source={require("../../../assets/images/layout/logoPsicoAcessivel.png")}
            style={estilos.foto}
            resizeMode="contain"
          />

          <Text style={estilos.titulo}>MEU PERFIL</Text>

          <Text style={estilos.subtitulo}>
            Informações da sua conta no Diário Digital.
          </Text>

          {/* Nome */}
          <View style={estilos.caixaInformacao}>
            <Text style={estilos.rotulo}>Nome</Text>
            <Text style={estilos.valor}>
              {usuarioContexto?.nome || "Usuário"}
            </Text>
          </View>

          {/* E-mail */}
          <View style={estilos.caixaInformacao}>
            <Text style={estilos.rotulo}>E-mail</Text>
            <Text style={estilos.valor}>
              {usuarioContexto?.email || "email@exemplo.com"}
            </Text>
          </View>

          {/* Botão sair */}
          <Pressable onPress={sair}>
            <LinearGradient
              colors={[Cores.border1, Cores.border2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={estilos.botao}
            >
              <Text style={estilos.textoBotao}>Sair da Conta</Text>
            </LinearGradient>
          </Pressable>
        </View>

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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "relative",
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
    zIndex: 1,
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
    zIndex: 1,
  },

  card: {
    width: "100%",
    backgroundColor: Cores.cards,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Cores.border2,
    padding: 24,
    elevation: 8,
    zIndex: 2,
  },

  foto: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 15,
  },

  titulo: {
    color: Cores.basic,
    fontSize: Fontes.grande1,
    fontFamily: Fontes.logo,
    textAlign: "center",
    marginBottom: 8,
  },

  subtitulo: {
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
    textAlign: "center",
    marginBottom: 25,
    opacity: 0.85,
  },

  caixaInformacao: {
    backgroundColor: Cores.fundo1,
    borderWidth: 1,
    borderColor: Cores.borderInput,
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
  },

  rotulo: {
    color: Cores.border2,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseBold,
    marginBottom: 4,
  },

  valor: {
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
  },

  botao: {
    width: "100%",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  textoBotao: {
    color: Cores.basic,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseBold,
  },
});