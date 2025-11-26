import { METHODS } from "http";
import { evalManifestWithRetries } from "next/dist/server/load-components";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),

        });
        const data = await res.json();

        if (data.success) {
            localStorage.setItem("token", data.token);
            window.location.href = "/dashboard";
        }
        else {
            alert("Invalid Login");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 shadow rouded w-96">
                <h1 className="text-xl font-bold mb-5">Login</h1>
                <input className="w-full border p-2 mb-3"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input
                    className="w-full border p-2 mb-3"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="w-full bg-blue-600 text-white p-2 rounded"
                    onClick={login}
                >
                    Login

                </button>
            </div>

        </div>
    );
}