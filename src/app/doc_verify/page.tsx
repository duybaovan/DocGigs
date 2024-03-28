import React from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const VerifyPhysicianCredentials: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100">
      <Card className="mx-auto max-w-lg p-8">
        <header className="mb-6 flex items-center justify-between">
          <Label className="Label-gray-800">sermo</Label>
          <Button variant="ghost">Log in</Button>
        </header>
        <main>
          <div className="mb-4 flex items-center space-x-2">
            <Label>CREATE</Label>
            <Label>&rarr;</Label>
            <Label className="Label-purple-500">VERIFY</Label>
            <Label>&rarr;</Label>
            <Label>COMPLETE</Label>
          </div>
          <Label className="mb-2">Verify your physician credentials</Label>
          <Label className="mb-4">
            Please provide your NPI number to help us quickly verify your
            credentials.
          </Label>
          <div className="mb-4">
            <label
              htmlFor="npiNumber"
              className="Label-sm Label-gray-700 block font-medium"
            >
              NPI number
            </label>
            <Input id="npiNumber" placeholder="10 digit number" />
          </div>
          <div className="mb-4 flex space-x-2">
            <Button variant="outline">Skip this step</Button>
            <Button variant="outline">Get verified Manually</Button>
            <Button variant="outline">Dont have your NPI number?</Button>
            <Button variant="outline">Enter your AMA number</Button>
          </div>
          <div className="flex justify-between">
            <Button variant="ghost">Back</Button>
            <Button>Next</Button>
          </div>
        </main>
        <footer className="Label-center Label-sm Label-gray-600 mt-6">
          Need help? Contact us at support@sermo.com
          <br />
          Terms of Service - Privacy - Cookies
        </footer>
      </Card>
    </div>
  );
};

export default VerifyPhysicianCredentials;
