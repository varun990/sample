"use client";

import { useState } from "react";
import API from "../../../lib/api";
import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";

export default function CreateObjective() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "individual",
    keyResults: []
  });

  const addKeyResult = () => {
    setForm({
      ...form,
      keyResults: [
        ...form.keyResults,
        { title: "", metric: "%", start: 0, target: 100 }
      ]
    });
  };

  const handleSubmit = async () => {
    await API.post("/goals", form);
    alert("Objective created");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Create Objective</h2>

          <input
            placeholder="Objective Title"
            className="border p-2 w-full mb-3"
            onChange={(e) => setForm({...form, title: e.target.value})}
          />

          <textarea
            placeholder="Description"
            className="border p-2 w-full mb-3"
            onChange={(e) => setForm({...form, description: e.target.value})}
          />

          <select
            className="border p-2 mb-3"
            onChange={(e) => setForm({...form, type: e.target.value})}
          >
            <option value="individual">Individual</option>
            <option value="self">Self Development</option>
          </select>

          <button onClick={addKeyResult} className="bg-gray-700 text-white p-2 mb-3">
            Add Key Result
          </button>

          {form.keyResults.map((kr, index) => (
            <div key={index} className="border p-3 mb-2">
              <input placeholder="KR Title"
                onChange={(e) => {
                  const updated = [...form.keyResults];
                  updated[index].title = e.target.value;
                  setForm({...form, keyResults: updated});
                }}
              />

              <select onChange={(e) => {
                const updated = [...form.keyResults];
                updated[index].metric = e.target.value;
                setForm({...form, keyResults: updated});
              }}>
                <option>%</option>
                <option>Number</option>
                <option>Currency</option>
                <option>Time</option>
              </select>
            </div>
          ))}

          <button onClick={handleSubmit} className="bg-blue-500 text-white p-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}