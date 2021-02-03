import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createFirestoreInstance } from 'redux-firestore';
import store from '../store/store';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  profileFactory: (_, profileData) => { // how profiles are stored in database
    const { displayName, email, avatarUrl } = profileData;
    return {
      displayName,
      email,
      avatarUrl,
      userPhysics: {
        birthDay: '',
        gender: '',
        height: '',
        weight: '',
      },
      userMenus: {},
      usersExercises: {},
      userHistory: [],
      userGoals: {
        activityLevel: '',
        intensityLevel: '',
        weightPlan: '',
        goalCalories: '',
      },
    };
  },
  createFirestoreInstance,
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const app = firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default app;
