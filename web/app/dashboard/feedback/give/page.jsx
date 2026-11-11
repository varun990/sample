"use client";

import { useState } from "react";
import API from "../../../lib/api";

export default function Give() {
  const [comment, setComment] = useState("");

  const submit = async () => {
    await API.post("/feedback", { comment });
    alert("Sent");
  };

  return (
    <div className="p-6">
      <textarea onChange={(e) => setComment(e.target.value)} className="border p-2"/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}