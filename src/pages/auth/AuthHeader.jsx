import { Link } from "react-router-dom";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <Link
        to="/"
        className="inline-block text-sm text-gray-400 hover:text-emerald-400 transition mb-6"
      >
        ← Back to Home
      </Link>

      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-3 text-gray-400 text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthHeader;