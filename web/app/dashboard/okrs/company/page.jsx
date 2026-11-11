"use client";

import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";

export default function CompanyOKRs() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Company OKRs</h2>
          <ul className="space-y-3">
            <li className="border rounded p-4">Increase retention by 12%</li>
            <li className="border rounded p-4">Launch new customer onboarding flow</li>
            <li className="border rounded p-4">Improve operational efficiency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
