// Importar la función de inicialización de la app
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBfYFZABE_PkZoxtVOWfjl-fDfHTqFqlsQ",
    authDomain: "e-commerce-paganucci.firebaseapp.com",
    projectId: "e-commerce-paganucci",
    storageBucket: "e-commerce-paganucci.appspot.com",
    messagingSenderId: "1018049484618",
    appId: "1:1018049484618:web:b8d35787bef0cf5f13d3b3"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

/*  Todo el tiempo necesitás esto, cada vez que consultes, en cada archivo... Entonces esto ya se puede dejar seteado acá.
1) obtener una referencia a la db
2) obtener una referencia a la colección
*/