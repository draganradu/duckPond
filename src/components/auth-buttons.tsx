"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import { AvatarFallback } from "./ui/avatar";

export default function AuthButtons() {
  const auth = useAuth();

  return (
    <div>
      {!!auth?.currentUser && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              {auth?.currentUser?.photoURL ? (
                <Image
                  src={auth?.currentUser?.photoURL}
                  alt={`${auth?.currentUser?.displayName} avatar`}
                  width={40}
                  height={40}
                />
              ):
              (<AvatarFallback>
                {(auth?.currentUser?.displayName ||
                  auth?.currentUser?.email)?.[0]?.toUpperCase()}
              </AvatarFallback>)}
              
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
            <div>{auth.currentUser.displayName}</div>
            <div>{auth.currentUser.email}</div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/my-account">My Account</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin-dashboard">Admin Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/my-favorite">My Favorite</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={ async () => await auth?.logout()}>
            Logout
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
