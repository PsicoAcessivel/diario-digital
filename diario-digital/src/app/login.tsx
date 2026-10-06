import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router, Href } from "expo-router";

import { UsuarioTipo } from "@/types/Usuario";
import { useAutenticacao } from "@/hooks/use.Autenticacao";
import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function Login() {
  const [usuario, setUsuario] = useState<UsuarioTipo>({
    codigo: "",
    nome: "",
    email: "",
    senha: "",
  });

  const { validarUsuario, logarContexto } = useAutenticacao();

  async function entrar() {
    if (!usuario.email || !usuario.senha) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, informe o e-mail e a senha."
      );
      return;
    }

    const retorno = await validarUsuario(usuario.email, usuario.senha);

    if (retorno === "sucesso") {
      await logarContexto(usuario);

      router.replace("/(auth)/registros" as Href);
    } else {
      Alert.alert("Falha no login", retorno);
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

        {/* Card principal */}
        <View style={estilos.card}>
          <Image
            source={require("../../assets/images/layout/logoPsicoAcessivel.png")}
            style={estilos.logo}
            resizeMode="contain"
          />

          <Text style={estilos.titulo}>ENTRAR</Text>

          <Text style={estilos.subtitulo}>
            Faça login para acessar seu Diário Digital.
          </Text>

          {/* E-mail */}
          <Text style={estilos.label}>E-mail</Text>
          <TextInput
            style={estilos.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor={Cores.basic}
            keyboardType="email-address"
            autoCapitalize="none"
            value={usuario.email}
            onChangeText={(valor) =>
              setUsuario({ ...usuario, email: valor })
            }
          />

          {/* Senha */}
          <Text style={estilos.label}>Senha</Text>
          <TextInput
            style={estilos.input}
            placeholder="Digite sua senha"
            placeholderTextColor={Cores.basic}
            secureTextEntry
            value={usuario.senha}
            onChangeText={(valor) =>
              setUsuario({ ...usuario, senha: valor })
            }
          />

          <Pressable>
            <Text style={estilos.esqueciSenha}>Esqueci minha senha</Text>
          </Pressable>

          {/* Botão Entrar */}
          <Pressable onPress={entrar}>
            <LinearGradient
              colors={[Cores.border1, Cores.border2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={estilos.botao}
            >
              <Text style={estilos.textoBotao}>Entrar</Text>
            </LinearGradient>
          </Pressable>

          <View style={estilos.separador}>
            <View style={estilos.linha} />
            <Text style={estilos.textoSeparador}>OU</Text>
            <View style={estilos.linha} />
          </View>

          {/* Google */}
          <Pressable style={estilos.botaoGoogle}>
            <Text style={estilos.textoGoogle}>Entrar com Google</Text>
          </Pressable>

          {/* Criar conta */}
          <Pressable
            onPress={() => router.push("/cadastro" as Href)}
          >
            <Text style={estilos.link}>
              Ainda não possui uma conta?{" "}
              <Text style={estilos.linkDestaque}>Criar conta</Text>
            </Text>
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

  logo: {
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
    marginBottom: 10,
  },

  esqueciSenha: {
    color: Cores.border2,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseRegular,
    textAlign: "right",
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

  separador: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: Cores.borderInput,
  },

  textoSeparador: {
    color: Cores.basic,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseRegular,
    marginHorizontal: 10,
  },

  botaoGoogle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Cores.basic,
    borderRadius: 16,
    paddingVertical: 14,
    marginBottom: 20,
  },

  textoGoogle: {
    color: Cores.fundo2,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseBold,
  },

  link: {
    textAlign: "center",
    color: Cores.basic,
    fontSize: Fontes.pequeno,
    fontFamily: Fontes.baseRegular,
  },

  linkDestaque: {
    color: Cores.border2,
    fontFamily: Fontes.baseBold,
  },
});