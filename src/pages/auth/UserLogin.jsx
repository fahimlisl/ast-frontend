import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader.jsx";
import { userLogin } from "../../api/auth.api";

const UserLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await userLogin(form);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthHeader
        title="Welcome Back"
        subtitle="Continue your journey of knowledge"
      />

      <form onSubmit={submit} className="space-y-6">
        <input
          className="input"
          placeholder="Email or Phone Number"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-gradient-to-r 
          from-emerald-500 to-emerald-600 
          hover:from-emerald-400 hover:to-emerald-500 
          transition font-semibold text-lg shadow-lg"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-400">
        New here?{" "}
        <Link
          to="/signup"
          className="text-emerald-400 hover:underline font-medium"
        >
          Create an account
        </Link>
      </div>
    </>
  );
};

export default UserLogin;
