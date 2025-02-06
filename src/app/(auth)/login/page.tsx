import ContinueWithGoogleButton from "@/components/continue-with-google";
import { CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  return (
    <>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>

        <div>
          <ContinueWithGoogleButton />
        </div>
    </>
  );
}
