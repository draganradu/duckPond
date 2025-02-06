"use client";

import { Button } from "./ui/button";
import { useAuth } from "@/context/auth";

export default function ContinueWithGoogleButton() {
  const auth = useAuth();
  return (
  <Button className="w-full" onClick={()=>{
    auth?.loginWithGoogle()
  }}>
    Continue with google
  </Button>
  );
}
