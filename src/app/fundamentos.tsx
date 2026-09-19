import { router } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function Fundamentos(){

    const [formControlado, setFormControlado] = useState('')

    function abrirLogin(){
        router.push('/')
    }

    return(
        <SafeAreaView style={estilos.conteiner}>  

            <View style={estilos.cabecalho}>
                <Pressable 
                    style={estilos.voltar}
                    onPress={abrirLogin}
                >
                    <MaterialIcons name="arrow-back" size={Fontes.grande1} color={Cores.primariaClara} />
                </Pressable>    
                <Text style={estilos.textoCabecalho}>Fundamentos</Text>
            </View>

            <Text style={estilos.titulo}>Conceitos e recursos de React Native</Text>

            <ScrollView style={estilos.conteinerTela}>

                <View style={estilos.conteinerConceito}>
                    <FontAwesome6 name="check" size={Fontes.medio2} color={Cores.primariaClara} iconStyle="solid"/>
                    <Text style={estilos.conceito}>Estrutura do projeto</Text>
                </View>

                <View style={estilos.conteinerConceito}>
                    <FontAwesome6 name="check" size={Fontes.medio2} color={Cores.primariaClara} iconStyle="solid"/>
                    <Text style={estilos.conceito}>Core Components (componentes nativos)</Text>
                </View>

                <View style={[estilos.conteinerConceito,
                              estilos.conceitosMarcador]}
                >
                    <FontAwesome6 name="check" size={Fontes.medio2} color={Cores.primariaClara} iconStyle="solid"/>
                    <View style={estilos.conceitos}>
                        <Text style={estilos.conceito}>Props</Text>
                        <Text style={estilos.conceito}>State</Text>
                    </View>
                </View>

                <View style={estilos.conteinerConceito}>
                    <FontAwesome6 name="check" size={Fontes.medio2} color={Cores.primariaClara} iconStyle="solid"/>
                    <Text style={estilos.conceito}>Formulário controlado</Text>
                </View>

                <View style={estilos.formulario}>
                    <TextInput 
                        style={estilos.campo}
                        placeholder="Campo"
                        value={formControlado}
                        onChangeText={setFormControlado}
                    />
                    <Text style={estilos.texto}>Conteúdo do state: {formControlado}</Text>
                </View>

                <View style={[estilos.conteinerConceito,
                              estilos.conceitosMarcador]}
                >
                    <FontAwesome6 name="check" size={Fontes.medio2} color={Cores.primariaClara} iconStyle="solid"/>
                    <View style={estilos.conceitos}>
                        <Text style={estilos.conceito}>Palheta de cores em constants</Text>
                        <Text style={estilos.conceito}>Fontes locais</Text>
                        <Text style={estilos.conceito}>Imagens locais e remotas</Text>
                        <Text style={estilos.conceito}>Ícones (@react-native-vector-icons)</Text>
                    </View>
                </View>

                <View style={[estilos.conteinerConceito,
                              estilos.conceitosMarcador]}
                >
                    <FontAwesome6 name="check" size={Fontes.medio2} color={Cores.primariaClara} iconStyle="solid"/>
                    <View style={estilos.conceitos}>
                        <Text style={estilos.conceito}>Expo Router</Text>
                        <Text style={estilos.conceito}>Stack</Text>
                        <Text style={estilos.conceito}>Tabs</Text>
                    </View>
                </View>

                <View style={[estilos.conteinerConceito,
                              estilos.conceitosMarcador]}
                >
                    <FontAwesome6 name="check" size={Fontes.medio2} color={Cores.primariaClara} iconStyle="solid"/>
                    <View style={estilos.conceitos}>
                        <Text style={estilos.conceito}>TypeScript</Text>
                        <Text style={estilos.conceito}>Type</Text>
                        <Text style={estilos.conceito}>Interface</Text>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.primariaEscura,
    },
    conteinerTela: {
        backgroundColor: Cores.secundariaEscura,
        paddingHorizontal: 10,
        paddingBottom: 50,
        margin: 10,
        borderRadius: 5,
        marginBottom: 25
    },
    titulo: {
        fontFamily: Fontes.baseBold,
        fontSize: Fontes.medio1,
        color: Cores.secundariaClara,
        marginVertical: 25,
        textAlign: 'center',
    },
    conteinerConceito: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    conceito: {
        color: Cores.secundariaClara,
        fontSize: Fontes.medio1,
        marginVertical: 5,
        marginStart: 10,
    },
    conceitos: {
        flexDirection: 'column',
    },
    conceitosMarcador: {
        alignItems: 'flex-start',
    },
    campo: {
        backgroundColor: Cores.secundariaClara,
        height: 40,
        width: 300,
        padding: 5,
        marginVertical: 10,
    },
    texto: {
        color: Cores.secundariaClara,
        fontSize: Fontes.medio1,
    },
    formulario: {
        paddingStart: 35
    },
    cabecalho: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: Cores.primaria,
        alignItems: 'center',
        height: 55,
    },
    textoCabecalho: {
        color: Cores.secundariaClara,
        fontSize: Fontes.grande1,
        fontFamily: Fontes.baseRegular,
        width: '90%',
        textAlign: 'center',
    },
    voltar: {
        width: '10%',
        alignItems: 'center',
    }    
})
