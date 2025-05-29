import React from "react";

export default function Title({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xl font-black opacity-45 z-[1] text-secondary">
        <em>{title}</em>
      </h1>
      <h1 className="title z-[2]">{children}</h1>
    </div>
  );
}
