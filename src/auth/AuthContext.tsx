import firebase from "firebase/auth";
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext<firebase.User | null>(null);

export const AuthProvider = (props: { children: ReactNode }): ReactElement => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider {...props} value={currentUser}>
      {props.children}
    </AuthContext.Provider>
  );
};
