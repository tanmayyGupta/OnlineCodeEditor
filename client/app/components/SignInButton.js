'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const SignInButton = () => {

    const {data: session } = useSession();

    if(session && session.user) {
        return (
            <>
                <div className='flex gap-4 ml-auto'>
                    <div className=' text-teal-600 mt-2.5 text-lg font-bold'> {session.user.name} </div>
                
                    <button className="btn mx-2 bg-transparent text-rose-700" onClick={() => signOut()}>
                        Sign Out
                    </button>
                </div>
            </>
        );
    }

    return (
        <button className="btn mx-2 bg-transparent text-teal-600" onClick={() => signIn()}>
            Sign In 
        </button>
    );
}

export default SignInButton