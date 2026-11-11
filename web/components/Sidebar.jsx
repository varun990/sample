"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">PMS</h2>

      <ul className="space-y-3">
        <li><Link href="/dashboard">Home</Link></li>
        <li><Link href="/dashboard/my-info">My Info</Link></li>
        <li><Link href="/dashboard/okrs">OKRs</Link></li>
        <li><Link href="/dashboard/feedback">Feedback</Link></li>
        <li><Link href="/dashboard/reviews">Reviews</Link></li>
      </ul>
    </div>
  );
}