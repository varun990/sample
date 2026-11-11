"use client";

import { useEffect, useState } from "react";
import API from "../../../lib/api";
import FeedbackCard from "../../../../components/FeedbackCard";

export default function Received() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/feedback").then(res => setData(res.data));
  }, []);

  return (
    <div className="p-6">
      {data.map(f => <FeedbackCard key={f.id} fb={f} />)}
    </div>
  );
}