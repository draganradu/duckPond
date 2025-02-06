import ContinueWithGoogleButton from "@/components/continue-with-google";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Register() {
  return (
    <>
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <div>AAAAAAAAAAAAAa</div>
        <div className="w-full text-center pt-5 pb-5">---------- Or login with google ------------</div>
        <div>
          <ContinueWithGoogleButton />
        </div>
      </CardContent>
    </>
  );
}
