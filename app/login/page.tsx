"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/forms/LoginForm.module.css";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // try {
    //   await account.createEmailPasswordSession(user.email, user.password);
    //   const userLoggedIn = await account.get();
    //   setLoggedInUser(userLoggedIn);
    //   return await router.push("/projects");
    // } catch (error) {
    //   console.error("Error during login:", error);
    // }
  };

  return (
    <main className={styles.loginForm}>
      <h1 className={styles.loginFormTitle}>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
