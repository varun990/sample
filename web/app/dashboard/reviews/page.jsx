"use client";

import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";

export default function ReviewsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Reviews</h2>
          <div className="space-y-3">
            <div className="border rounded p-4">
              <p><strong>Q3 Review:</strong> Strong execution and ownership</p>
            </div>
            <div className="border rounded p-4">
              <p><strong>Manager Notes:</strong> Focus on cross-team collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
