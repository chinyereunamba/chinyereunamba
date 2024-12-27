"use client";
import React from "react";
import userContext from "../../store/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const user = useContext(userContext);

  // {
  //   "user": {
  //     "$id": "66af894d001bfe97c3ac",
  //     "$createdAt": "2024-08-04T13:59:42.095+00:00",
  //     "$updatedAt": "2024-08-04T14:54:11.227+00:00",
  //     "name": "Chinyere Unamba",
  //     "registration": "2024-08-04T13:59:42.089+00:00",
  //     "status": true,
  //     "labels": [
  //       "admin"
  //     ],
  //     "passwordUpdate": "2024-08-04T13:59:42.089+00:00",
  //     "email": "cunamba2@gmail.com",
  //     "phone": "+2349044196306",
  //     "emailVerification": true,
  //     "phoneVerification": true,
  //     "mfa": false,
  //     "prefs": {},
  //     "targets": [
  //       {
  //         "$id": "66af894e2e5dc8f1aa22",
  //         "$createdAt": "2024-08-04T13:59:42.189+00:00",
  //         "$updatedAt": "2024-08-04T13:59:42.189+00:00",
  //         "name": "",
  //         "userId": "66af894d001bfe97c3ac",
  //         "providerId": null,
  //         "providerType": "email",
  //         "identifier": "cunamba2@gmail.com"
  //       },
  //       {
  //         "$id": "66af894e31e6df7dd2f6",
  //         "$createdAt": "2024-08-04T13:59:42.204+00:00",
  //         "$updatedAt": "2024-08-04T13:59:42.204+00:00",
  //         "name": "",
  //         "userId": "66af894d001bfe97c3ac",
  //         "providerId": null,
  //         "providerType": "sms",
  //         "identifier": "+2349044196306"
  //       }
  //     ],
  //     "accessedAt": "2024-08-04T14:54:11.227+00:00"
  //   }
  // }

  if (!user) {
    return router.push("sign-in");
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
