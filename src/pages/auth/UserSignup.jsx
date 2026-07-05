import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader.jsx";
import { userSignup } from "../../api/auth.api";

const UserSignup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    profilePhoto: null,
  });

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));

    try {
      await userSignup(fd);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <AuthHeader
        title="Join Noor-ul-Hidayah"
        subtitle="Create an account to explore authentic Islamic content"
      />

      <form onSubmit={submit} className="space-y-5">
        <input className="input" placeholder="Username" onChange={(e)=>setForm({...form,username:e.target.value})} />
        <input className="input" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} />
        <input className="input" placeholder="Phone Number" onChange={(e)=>setForm({...form,phoneNumber:e.target.value})} />
        <input type="password" className="input" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} />

        <label className="block text-sm text-gray-400 mt-2">
          Profile Photo
        </label>
        <input
          type="file"
          onChange={(e)=>setForm({...form,profilePhoto:e.target.files[0]})}
          className="text-sm text-gray-300"
        />

        <button className="w-full py-4 rounded-2xl bg-gradient-to-r 
        from-emerald-500 to-emerald-600 font-semibold text-lg">
          Create Account
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-400">
        Already registered?{" "}
        <Link to="/login" className="text-emerald-400 hover:underline">
          Sign in
        </Link>
      </div>
    </>
  );
};

export default UserSignup;
