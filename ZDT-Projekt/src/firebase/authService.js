import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

// Registrieren
export const registerUser = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Profil-Name setzen
    await updateProfile(result.user, { displayName });
    
    // User-Dokument in Firestore erstellen
    await setDoc(doc(db, 'users', result.user.uid), {
      email,
      displayName,
      createdAt: new Date().toISOString()
    });

    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Einloggen
export const loginUser = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Ausloggen
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Auth-Status überwachen
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// User-Daten laden
export const getUserData = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return { success: true, data: userDoc.data() };
    }
    return { success: false, error: 'User nicht gefunden' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
