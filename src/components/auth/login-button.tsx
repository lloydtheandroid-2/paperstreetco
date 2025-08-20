'use client';

import { Button } from '@/components/ui/button';
import { getFirebaseAuth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

export default function LoginButton() {
    const { toast } = useToast();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const auth = getFirebaseAuth();
            await signInWithPopup(auth, provider);
        } catch (error: any) {
            console.error('Error signing in with Google: ', error);
            toast({
                title: 'Authentication Error',
                description: `Failed to sign in. Please try again. (Code: ${error.code}) - ${error.message}`,
                variant: 'destructive'
            })
        }
    };

    return (
        <Button onClick={handleLogin} className="w-full">
            Let's make some Soap
        </Button>
    );
}
