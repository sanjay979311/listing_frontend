"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { loginSuccess } from "../redux/slices/authSlice";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getCookie("token");

    if (token && !isAuthenticated) {
      // Restore user from token (or fetch user from API)
      dispatch(loginSuccess({ token, user: { name: "Demo User" } }));
      setLoading(false);
    } else if (!token) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, dispatch, router]);

  if (loading || !isAuthenticated) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return <>{children}</>;
}
