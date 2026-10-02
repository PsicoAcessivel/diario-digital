import { useContext } from "react";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { autenticacao } from "@/services/Firebase";
import { AutenticacaoContexto } from "@/context/AutenticacaoContexto";

export function useAutenticacao() {
  // Recupera o contexto da autenticação
  const autenticacaoContexto = useContext(AutenticacaoContexto);

  // Verifica se o Provider está envolvendo a aplicação
  if (autenticacaoContexto === undefined) {
    throw new Error("Falta o <AutenticacaoProvider> na aplicação!");
  }

  const {
    usuarioContexto,
    carregando,
    logarContexto,
    deslogarContexto,
  } = autenticacaoContexto;

  // Cadastro do usuário
  const criarAutenticacaoUsuario = async (
    email: string,
    senha: string
  ): Promise<string> => {
    let retorno = "sucesso";

    try {
      await createUserWithEmailAndPassword(
        autenticacao,
        email,
        senha
      );
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            retorno = "E-mail já cadastrado.";
            break;

          case "auth/invalid-email":
            retorno = "E-mail inválido.";
            break;

          case "auth/weak-password":
            retorno = "A senha deve ter pelo menos 6 caracteres.";
            break;

          default:
            retorno = `Erro: ${error.message}`;
            break;
        }
      } else {
        retorno = `Erro inesperado: ${error}`;
      }
    }

    return retorno;
  };

  // Login do usuário
  const validarUsuario = async (
    email: string,
    senha: string
  ): Promise<string> => {
    let retorno = "sucesso";

    try {
      await signInWithEmailAndPassword(
        autenticacao,
        email,
        senha
      );
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            retorno = "E-mail ou senha incorretos.";
            break;

          default:
            retorno = `Erro: ${error.message}`;
            break;
        }
      } else {
        retorno = `Erro inesperado: ${error}`;
      }
    }

    return retorno;
  };

  // Logout
  const deslogar = async (): Promise<string> => {
    let retorno = "sucesso";

    try {
      await signOut(autenticacao);
    } catch (error) {
      if (error instanceof FirebaseError) {
        retorno = `Erro ao sair: ${error.message}`;
      } else {
        retorno = `Erro inesperado: ${error}`;
      }
    }

    return retorno;
  };

  return {
    criarAutenticacaoUsuario,
    validarUsuario,
    deslogar,
    logarContexto,
    deslogarContexto,
    usuarioContexto,
    carregando,
  };
}