"use client";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Link
              href="/dashboard/okrs"
              className="rounded-xl bg-blue-600 p-5 text-white shadow hover:bg-blue-700"
            >
              OKRs
            </Link>
            <Link
              href="/dashboard/feedback"
              className="rounded-xl bg-green-600 p-5 text-white shadow hover:bg-green-700"
            >
              Feedback
            </Link>
            <Link
              href="/dashboard/my-info"
              className="rounded-xl bg-purple-600 p-5 text-white shadow hover:bg-purple-700"
            >
              My Info
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
