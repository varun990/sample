"use client";

import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";

export default function TeamOKRs() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Team OKRs</h2>
          <ul className="space-y-3">
            <li className="border rounded p-4">Ship the Q4 roadmap milestones</li>
            <li className="border rounded p-4">Increase product adoption in pilot accounts</li>
            <li className="border rounded p-4">Reduce cycle time across the release pipeline</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
