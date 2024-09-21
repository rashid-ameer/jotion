"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Header() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-5 text-center">
      <h1 className="text-3xl font-bold text-neutral-950 dark:text-white sm:text-4xl xl:text-6xl">
        Your Ideas, Documents & Plans in One Place. Welcome to{" "}
        <span className="underline">Jotion</span>.
      </h1>

      <h2 className="text-base font-medium sm:text-xl">
        Jotion is the connected workspace where better, faster work happens.
      </h2>

      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            <span>Get Started</span>
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton>
          <Button>
            Get Jotion Free
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
export default Header;
