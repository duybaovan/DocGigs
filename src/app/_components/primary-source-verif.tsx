"use client";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";
import RemoteSources from "@uppy/remote-sources";
import Transloadit from "@uppy/transloadit";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface PSVVerifyFormProps {
  startVerifyTap: () => void;
}

export const PSVVerifyForm: React.FC<PSVVerifyFormProps> = ({
  startVerifyTap,
}) => {
  const uppy = new Uppy()
    .use(Webcam)
    .use(RemoteSources, {
      companionUrl: "https://your-companion-url",
      sources: ["Box", "Dropbox", "GoogleDrive", "OneDrive", "Url"],
    })
    .use(Transloadit, {
      assemblyOptions: {
        params: {
          auth: { key: "3595d13af39b485b9ab798860b003df1" },
          template_id: "9782abb40a274c3fa8862439dd2d101c",
        },
      },
    });

  uppy.on("complete", (result) => {
    console.log(result.successful);
    if (result.successful) {
      startVerifyTap();
    }
  });

  return (
    <Card className="mx-auto mt-12 max-w-lg p-12">
      <CardHeader>
        <CardTitle> Primary Source Verification</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="mb-4">
            <Label className="text-sm font-medium text-slate-700">
              Verification Type
            </Label>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="State License" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="day">State License</SelectItem>
                  <SelectItem value="night">Board Certification</SelectItem>
                  <SelectItem value="night">Exclusions and Opt-Out</SelectItem>
                  <SelectItem value="night">DEA Certification</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
        <Dashboard height={200} className="mt-8" uppy={uppy} />
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button onClick={() => startVerifyTap()} type="submit">
            Submit
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
