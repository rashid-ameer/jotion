import { Button } from "@/components/ui/button";
import Logo from "./logo";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex py-4">
      <Logo />

      <div className="flex flex-1 justify-between gap-4 md:ml-auto md:justify-end">
        <Button variant="link" size="raw" asChild>
          <Link href="/privacy">Privacy Policy</Link>
        </Button>
        <Button variant="link" size="raw" asChild>
          <Link href="/terms">Terms & Conditions</Link>
        </Button>
      </div>
    </div>
  );
}
export default Footer;
