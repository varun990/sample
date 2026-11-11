"use client";

import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function Feedback() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Feedback</h2>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/dashboard/feedback/give" className="bg-blue-500 text-white p-4">
              Give Feedback
            </Link>

            <Link href="/dashboard/feedback/ask" className="bg-green-500 text-white p-4">
              Ask Feedback
            </Link>

            <Link href="/dashboard/feedback/received" className="bg-yellow-500 text-white p-4">
              Received
            </Link>

            <Link href="/dashboard/feedback/given" className="bg-purple-500 text-white p-4">
              Given
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}