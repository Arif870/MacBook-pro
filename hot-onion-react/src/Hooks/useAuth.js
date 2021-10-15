import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebaseInit from "../Firebase/firebaseinit";
firebaseInit();

export default function useAuth() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const userLogin = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(result => {
      setUser(result.user);
    });
  };
  const createUser = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;

        setUser(user);
        userProfile();
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const userLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        // An error happened.
      });
  };

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setpassword(e.target.value);
  };

  const userProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    handleName,
    handleEmail,
    handlePassword,
    createUser,
    userLogout,
    userLogin,
  };
}
