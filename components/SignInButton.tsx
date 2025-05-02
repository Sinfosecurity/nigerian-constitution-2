import { signInAction } from "@/app/_lib/actions";
import { Button } from "./ui/button";
import Image from "next/image";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <Button variant="outline" className="w-full">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        Continue with Google
      </Button>
    </form>
  );
}
