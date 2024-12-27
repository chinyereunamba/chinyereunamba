"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "../services/appwrite";
import styles from "../components/LoginForm.module.css";

export default function Login() {
  const router = useRouter()
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signIn = account.createEmailPasswordSession(
      user.email,
      user.password
    );
    setLoggedInUser(await account.get());
    return router.push("projects");
  };


  return (
    <main className={styles.loginForm}>
      <h1 className={styles.loginFormTitle}>Admin Login</h1>
      <form method="post" onSubmit={handleSubmit}>
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
