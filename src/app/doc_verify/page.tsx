import React from "react";
import { Button } from "~/components/ui/button";
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
            <label
              htmlFor="npiNumber"
              className="Label-sm Label-gray-700 mb-2 block font-medium"
            >
              NPI number
            </label>
            <Input id="npiNumber" placeholder="10 digit number" />
          </div>

          <div className="mb-6 flex justify-between">
            <Button>Next</Button>
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
