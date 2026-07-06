import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import UserLogin from "../pages/auth/UserLogin.jsx";
import UserSignup from "../pages/auth/UserSignup.jsx";
import AdminLogin from "../pages/auth/AdminLogin.jsx";

import Tafser from "../pages/Tafser.jsx";

import Articles from "../pages/Articles.jsx";
import ArticleDetails from "../pages/ArticleDetails.jsx";

import Khutba from "../pages/Khutba.jsx";

import AdminLayout from "../layout/AdminLayout.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminArticles from "../pages/admin/AdminArticles.jsx";
import AdminArticleForm from "../pages/admin/AdminArticleForm.jsx";
import AdminKhutba from "../pages/admin/AdminKhutba.jsx";
import AdminKhutbaForm from "../pages/admin/AdminKhutbaForm.jsx";
import AdminTafser from "../pages/admin/AdminTafser.jsx";
import Download from "../pages/Download.jsx";
import Contact from "../pages/Contact.jsx";
import Guides from "../pages/Guides.jsx";
import AdminDownload from "../pages/admin/AdminDownload.jsx";
import AdminDownloadForm from "../pages/admin/AdminDownloadForm.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tafser" element={<Tafser />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/khutba" element={<Khutba />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guides" element={<Guides />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/articles" element={<AdminArticles />} />
        <Route path="/admin/articles/new" element={<AdminArticleForm />} />
        <Route path="/admin/articles/edit/:id" element={<AdminArticleForm />} />

        <Route path="/admin/khutba" element={<AdminKhutba />} />
        <Route path="/admin/khutba/new" element={<AdminKhutbaForm />} />
        <Route path="/admin/khutba/edit/:id" element={<AdminKhutbaForm />} />

        <Route path="/admin/tafser" element={<AdminTafser />} />

        <Route path="/admin/download" element={<AdminDownload />} />
        <Route path="/admin/download/new" element={<AdminDownloadForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
