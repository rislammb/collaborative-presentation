import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimedUN = username.trim();
    if (trimedUN) {
      setUsername("");
      return navigate(`/presentation/${trimedUN}`);
    }
  };

  return (
    <div className="navbar bg-blue-950">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="input input-sm text-gray-800 input-bordered w-[135px]"
        />
        <button type="submit" className="btn btn-sm btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
