import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components /Cabecalho'
import { Cores } from '@/constants/Cores'

export default function Sobre(){

    return(
        <SafeAreaView style={estilos.conteiner}>
            <Cabecalho titulo={'Sobre'} />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.primariaEscura
    }
})
