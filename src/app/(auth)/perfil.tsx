import { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Pressable, Image, Modal, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import { UsuarioTipo } from '@/types/Usuario'
import { Cabecalho } from '@/components /Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'


// Tipagem para as permissões
interface Permissao {
  label: string;
  value: string;
}

export default function Perfil(){

    const [usuario, setUsuario] = useState<UsuarioTipo>(
        {codigo: '', nome: '', email: '', senha: '', permissao: 'usuario'}
    )

    const [modalPermissaoVisivel, setModalPermissaoVisivel] = useState(false);

    const opcoes: Permissao[] = [
        { label: 'Usuário Comum', value: 'usuario' },
        { label: 'Administrador', value: 'admin' },
    ];

    const selecionarPermissao = (valor: string) => {
        setUsuario({ ...usuario, permissao: valor });
        setModalPermissaoVisivel(false);
    };

    const salvar = () => {
        console.log(`\nNome: ${usuario.nome}\nE-mail: ${usuario.email}\nSenha: ${usuario.senha}\nPermissão: ${usuario.permissao}`)
    }

    return(
        <SafeAreaView style={estilos.conteiner}>

            <Cabecalho titulo={'Perfil'} />

            <View style={estilos.conteinerTela}>

                <Image 
                    style={estilos.foto}
                    source={require('@/assets/images/layout/foto.jpg')}
                />

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

                <TouchableOpacity 
                    style={estilos.campoPermissao} 
                    onPress={() => setModalPermissaoVisivel(true)}
                >
                    <Text style={estilos.rotulo}>
                        {opcoes.find(o => o.value === usuario.permissao)?.label}
                    </Text>
                    <MaterialDesignIcons name="triangle-small-down" size={32} color={Cores.secundariaClara} />
                </TouchableOpacity>


                <Modal
                    visible={modalPermissaoVisivel}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalPermissaoVisivel(false)}
                >
                    <TouchableOpacity 
                        style={estilos.modalSobreposicao} 
                        activeOpacity={1} 
                        onPress={() => setModalPermissaoVisivel(false)}
                    >
                        <View style={estilos.modalConteudo}>
                            <View style={estilos.modalCabecalho}>
                            <Text style={estilos.modalTitulo}>Selecione a Permissão</Text>
                        </View>

                            <FlatList
                                data={opcoes}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (

                                <TouchableOpacity 
                                    style={estilos.modalOpcaoItem} 
                                    onPress={() => selecionarPermissao(item.value)}
                                >
                                    <Text style={[
                                            estilos.modalOpcaoTexto,
                                            item.value === usuario.permissao && estilos.modalOpcaoSelecionada
                                        ]}
                                    >
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                                )}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>

                <Pressable 
                    style={estilos.botao}
                    android_ripple={{color: Cores.primariaClara}}
                    onPress={salvar}
                >
                <Text style={estilos.rotulo}>Salvar</Text>
                    <MaterialDesignIcons name="database-plus" size={Fontes.grande1} color={Cores.primariaClara} />
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
    foto: {
        height: 150,
        width: 150,
        marginVertical: 20,
        objectFit: 'cover',
        borderRadius: 100,    
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
    campoPermissao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    modalSobreposicao: {
        flex: 1,
        backgroundColor: Cores.primariaEscuraOpacidade,
        justifyContent: 'flex-end',
    },
    modalConteudo: {
        backgroundColor: Cores.secundariaClara,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 20,
        maxHeight: '30%',
    },
    modalCabecalho: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Cores.primariaEscura,
        alignItems: 'center',
    },
    modalTitulo: { 
        fontSize: Fontes.medio2, 
        fontFamily: Fontes.baseBold
    },
    modalOpcaoItem: {
        padding: 20,
        alignItems: 'center',
    },
    modalOpcaoTexto: { 
        fontSize: Fontes.medio1, 
        color: Cores.primariaEscura 
    },
    modalOpcaoSelecionada: { 
        color: Cores.primariaClara, 
        fontFamily: Fontes.baseBold
    },

})
