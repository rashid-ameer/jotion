"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

function Navbar() {
  const isScrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-10 w-full bg-white py-6 dark:bg-neutral-800",
        {
          "border-b border-neutral-300 shadow-sm dark:border-neutral-700":
            isScrolled,
        },
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="ml-auto flex items-center gap-4">
          {isLoading && <Spinner />}

          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button className="ml-auto flex" variant="ghost" size="sm">
                  Login
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="ml-auto flex" size="sm">
                  Get Jotion Free
                </Button>
              </SignInButton>
            </>
          )}

          {isAuthenticated && !isLoading && (
            <>
              <Button variant="ghost" size="sm">
                <Link href="/documents">Enter Jotion</Link>
              </Button>

              <UserButton afterSwitchSessionUrl="/"></UserButton>
            </>
          )}

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
