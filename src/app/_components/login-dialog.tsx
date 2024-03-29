"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FaGoogle, FaDiscord } from "react-icons/fa";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

interface LoginDialogButtonProps {
  buttonTitle: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}
export const LoginDialogButton: React.FC<LoginDialogButtonProps> = ({
  buttonTitle,
  className,
  variant,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} variant={variant}>
          {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="mx-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Sign In</DialogTitle>
          <DialogDescription className="mx-auto text-center">
            Join the DocGigs community
          </DialogDescription>
        </DialogHeader>
        <LoginDialog />
      </DialogContent>{" "}
    </Dialog>
  );
};

export const LoginDialog: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <Button
          variant="secondary"
          className="w-full px-3 py-3"
          onClick={() => signIn("google", { callbackUrl: "/doc_verify" })}
        >
          <FaGoogle className="mr-4 inline text-lg" color="#DB4437" />
          Continue with Google
        </Button>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => signIn("discord", { callbackUrl: "/doc_verify" })}
          className="w-full px-3 py-3"
        >
          <FaDiscord className="mr-4 inline text-lg" color="#7289da" />
          Continue with Discord
        </Button>
      </div>
      <p className="text-center text-xs text-gray-500">
        By signing in or creating an account you are agreeing to our
        <a href="/terms_of_service" className="text-blue-600 hover:underline">
          {" Terms of Service"}
        </a>{" "}
        {" and "}
        <a href="/privacy_policy" className="text-blue-600 hover:underline">
          {"Privacy Policy"}
        </a>
        .
      </p>
    </div>
  );
};
