'use client';
import { signIn } from 'next-auth/react';

function LoginButton() {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
    >
      Sign in with Google
    </button>
  );
}

export default LoginButton;
