
'use client';

import { useAuth } from '@/components/auth/auth-provider';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function StartButton() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // On successful login, the auth state will change, and the component will re-render.
      // The button will now be a link to /dashboard. We can also push the user there directly.
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google', error);
      toast({
        title: 'Authentication Error',
        description: 'There was a problem signing you in. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleClick = () => {
    if (user) {
      router.push('/dashboard');
    } else {
      handleLogin();
    }
  };

  if (loading) {
    return (
      <Button size="lg" disabled className="text-lg py-7 px-8">
        Loading...
      </Button>
    );
  }

  return (
    <Button onClick={handleClick} size="lg" className="text-lg py-7 px-8">
      Start Making Soap
    </Button>
  );
}
