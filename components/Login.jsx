import React from "react";
import Image from "next/image";
import {signIn} from 'next-auth/react'
function Login({ providers }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Image
        width={200}
        height={200}
        src="https://links.papareact.com/9xl"
        resizeMode="contain"
        alt="spotify"
      />

      {/* React.children.toArray  */}
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#18d860] text-white p-5 rounded-full"
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider?.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;


