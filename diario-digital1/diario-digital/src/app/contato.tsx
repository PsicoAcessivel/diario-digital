import { LinearGradient } from "expo-linear-gradient";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function Contato() {
  function enviarMensagem() {
    Alert.alert("Mensagem enviada!", "Obrigado por entrar em contato conosco.");
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
          <Text style={estilos.titulo}>CONTATO</Text>

          <Text style={estilos.subtitulo}>
            Tem alguma dúvida, sugestão ou encontrou algum problema? Entre em
            contato com a equipe do Diário Digital.
          </Text>

          <Text style={estilos.label}>Nome</Text>
          <TextInput
            style={estilos.input}
            placeholder="Digite seu nome"
            placeholderTextColor={Cores.basic}
          />

          <Text style={estilos.label}>E-mail</Text>
          <TextInput
            style={estilos.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor={Cores.basic}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={estilos.label}>Mensagem</Text>
          <TextInput
            style={estilos.inputMensagem}
            placeholder="Escreva sua mensagem..."
            placeholderTextColor={Cores.basic}
            multiline
            textAlignVertical="top"
          />

          <Pressable onPress={enviarMensagem}>
            <LinearGradient
              colors={[Cores.border1, Cores.border2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={estilos.botao}
            >
              <Text style={estilos.textoBotao}>Enviar mensagem</Text>
            </LinearGradient>
          </Pressable>
        </View>

        <View style={estilos.cardInfo}>
          <Text style={estilos.tituloInfo}></Text>

          <Text style={estilos.textoInfo}>
           
          </Text>

          <Text style={estilos.textoInfo}>
         
          </Text>

          <Text style={estilos.textoInfo}>
     
          </Text>
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
    opacity: 1,
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
    opacity: 1,
      zIndex: -1,
  elevation: 0,
  },

  card: {
    width: "100%",
    backgroundColor: Cores.fundo1,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Cores.border2,
    padding: 24,
    marginBottom: 18,
    elevation: 8,
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
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseRegular,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },

  label: {
    color: Cores.basic,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseBold,
    marginBottom: 6,
    marginTop: 10,
  },

  input: {
    backgroundColor: Cores.fundo1,
    borderWidth: 1,
    borderColor: Cores.borderInput,
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 13,
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
  },

  inputMensagem: {
    backgroundColor: Cores.fundo1,
    borderWidth: 1,
    borderColor: Cores.borderInput,
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 13,
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
    height: 120,
    marginBottom: 20,
  },

  botao: {
    width: "100%",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: Cores.basic,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseBold,
  },

  cardInfo: {
    width: "100%",
    backgroundColor: Cores.cards,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Cores.border2,
    padding: 18,
    elevation: 5,
  },

  tituloInfo: {
    color: Cores.border2,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseBold,
    marginBottom: 12,
  },

  textoInfo: {
    color: Cores.basic,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseRegular,
    marginBottom: 8,
    lineHeight: 20,
  },
});