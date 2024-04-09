"use client";
import React from "react";
import { DatePickerWithRange } from "~/app/_components/date-picker";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const FindDoctorsPage: React.FC = () => {
  return (
    <main>
      <Card className="mx-auto mt-12 max-w-lg p-12">
        <CardHeader>
          <CardTitle> Post a Shift </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <label
                htmlFor="datesNeeded"
                className="block text-sm font-medium text-gray-700"
              >
                Dates needed
              </label>
              <DatePickerWithRange id="datesNeeded" />
            </div>
            <div className="mb-4">
              <label
                htmlFor="shiftType"
                className="block text-sm font-medium text-gray-700"
              >
                Shift type
              </label>
              <select
                id="shiftType"
                name="shiftType"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="day">Day shift</option>
                <option value="night">Night shift</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Brief description of the shift"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="emrType"
                className="block text-sm font-medium text-gray-700"
              >
                EMR type
              </label>
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
                  <label
                    htmlFor="travelCovered"
                    className="font-medium text-gray-700"
                  >
                    Travel covered
                  </label>
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
                  <label
                    htmlFor="malpracticeInsuranceCovered"
                    className="font-medium text-gray-700"
                  >
                    Malpractice insurance covered
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="additionalDetails"
                className="block text-sm font-medium text-gray-700"
              >
                Additional details
              </label>
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Any additional details"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="focus:ring-indigo rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};
export default FindDoctorsPage;
