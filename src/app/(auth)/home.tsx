import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components /Cabecalho'
import { Cores } from '@/constants/Cores'
import { useAutenticacao } from '@/hooks/useAutenticacao'

export default function Home(){

    const { usuarioContexto } = useAutenticacao()

    return(
        <SafeAreaView style={estilos.conteiner}>
            {usuarioContexto?.email && (<Cabecalho titulo={usuarioContexto.email.split('@')[0]} />)}
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.primariaEscura
    },
})
