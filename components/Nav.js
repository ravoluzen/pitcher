import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../utils/Firebase";
import { useRouter } from "next/router";

const Nav = () => {
  const googleProvider = new GoogleAuthProvider()
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("result", result);

    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
        <div>
            Pitcher
        </div>
        <div>
            <div>{!user ? <button onClick={handleLogin}>Log in!</button> : <button onClick={() => router.push("saved")}>Saved Pitches</button>}

            </div>
        </div>
    </div>
  )
}

export default Nav