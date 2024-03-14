"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useEffect } from "react";

import { Loader } from "@/components/common/Loader";

export function Guard({ children }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    const userId = localStorage.getItem("userId") || "";
    if (loading) {
      setLoading(!token || !userId);
    }
    if (!token || !userId) router.push("/login");
  }, [router, loading]);
  if (loading) return <Loader />;
  return <>{children}</>;
}
