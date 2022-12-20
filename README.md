# teoria-firebase
## Teoría y ejemplos básicos de Firebase

[Fundamentos Firebase](https://firebase.google.com/docs/guides?authuser=0&%3Bhl=es&hl=es)

Firebase emula un backend para la web sin necesidad de un servidor - **arquitectura serverless**.

El backend se aloja en la nube de Google (propietario de Firebase).

Ofrece varias funcionalidades como análisis y segmentación de audiencias, monetización, diagnóstico de crashes, etc.

### [Cloud Firestore](https://firebase.google.com/docs/firestore?hl=es&authuser=0)
----------------
Base de datos remota.

<img src="https://firebase.google.com/static/docs/firestore/images/structure-data.png?authuser=0&hl=es" alt= "" height=300px>

Al final de nuestro body/main habrá que hacer referencia a los scripts de Firebase:

En la primera línea de nuestro script copiaremos la config del proyecto:

`// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt9Jn3apkW1MLdj1fZk8A0kU8JPPf2VYo",
  authDomain: "ejemplos-firebase-d7824.firebaseapp.com",
  projectId: "ejemplos-firebase-d7824",
  storageBucket: "ejemplos-firebase-d7824.appspot.com",
  messagingSenderId: "242471983090",
  appId: "1:242471983090:web:848e11bd5ef1d321ccfd6b",
  measurementId: "G-1SN4XK8CDB"
};

firebase.initializeApp(firebaseConfig);// Inicializaar app Firebase

const db = firebase.firestore();// db representa mi BBDD //inicia Firestore`

A través de JS (ver scripts.js) pueden crearse colecciones, añadirles álbumes y elementos.

[Documentación Firestore](https://firebase.google.com/docs/firestore?authuser=0&hl=es) => Consultar la configuración de Web versión 8

