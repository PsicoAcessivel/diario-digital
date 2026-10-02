import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function Registrar() {
  const [titulo, setTitulo] = useState("");
  const [registro, setRegistro] = useState("");

  function salvarRegistro() {
    if (!titulo || !registro) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha o título e escreva seu registro."
      );
      return;
    }

    Alert.alert("Registro salvo!", "Seu registro foi salvo com sucesso.");

    setTitulo("");
    setRegistro("");
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
          <Text style={estilos.titulo}>NOVO REGISTRO</Text>

          <Text style={estilos.subtitulo}>
            Escreva como você está se sentindo hoje.
          </Text>

          <Text style={estilos.label}>Título</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex.: Como foi meu dia..."
            placeholderTextColor={Cores.basic}
            value={titulo}
            onChangeText={setTitulo}
          />

          <Text style={estilos.label}>Registro</Text>
          <TextInput
            style={estilos.inputGrande}
            placeholder="Escreva aqui seus sentimentos, emoções e pensamentos..."
            placeholderTextColor={Cores.basic}
            multiline
            textAlignVertical="top"
            value={registro}
            onChangeText={setRegistro}
          />

          <Pressable onPress={salvarRegistro}>
            <LinearGradient
              colors={[Cores.border1, Cores.border2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={estilos.botao}
            >
              <Text style={estilos.textoBotao}>Salvar Registro</Text>
            </LinearGradient>
          </Pressable>
        </View>

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

  label: {
    color: Cores.basic,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseBold,
    marginBottom: 6,
    marginTop: 12,
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

  inputGrande: {
    backgroundColor: Cores.fundo1,
    borderWidth: 1,
    borderColor: Cores.borderInput,
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: Cores.basic,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
    height: 180,
    marginBottom: 20,
  },

  botao: {
    width: "100%",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: Cores.basic,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseBold,
  },
});