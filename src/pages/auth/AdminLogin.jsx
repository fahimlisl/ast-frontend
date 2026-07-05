import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader.jsx";
import { adminLogin } from "../../api/auth.api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await adminLogin(form);
      navigate("/admin/dashboard");
    } catch {
      alert("Unauthorized");
    }
  };

  return (
    <>
      <AuthHeader
        title="Admin Access"
        subtitle="Restricted — authorized personnel only"
      />

      <form onSubmit={submit} className="space-y-6">
        <input className="input" placeholder="Email or Phone" onChange={(e)=>setForm({...form,email:e.target.value})} />
        <input type="password" className="input" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button className="w-full py-4 rounded-2xl bg-gradient-to-r 
        from-red-500 to-red-600 font-semibold text-lg">
          Enter Dashboard
        </button>
      </form>
    </>
  );
};

export default AdminLogin;
