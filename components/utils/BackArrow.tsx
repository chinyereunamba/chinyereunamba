"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function BackArrow() {
  const router = useRouter();
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: "var(--primary-color)",
        color: "white",
        display: "grid",
              placeItems: "center",
        cursor: 'pointer'
      }}
      onClick={() => router.back()}
    >
      <FaArrowLeft size={20} />
    </div>
  );
}
