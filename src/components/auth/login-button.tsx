'use client';

import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

export default function LoginButton() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <Button onClick={handleLogin}>
      <FcGoogle className="mr-2 h-4 w-4" />
      Login with Google
    </Button>
  );
}
