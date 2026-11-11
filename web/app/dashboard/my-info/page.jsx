"use client";

import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";

export default function MyInfo() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h2 className="text-xl font-bold">My Info</h2>
          <p>Name: User</p>
          <p>Role: Employee</p>
        </div>
      </div>
    </div>
  );
}