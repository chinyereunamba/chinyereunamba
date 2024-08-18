"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/store/context";

export default function Projects() {
  const router = useRouter();
  const user:any = useUserContext()
  

  if (!user) {
    return router.push("login");
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
