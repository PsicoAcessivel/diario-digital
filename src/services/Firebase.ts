import { initializeApp, FirebaseError, getApps, getApp } from 'firebase/app'
import { initializeAuth, signInWithEmailAndPassword, inMemoryPersistence } from 'firebase/auth'

const firebaseConfig = {
 apiKey: "AIzaSyA5Or2s1uAw36GGooVBRrJwi47ndtIg-yY",
  authDomain: "diario-digital-ea2d2.firebaseapp.com",
  projectId: "diario-digital-ea2d2",
  storageBucket: "diario-digital-ea2d2.firebasestorage.app",
  messagingSenderId: "791535500625",
  appId: "1:791535500625:web:8d102a5426cf9064f0a770",
  measurementId: "G-XKPHWPKJBS",
}

// Evita duplicidade no Fast Refresh do Expo
const conexao = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)

// Força o Firebase a usar persistência em memória. 
// Por ser somente um teste de conexão, não salva os dados do usuário no AsyncStorage e silencia o aviso no terminal
const autenticacao = initializeAuth(conexao, {
  persistence: inMemoryPersistence
})

export { autenticacao, FirebaseError, signInWithEmailAndPassword }