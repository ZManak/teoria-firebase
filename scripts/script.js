// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const db = firebase.firestore();// db representa mi BBDD //inicia Firestore

//Función auxiliar para pintar una foto en el album
const printPhoto = (title, url, docId) => {
    let picture = document.createElement('img');
    picture.setAttribute('src', url);
    picture.setAttribute('style', 'max-width:250px');
    let caption = document.createElement('p');
    caption.innerHTML = title;
    let id = document.createElement('p');
    id.innerHTML = docId;
    document.getElementById('album').appendChild(picture);
    document.getElementById('album').appendChild(caption);
    document.getElementById('album').appendChild(id);
};
//Create
const createPicture = (user) => {
    db.collection("album") //crea una colección en Firebase
        .add(user)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id)
            readAll()
        })
        .catch((error) => console.error("Error adding document: ", error));
};
//Read all
const readAll = () => {
    db.collection("album")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                printPhoto(doc.data().title, doc.data().url, doc.id)
            });
        })
        .catch(() => console.log('Error reading documents'));;
};
//Read one
function readOne(id) {
    db.collection("album")
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                printPhoto(doc.data().title, doc.data().url, doc.id);
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
};
//Delete
const deletePicture = () => {
    const id = prompt('Introduce el ID a borrar');
    db.collection('album').doc(id).delete().then(() => {
        alert(`Documento ${id} ha sido borrado`);
        //Clean
        document.getElementById('album').innerHTML = "";
        //Read all again
        readAll();
    })
        .catch(() => console.log('Error borrando documento'));
};
//Clean
const cleanAlbum = () => {
    document.getElementById('album').innerHTML = "";
};
//Show
readAll();
//**********EVENTS**********
//Create
document.getElementById("create").addEventListener("click", () => {
    const title = prompt("Introduce el título de tu foto");
    const url = prompt("Introduce la url de tu foto");
    if (!title || !url) {
        alert("Hay un campo vacio. No se ha salvado");
        return
    }
    createPicture({
        title,
        url,
    });
});
//Read all
document.getElementById("read-all").addEventListener("click", () => {
    readAll();
});
//Read one
document.getElementById('read-one').addEventListener("click", () => {
    const id = prompt("Introduce el id a buscar");
    readOne(id);
});
//Delete one
document.getElementById('delete').addEventListener('click', () => {
    deletePicture();
});
//Clean
document.getElementById('clean').addEventListener('click', () => {
    cleanAlbum();
});