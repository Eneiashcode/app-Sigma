// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; // Importa funções para autenticação

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvx9LBnSDTZTlj6EIABv141CJdK0cuYJc",
  authDomain: "barbearia-sigma.firebaseapp.com",
  projectId: "barbearia-sigma",
  storageBucket: "barbearia-sigma.firebasestorage.app",
  messagingSenderId: "854780145366",
  appId: "1:854780145366:web:eb30aa5f27c6667c412377"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Inicializa a autenticação

// Funções de autenticação
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Retorna o usuário autenticado
  } catch (error) {
    console.error("Error during login: ", error);
    throw error;  // Lançar erro para tratamento no componente
  }
};

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Retorna o usuário registrado
  } catch (error) {
    console.error("Error during registration: ", error);
    throw error;  // Lançar erro para tratamento no componente
  }
};

// Funções para adicionar, editar e excluir serviços
export const addService = async (service) => {
  try {
    const docRef = await addDoc(collection(db, "servicos"), service);
    console.log("Service added with ID: ", docRef.id);
    return docRef.id; // Retorna o ID do serviço adicionado
  } catch (e) {
    console.error("Error adding service: ", e);
    throw e; // Lançar erro para tratamento
  }
};

export const updateService = async (id, service) => {
  const serviceRef = doc(db, "servicos", id);
  await updateDoc(serviceRef, service);
};

export const deleteService = async (id) => {
  const serviceRef = doc(db, "servicos", id);
  await deleteDoc(serviceRef);
};

// Função para obter todos os serviços
export const fetchServices = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "servicos"));
    const services = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return services;  // Retorna os serviços encontrados
  } catch (e) {
    console.error("Error fetching services: ", e);
    throw e;  // Lançar erro para tratamento
  }
};

export { db, auth }; // Exporta o banco de dados e a autenticação
