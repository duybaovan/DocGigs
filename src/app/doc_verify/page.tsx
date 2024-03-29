"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const VerifyPhysicianCredentials: React.FC = () => {
  const [npiNumber, setNpiNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleNPIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNpiNumber(event.target.value);
  };

  const handleVerification = () => {
    if (npiNumber.length === 10) {
      setIsVerified(true);
    }
  };

  return (
    <main>
      <Card className="mx-auto mt-12 max-w-lg p-12">
        {isVerified ? (
          <>
            <CardHeader>
              <CardTitle>Sign Up Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your NPI number has been submitted for verification. We will let
                you know as soon as your profile is verified.
              </CardDescription>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle>Verify your physician credentials.</CardTitle>
              <CardDescription className="mb-4">
                Please provide your NPI number to help us quickly verify your
                credentials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Label
                  htmlFor="npiNumber"
                  className="Label-sm Label-gray-700 mb-2 block font-medium"
                >
                  NPI number
                </Label>
                <Input
                  id="npiNumber"
                  placeholder="10 digit number"
                  value={npiNumber}
                  onChange={handleNPIChange}
                />
              </div>

              <div className="mb-6 flex justify-between">
                <Button
                  onClick={handleVerification}
                  className={buttonVariants({ variant: "default" })}
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </>
        )}
        <CardFooter>
          <Label className="text-slate-400">
            Need help? Contact us at founders@harvi.io
          </Label>
        </CardFooter>
      </Card>
    </main>
  );
};
export default VerifyPhysicianCredentials;
