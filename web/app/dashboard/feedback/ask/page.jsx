"use client";

import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";

export default function AskFeedback() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Ask for Feedback</h2>
          <textarea
            className="w-full border p-3 rounded mb-3"
            rows={5}
            placeholder="Ask your manager or teammate for feedback..."
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded">Send Request</button>
        </div>
      </div>
    </div>
  );
}
