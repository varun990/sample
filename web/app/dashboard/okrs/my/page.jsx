"use client";

import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";

export default function MyOKRs() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">My OKRs</h2>
          <div className="space-y-3">
            <div className="border rounded p-4">
              <p><strong>Objective:</strong> Improve onboarding experience</p>
              <p>Key Result: Reduce time-to-value by 20%</p>
            </div>
            <div className="border rounded p-4">
              <p><strong>Objective:</strong> Strengthen delivery quality</p>
              <p>Key Result: Ship zero critical bugs in next cycle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
