import { useState } from 'react'
import { router } from 'expo-router'
import { Text, StyleSheet, TextInput, Pressable, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { UsuarioTipo } from '@/types/Usuario'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { useAutenticacao } from '@/hooks/useAutenticacao'

export default function index() {

  const [usuario, setUsuario] = useState<UsuarioTipo>(
    {codigo: '', nome: '', email: '', senha: '', permissao: 'usuario'}
  )

  const {validarUsuario, logarContexto} = useAutenticacao()

  const verificarUsuario = async () => {

        if (!usuario.email || !usuario.senha) {
            Alert.alert(
                "Campos obrigatórios", 
                "Por favor, informe um e-mail e senha."
            )
            return
        }

        // Cria a autenticação do usuário (Authentication)
        let retorno = await validarUsuario(usuario.email, usuario.senha)

        if (retorno == 'sucesso') {

          // Salva usuário logado
          await logarContexto(usuario)

          router.push('/(auth)/home')

        }else {

            Alert.alert(
                'Falha de autenticação',
                retorno,
                [{ text: 'OK' }],
                { cancelable: false } // Impede fechar tocando fora (Apenas Android)
            )
        }
  }

  const abrirNovoUsuario = () => {
      router.push('/novoUsuario')
  }

  const abrirFundamentos = () => {
      router.push('/fundamentos')
  }

  return (
    <SafeAreaView style={estilos.conteiner}>

      <Image 
          style={estilos.logo}
          source={require('@/assets/images/')}
      />

      <Text style={estilos.titulo}>Eureca!</Text>

      <TextInput 
        style={estilos.campo}
        placeholder='E-mail'
        placeholderTextColor={Cores.secundariaClara}
        value={usuario.email}
        onChangeText={(valor) => setUsuario({...usuario, email: valor})}
      />

      <TextInput 
        style={estilos.campo}
        placeholder='Senha'
        placeholderTextColor={Cores.secundariaClara}
        value={usuario.senha}
        onChangeText={(valor) => setUsuario({...usuario, senha: valor})}
      />

      <Pressable 
        style={estilos.botao}
        android_ripple={{color: Cores.primariaClara}}
        onPress={verificarUsuario}
      >
        <Text style={estilos.rotulo}>Entrar</Text>
        <MaterialIcons name="login" size={Fontes.grande1} color={Cores.primariaClara} />
      </Pressable>

      <Pressable                
          style={ ({ pressed }) => [
              estilos.botaoNovoUsuario, 
              ({ opacity: pressed ? 0.5 : 1 }) 
          ] }
          onPress={abrirNovoUsuario}
      >
          <MaterialIcons name="person-add" size={Fontes.grande2} color={Cores.primariaEscura} />
      </Pressable>

      <Pressable                
          style={ ({ pressed }) => [
              estilos.botaoFundamentos, 
              ({ opacity: pressed ? 0.5 : 1 }) 
          ] }
          onPress={abrirFundamentos}
      >
          <MaterialIcons name="menu-book" size={Fontes.grande2} color={Cores.primariaEscura} />
      </Pressable>

    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Cores.secundariaEscura,
    },
    titulo: {
      fontFamily: Fontes.logo,
      fontSize: Fontes.extraGrande,
      color: Cores.primariaClara,
    },
    campo: {
      backgroundColor: Cores.secundaria,
      color: Cores.secundariaClara,
      fontFamily: Fontes.baseRegular,
      fontSize: Fontes.medio1,
      height: 50,
      width: 300,
      marginVertical: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    botao: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Cores.primariaEscura,
      borderColor: Cores.primariaClara,
      height: 50,
      width: 300,        
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 10,
    },
    rotulo: {
      color: Cores.secundariaClara,
      fontFamily: Fontes.baseRegular,
      fontSize: Fontes.medio1,
      marginEnd: 10,
    },
    logo: {
      height: 200,
      width: 200,
      objectFit: 'cover',
      borderRadius: 100,    
    },
    botaoNovoUsuario: {
      backgroundColor: Cores.primariaClara,
      alignSelf: 'flex-end',
      marginEnd: 65,
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },    
    botaoFundamentos: {
      backgroundColor: Cores.secundaria,
      padding: 20,
      borderRadius: 100,
    }
})