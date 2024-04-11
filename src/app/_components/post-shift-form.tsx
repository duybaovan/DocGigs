"use client";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { DatePickerWithRange } from "~/app/_components/date-picker";
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

interface PostShiftFormProps {
  postShiftTap: () => void;
}

export const PostShiftForm: React.FC<PostShiftFormProps> = ({
  postShiftTap,
}) => {
  return (
    <Card className="mx-auto mt-4 max-w-lg p-4">
      <CardHeader>
        <CardTitle> Post a Shift </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="mb-4">
            <Label className="text-sm font-medium text-slate-700">
              Dates needed
            </Label>
            <DatePickerWithRange id="datesNeeded" />
          </div>
          <div className="mb-4">
            <Label className="text-sm font-medium text-slate-700">
              Shift type
            </Label>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Shift type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="day">Day shift</SelectItem>
                  <SelectItem value="night">Night shift</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <Label className="text-sm font-medium text-slate-700">
              Description
            </Label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Brief description of the shift"
            ></textarea>
          </div>
          <div className="mb-4">
            <Label className="text-sm font-medium text-slate-700">
              EMR type
            </Label>
            <input
              type="text"
              id="emrType"
              name="emrType"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Type of EMR system"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="travelCovered"
                  name="travelCovered"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <Label className="text-sm font-medium text-slate-700">
                  Travel covered
                </Label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="malpracticeInsuranceCovered"
                  name="malpracticeInsuranceCovered"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <Label className="text-sm font-medium text-slate-700">
                  Malpractice insurance covered
                </Label>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button onClick={() => postShiftTap()} type="submit">
            Submit
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
