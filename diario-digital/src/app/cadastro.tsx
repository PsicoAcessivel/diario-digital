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
import { router, Href } from "expo-router";

import { UsuarioTipo } from "@/types/Usuario";
import { useAutenticacao } from "@/hooks/use.Autenticacao";
import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function Cadastro() {
  const [usuario, setUsuario] = useState<UsuarioTipo>({
    codigo: "",
    nome: "",
    email: "",
    senha: "",
  });

  const [confirmarSenha, setConfirmarSenha] = useState("");

  const autenticacao = useAutenticacao();

  async function salvar() {
    if (!usuario.nome || !usuario.email || !usuario.senha || !confirmarSenha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (usuario.senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    const retorno = await autenticacao.criarAutenticacaoUsuario(
      usuario.email,
      usuario.senha
    );

    if (retorno === "sucesso") {
      Alert.alert(
        "Cadastro realizado",
        `Seja bem-vindo(a), ${usuario.nome}!`,
        [
          {
            text: "OK",
            onPress: () => router.push("/login" as Href),
          },
        ]
      );
    } else {
      Alert.alert("Erro no cadastro", retorno);
    }
  }

  return (
    <SafeAreaView style={estilos.container}>
      <LinearGradient
        colors={[Cores.fundo2, Cores.fundo1]}
        style={estilos.fundo}
      >
        <LinearGradient
          colors={[Cores.border1, Cores.border2]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={estilos.bolhaTopo}
        />

        <View style={estilos.card}>
          <Text style={estilos.titulo}>CRIAR CONTA</Text>

          <Text style={estilos.subtitulo}>
            Cadastre-se para acessar o Diário Digital.
          </Text>

          <Text style={estilos.label}>Nome completo</Text>
          <TextInput
            style={estilos.input}
            placeholder="Digite seu nome"
            placeholderTextColor={Cores.basic}
            value={usuario.nome}
            onChangeText={(valor) =>
              setUsuario({ ...usuario, nome: valor })
            }
          />

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

          <Text style={estilos.label}>Confirmar senha</Text>
          <TextInput
            style={estilos.input}
            placeholder="Confirme sua senha"
            placeholderTextColor={Cores.basic}
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <Pressable onPress={salvar}>
            <LinearGradient
              colors={[Cores.border1, Cores.border2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={estilos.botao}
            >
              <Text style={estilos.textoBotao}>Cadastrar</Text>
            </LinearGradient>
          </Pressable>

          <Pressable onPress={() => router.push("/login" as Href)}>
            <Text style={estilos.link}>
              Já possui uma conta?{" "}
              <Text style={estilos.linkDestaque}>Entrar</Text>
            </Text>
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
    marginBottom: 10,
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

  link: {
    color: Cores.basic,
    textAlign: "center",
    marginTop: 18,
    fontSize: Fontes.medio1,
    fontFamily: Fontes.baseRegular,
  },

  linkDestaque: {
    color: Cores.border2,
    fontFamily: Fontes.baseBold,
  },
});