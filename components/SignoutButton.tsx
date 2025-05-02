import { signOutAction } from "@/app/_lib/actions";
import { Button } from "./ui/button";

export default function SignoutButton() {
  return (
    <form action={signOutAction}>
      <Button variant="outline">Sign Out</Button>
    </form>
  );
}
