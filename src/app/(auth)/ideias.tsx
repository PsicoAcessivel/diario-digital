import { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IdeiaTipo } from '@/types/Ideia'
import { Cabecalho } from '@/components /Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
/* 
Instalação: npx expo install react-native-paper react-native-paper-dates
react-native-paper-dates: A biblioteca do calendário em si.
react-native-paper: A biblioteca de UI baseada em Material Design 3 (obrigatória, pois o calendário herda os componentes e o provedor de temas dela).
*/
import { MD3LightTheme, PaperProvider } from 'react-native-paper'
import { DatePickerModal, registerTranslation } from 'react-native-paper-dates'

// Idioma (tradução de textos do componente)
registerTranslation('pt-BR', {
  save: 'Confirmar',
  selectSingle: 'Selecione a Data',
  selectMultiple: 'Selecione as Datas',
  selectRange: 'Selecione o Período',
  notAccordingToDateFormat: (inputFormat) => `A data deve seguir o formato ${inputFormat}`,
  mustBeHigherThan: (dateString) => `A data deve ser após ${dateString}`,
  mustBeLowerThan: (dateString) => `A data deve ser antes de ${dateString}`,
  mustBeBetween: (dateString1, dateString2) => `A data deve estar entre ${dateString1} e ${dateString2}`,
  dateIsDisabled: 'Esta data não é permitida',
  previous: 'Anterior',
  next: 'Próximo',
  typeInDate: 'Digitar data',
  pickDateFromCalendar: 'Escolher data do calendário',
  close: 'Fechar',
  hour: 'Hora',
  minute: 'Minuto',
})

const temaCustomizado = { ...MD3LightTheme, colors: {
        ...MD3LightTheme.colors,
        primary: Cores.primariaClara, // Cor do cabeçalho, botões e dia selecionado
        onSurface: Cores.primaria,    // Cor dos números dos dias
    },
}


export default function Ideias(){

    const [ideia, setIdeia] = useState<IdeiaTipo>(
        {codigo: '', titulo: '', descricao: '', data: new Date()}
    )

    const [exibirCalendario, setExibirCalendario] = useState(false)

    const confirmarData = (dataSelecionada: Date | undefined) => {
        if (dataSelecionada) {
            setIdeia({ ...ideia, data: dataSelecionada })
        }
        setExibirCalendario(false)
    }

    const salvar = () => {
        console.log(`\nTitulo: ${ideia.titulo}\nDescrição: ${ideia.descricao}\nData: ${ideia.data}`)
    }

    return(
        <SafeAreaView style={estilos.conteiner}>

            <Cabecalho titulo={'Ideia'} />

            <PaperProvider theme={temaCustomizado}>

                <View style={estilos.conteinerTela}>

                    <TextInput 
                        style={estilos.campo}
                        placeholder='Titulo'
                        placeholderTextColor={Cores.secundariaClara}
                        value={ideia.titulo}
                        onChangeText={(valor) => setIdeia({...ideia, titulo: valor})}
                    />

                    <TextInput 
                        style={estilos.campo}
                        placeholder='Descrição'
                        placeholderTextColor={Cores.secundariaClara}
                        value={ideia.descricao}
                        onChangeText={(valor) => setIdeia({...ideia, descricao: valor})}
                    />

                    <Pressable style={estilos.campoCalendario} onPress={() => setExibirCalendario(true)} >
                        <MaterialIcons style={estilos.iconeCalendario} name="calendar-month" size={Fontes.grande1} color={Cores.primariaClara} />
                        <Text style={estilos.campoCalendarioRotulo}>{ideia.data.toLocaleDateString('pt-BR')}</Text>
                    </Pressable>
                
                    <DatePickerModal
                        locale='pt-BR'
                        mode='single'
                        visible={exibirCalendario}
                        onDismiss={() => setExibirCalendario(false)}
                        date={ideia.data}
                        onConfirm={({ date }: any) => confirmarData(date)}
                        validRange={{ endDate: new Date() }} // Impede a seleção de datas futuras (opcional)
                    />
                    
                    <Pressable 
                        style={estilos.botao}
                        android_ripple={{color: Cores.primariaClara}}
                        onPress={salvar}
                    >
                        <Text style={estilos.rotulo}>Salvar</Text>
                        <MaterialDesignIcons name="database-plus" size={Fontes.grande1} color={Cores.primariaClara} />
                    </Pressable>
                    
                </View>

            </PaperProvider>    
            
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
    campoCalendario: {
        flexDirection: 'row',
        alignItems: 'center',  
        backgroundColor: Cores.secundaria,
        height: 50,
        width: 300,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    iconeCalendario: {
        position: 'absolute',
        zIndex: 1,
        marginStart: 10
    },
    campoCalendarioRotulo: {
        color: Cores.secundariaClara,
        fontFamily: Fontes.baseRegular,
        fontSize: Fontes.medio1,
        marginStart: 30
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
