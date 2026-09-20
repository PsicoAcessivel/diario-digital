import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

import { Text, StyleSheet, TextInput, Pressable, Image,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function inicial() {
  return(

    <SafeAreaView style={estilos.conteiner}>

    <Image 
    style={estilos.logo}
    source={require('@/assets/images/layout/abstrato1.png')}
  />
  <Text style={estilos.titulo}>Bem-vindo ao Psico-Acessivel</Text>

    <Text style={estilos.subtitulo}>Sua Plataforma de apoio psicologico,
       acolhimento e informação</Text>

        <Text style={estilos.texto1}>Sua Plataforma de apoio psicologico,
       acolhimento e informação</Text>
       

     
    
    </SafeAreaView>
  )

}
const estilos = StyleSheet.create({
  conteiner:{

  },
  logo:{
    
  },
  titulo:{

  },
  subtitulo:{

  },
    texto1:{

  },
})
