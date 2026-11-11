"use client";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h2 className="font-bold">Performance System</h2>
      <button onClick={logout} className="bg-red-500 text-white px-3 py-1">
        Logout
      </button>
    </div>
  );
}