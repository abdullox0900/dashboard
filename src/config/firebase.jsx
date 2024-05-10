import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase config
// export const firebaseConfig = {
// 	apiKey: 'AIzaSyBbIcpDYZsy57LUB_SW5vjDQiS9NO1VbzU',
// 	authDomain: 'my-panel-17e33.firebaseapp.com',
// 	projectId: 'my-panel-17e33',
// 	storageBucket: 'my-panel-17e33.appspot.com',
// 	messagingSenderId: '201847976115',
// 	appId: '1:201847976115:web:768b36cbc850cbe84fc0c6',
// }

const firebaseConfig = {
	apiKey: 'AIzaSyDeg_3PjSoJJXREubM7VYYStIIjEuFtpeY',
	authDomain: 'abdullokh-93960.firebaseapp.com',
	projectId: 'abdullokh-93960',
	storageBucket: 'abdullokh-93960.appspot.com',
	messagingSenderId: '604175863044',
	appId: '1:604175863044:web:56f9bce99d65b804a25451',
	measurementId: 'G-26N59V691T',
}
// Firebase-ni boshlang'ich holatga o'rnatish
const app = initializeApp(firebaseConfig)

// Storage-ni olish
export const storage = getStorage(app)
export const db = getFirestore()

export default storage
