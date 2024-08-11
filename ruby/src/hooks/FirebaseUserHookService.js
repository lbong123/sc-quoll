import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const FirebaseUserHookService = () => {

    const getUserData = async () => {
        try {
            if (!auth.currentUser) {
                console.log("n");
                return 5;
            }
            const userDocRef = doc(db, "users", auth.currentUser.uid);
            const userDocSnap = await getDoc(userDocRef);
          
            if (userDocSnap.exists()) {
                // Document data
                console.log("User Data:", userDocSnap.data());
            } else {
                // No such document
                console.log("No such user document!");
            }
        }  catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return { auth, getUserData };
};
  
export default FirebaseUserHookService;