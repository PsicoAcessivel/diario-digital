import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack, useRouter, useSegments, Href } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AutenticacaoProvider } from "@/context/AutenticacaoContexto";
import { useAutenticacao } from "@/hooks/use.Autenticacao";
import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

SplashScreen.preventAutoHideAsync();

function Validacoes() {
  const { usuarioContexto, carregando } = useAutenticacao();

  const router = useRouter();
  const segments = useSegments();

  // Carrega as fontes
  const [fontsLoaded] = useFonts({
    HappyMonkeyRegular: require("../../assets/fonts/HappyMonkey-Regular.ttf"),
    Inter24ptRegular: require("../../assets/fonts/Inter_24pt-Regular.ttf"),
    Inter18Bold: require("../../assets/fonts/Inter_18pt-Bold.ttf"),
  });

  // Fecha a Splash Screen quando tudo carregar
  useEffect(() => {
    if (fontsLoaded && !carregando) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, carregando]);

  // Proteção das rotas
  useEffect(() => {
    if (!fontsLoaded || carregando) return;

    const grupoProtegido = segments[0] === "(auth)";

    // Usuário não logado tentando acessar área protegida
    if (!usuarioContexto && grupoProtegido) {
      router.replace("/" as Href);
    }

    // Usuário logado tentando voltar para páginas públicas
    if (usuarioContexto && !grupoProtegido) {
      router.replace("/registros" as Href);
    }
  }, [usuarioContexto, fontsLoaded, carregando, segments, router]);

  // Enquanto carrega as fontes ou a sessão
  if (!fontsLoaded || carregando) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <Stack screenOptions={{ headerShown: false }}>
        {/* Páginas públicas */}
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="sobre" />
        <Stack.Screen name="contato" />

        {/* Grupo protegido */}
        <Stack.Screen name="(auth)" />
      </Stack>
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <AutenticacaoProvider>
      <Validacoes />
    </AutenticacaoProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.fundo2,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  texto: {
    color: Cores.basic,
    fontSize: Fontes.medio2,
    fontFamily: Fontes.baseRegular,
    textAlign: "center",
  },
});