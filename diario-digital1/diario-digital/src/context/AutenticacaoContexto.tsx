import { UsuarioTipo } from "@/types/Usuario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AutenticacaoContextoObjeto {
  usuarioContexto: UsuarioTipo | null;
  carregando: boolean;
  logarContexto: (dadosUsuario: UsuarioTipo) => Promise<void>;
  deslogarContexto: () => Promise<void>;
}

export const AutenticacaoContexto = createContext<
  AutenticacaoContextoObjeto | undefined
>(undefined);

export function AutenticacaoProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [usuarioContexto, setUsuarioContexto] =
    useState<UsuarioTipo | null>(null);

  const [carregando, setCarregando] = useState(true);

  // Recupera o usuário salvo no celular
  useEffect(() => {
    async function carregarSessaoSalva() {
      try {
        const sessaoSalva = await AsyncStorage.getItem(
          "@DiarioDigital:usuario"
        );

        if (sessaoSalva) {
          setUsuarioContexto(JSON.parse(sessaoSalva));
        }
      } catch (error) {
        console.log("Erro ao carregar usuário:", error);
      } finally {
        setCarregando(false);
      }
    }

    carregarSessaoSalva();
  }, []);

  // Salva o usuário no contexto e no AsyncStorage
  async function logarContexto(dadosUsuario: UsuarioTipo) {
    try {
      setUsuarioContexto(dadosUsuario);

      await AsyncStorage.setItem(
        "@DiarioDigital:usuario",
        JSON.stringify(dadosUsuario)
      );
    } catch (error) {
      console.log("Erro ao salvar usuário:", error);
    }
  }

  // Remove o usuário
  async function deslogarContexto() {
    try {
      setUsuarioContexto(null);

      await AsyncStorage.removeItem("@DiarioDigital:usuario");
    } catch (error) {
      console.log("Erro ao remover usuário:", error);
    }
  }

  return (
    <AutenticacaoContexto.Provider
      value={{
        usuarioContexto,
        carregando,
        logarContexto,
        deslogarContexto,
      }}
    >
      {children}
    </AutenticacaoContexto.Provider>
  );
}