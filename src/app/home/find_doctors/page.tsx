"use client";
import React from "react";
import { DoctorList } from "~/app/_components/doctor-list";
import { PostShiftForm } from "~/app/_components/post-shift-form";

const FindDoctorsPage: React.FC = () => {
  return (
    <main>
      <DoctorList />
      {/* <PostShiftForm /> */}
    </main>
  );
};
export default FindDoctorsPage;
