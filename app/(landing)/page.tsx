import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Hello landing (UnProtected)</p>
     <Link href={'/sign-in'}>
     <Button>
        login
      </Button>
     </Link>
     <Link href={'/sign-up'}>
     <Button>
        register
      </Button>
     </Link>
    </>
  );
}
