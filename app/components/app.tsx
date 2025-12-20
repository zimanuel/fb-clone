"use client";

import { useAppSelector } from "@/app/store/hooks";
import { useEffect } from "react";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAddPostModalOpened = useAppSelector((state) => state.addPost.isOpen);

  useEffect(() => {
    if (isAddPostModalOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isAddPostModalOpened]);
  return <>{children}</>;
}
