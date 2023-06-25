import React, { useState } from "react";
import '../App.jsx';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState(" ");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userCred = {
            email: email,
            password: pass
        }

        fetch("http://localhost:5173/User", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({userCred})
        }).then((res)=> {
            alert("Login Successful")
            Navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })
    }
  return (
    <>
    <section className="login__container">
            <form onSubmit={handleSubmit} className="flex flex-col pt-3 md:pt-8 w-1/3 mx-auto z-10">
                <div className="relative my-2">
                    <label for="email" className="block text-md py-3 font-medium text-white">
                        Email :
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Email address" />
                </div>
                <div className="relative my-2">
                    <label for="password" className="block text-md py-3 font-medium text-white">
                        Password :
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Password" />
                </div>
                <button type='submit' className="w-full my-8 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-600 shadow-md hover:bg-green-700 focus:outline-none focus:ring-2">
                    {/* <span className="w-full">
                        {loading ? "Loading..." : "Log in"}
                    </span> */}
                </button>
            </form>
        </section>
    </>
  );
}

export default Login;
