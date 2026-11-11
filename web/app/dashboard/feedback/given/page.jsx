"use client";

import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";

export default function GivenFeedback() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Feedback Given</h2>
          <div className="space-y-3">
            <div className="border rounded p-4">
              <p><strong>To:</strong> Alex</p>
              <p>You communicate clearly and keep the team aligned.</p>
            </div>
            <div className="border rounded p-4">
              <p><strong>To:</strong> Priya</p>
              <p>Great collaboration and strong ownership during the sprint.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
