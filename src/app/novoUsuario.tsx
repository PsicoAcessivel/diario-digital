import { useState } from 'react'
import { router } from 'expo-router'
import { Text, StyleSheet, View, TextInput, Pressable, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons'
import { UsuarioTipo } from '@/types/Usuario'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { useAutenticacao } from '@/hooks/useAutenticacao'

export default function NovoUsuario(){

    const [usuario, setUsuario] = useState<UsuarioTipo>(
        {codigo: '', nome: '', email: '', senha: '', permissao: 'usuario'}
    )

    // Cria o objeto de autenticação
    const autenticacao = useAutenticacao()

    const salvar = async () => {

        if (!usuario.email || !usuario.senha) {
            Alert.alert(
                "Erro no Cadastro", 
                "Por favor, preencha os campos de e-mail e senha."
            )
            return
        }

        // Cria a autenticação do usuário (Authentication)
        let retorno = await autenticacao.criarAutenticacaoUsuario(usuario.email, usuario.senha)

        if (retorno == 'sucesso') {

            Alert.alert(
                'Novo usuário',
                `Seja bem-vindo ${usuario.nome}!`,
                [
                    {
                        text: 'Ok',
                        onPress: () => router.push('/')
                    },
                ]
            );

        }else {

            Alert.alert(
                'Novo usuário',
                retorno,
                [{ text: 'OK' }],
                { cancelable: false } // Impede fechar tocando fora (Apenas Android)
            )
        }

    }

    const cancelar = () => {
        router.push('/')
    }    

    return(
        <SafeAreaView style={estilos.conteiner}>

            <View style={estilos.conteinerTela}>

                <Text style={estilos.titulo}>Novo usuário</Text>

                <TextInput 
                    style={estilos.campo}
                    placeholder='Nome'
                    placeholderTextColor={Cores.secundariaClara}
                    value={usuario.nome}
                    onChangeText={(valor) => setUsuario({...usuario, nome: valor})}
                />

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
                    onPress={salvar}
                >
                <Text style={estilos.rotulo}>Salvar</Text>
                    <MaterialDesignIcons name="database-plus" size={Fontes.grande1} color={Cores.primariaClara} />
                </Pressable>

                <Pressable 
                    style={estilos.botao}
                    android_ripple={{color: Cores.primariaClara}}
                    onPress={cancelar}
                >
                <Text style={estilos.rotulo}>Cancelar</Text>
                    <MaterialDesignIcons name="cancel" size={Fontes.grande1} color={Cores.primariaClara} />
                </Pressable>                

            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.primariaEscura
    },
    conteinerTela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },   
    titulo: {
        color: Cores.primariaClara,
        fontFamily: Fontes.baseRegular,
        fontSize: Fontes.grande1,
        marginVertical: 20
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
})
