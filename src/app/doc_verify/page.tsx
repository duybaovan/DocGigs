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

  const handleNPIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNpiNumber(event.target.value);
  };

  return (
    <main>
      <Card className="mx-auto mt-12 max-w-lg p-12">
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
            <Link
              href={"/jobs"}
              className={buttonVariants({ variant: "default" })}
            >
              {"Next"}
            </Link>
          </div>
        </CardContent>
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
