"use client";

import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function OKRs() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="p-6 grid grid-cols-2 gap-4">
          <Link href="/dashboard/okrs/create" className="bg-blue-500 p-4 text-white">Create</Link>
          <Link href="/dashboard/okrs/my" className="bg-green-500 p-4 text-white">My</Link>
          <Link href="/dashboard/okrs/team" className="bg-yellow-500 p-4 text-white">Team</Link>
          <Link href="/dashboard/okrs/company" className="bg-purple-500 p-4 text-white">Company</Link>
        </div>
      </div>
    </div>
  );
}