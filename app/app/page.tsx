"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

// font-[family-name:var(--font-micro)]

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#9D0C0C] via-[#0C348C] to-[#026403]">
      <Navbar/>
    </div>
  );
}
