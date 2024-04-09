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
import type { NPIInformation } from "~/server/api/routers/public_api";
import { trpc } from "~/utils/trpc";

const VerifyPhysicianCredentials: React.FC = () => {
  const [npiNumber, setNpiNumber] = useState("");
  const [npiInfo, setNpiInfo] = useState<NPIInformation>();
  const npiQuery = trpc.public_api.getNPIInformation.useQuery(
    { npiNumber: parseInt(npiNumber, 10) },
    {
      enabled: false,
    },
  );

  const handleNPIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNpiNumber(event.target.value);
  };

  const handleVerification = async () => {
    if (npiNumber.length === 10) {
      try {
        const result = await npiQuery.refetch();
        setNpiInfo(result.data?.results[0]);
      } catch (error) {
        console.error("Failed to fetch NPI information:", error);
      }
    }
  };

  return (
    <main>
      <Card className="mx-auto mt-12 max-w-lg p-12">
        {npiInfo ? (
          <>
            {" "}
            <CardHeader>
              <CardTitle>Verify your information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label className="Label-lg Label-gray-700 mb-2 block font-medium">
                  Full Name
                </Label>
                <p>
                  {npiInfo.basic.name_prefix &&
                  npiInfo.basic.name_prefix !== "--"
                    ? `${npiInfo.basic.name_prefix} `
                    : ""}{" "}
                  {npiInfo.basic.first_name}{" "}
                  {npiInfo.basic.middle_name
                    ? ` ${npiInfo.basic.middle_name}`
                    : ""}{" "}
                  {npiInfo.basic.last_name}{" "}
                  {npiInfo.basic.name_suffix &&
                  npiInfo.basic.name_suffix !== "--"
                    ? ` ${npiInfo.basic.name_suffix}`
                    : ""}
                </p>
              </div>
              <div className="mb-4">
                <Label className="Label-sm Label-gray-700 mb-2 block font-medium">
                  Credential
                </Label>
                <p>{npiInfo.basic.credential}</p>
              </div>
              <div className="mb-4">
                <Label className="Label-sm Label-gray-700 mb-2 block font-medium">
                  Gender
                </Label>
                <p>{npiInfo.basic.gender === "M" ? "Male" : "Female"}</p>
              </div>
              <div className="mb-4">
                <Label className="Label-sm Label-gray-700 mb-2 block font-medium">
                  NPI Number
                </Label>
                <p>{npiInfo.number}</p>
              </div>
              <div className="mb-4">
                <Label className="Label-sm Label-gray-700 mb-2 block font-medium">
                  Enumeration Date
                </Label>
                <p>{npiInfo.basic.enumeration_date}</p>
              </div>
              <div className="mb-4">
                <Label className="Label-sm Label-gray-700 mb-2 block font-medium">
                  Last Updated Date
                </Label>
                <p>{npiInfo.basic.last_updated}</p>
              </div>
              <div className="mb-4">
                <Label className="Label-sm Label-gray-700 mb-2 block font-medium">
                  Addresses
                </Label>
                {npiInfo.addresses.map((address, index) => (
                  <p className="mb-4" key={index}>
                    {address.address_1} <br /> {address.city}, {address.state},{" "}
                    {address.postal_code} <br />
                    {address.country_name}, {address.telephone_number} (
                    {address.address_purpose})
                  </p>
                ))}
              </div>
              <div className="mb-4">
                <Label className="Label-sm Label-gray-700 mb-2 block font-medium">
                  Taxonomies
                </Label>
                {npiInfo.taxonomies.map((taxonomy, index) => (
                  <p className="mb-4" key={index}>
                    {taxonomy.code} {taxonomy.desc} <br />
                    {taxonomy.state} <br />
                  </p>
                ))}
              </div>
              {/* {JSON.stringify(npiInfo)} */}

              <div className="mb-6 flex space-x-4">
                <Button
                  onClick={handleVerification}
                  className={buttonVariants({ variant: "default" })}
                >
                  {"Edit info"}
                </Button>
                <Link
                  href="/home/doc_upload"
                  className={buttonVariants({ variant: "default" })}
                >
                  Looks good
                </Link>
              </div>
            </CardContent>{" "}
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle>Verify your physician credentials.</CardTitle>
              <CardDescription className="mb-4">
                Please provide your NPI number to help us quickly verify your
                credentials. Example: 1609141886
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
                  {npiQuery.isLoading ? "Loading..." : "Next"}
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
