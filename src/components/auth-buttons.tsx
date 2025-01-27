"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";

export default function AuthButtons() {
  const auth = useAuth();

  return (
    <div>
      {!!auth?.currentUser && (
        <div>
          {auth.currentUser.email}
          <div>Logout</div>
        </div>
      )}
      {!auth?.currentUser && (
        <div>
          <ul>
            <li>
              <Link href="/login">login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
