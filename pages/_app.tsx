import CollapsableSideNavbar from "@/components/CollapsableSideNavbar";
import SideNavbar from "@/components/SideNavbar";
import { TopBar } from "@/components/TopBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import {MdArrowBack,MdArrowForward} from "react-icons/md";

export default function App({ Component, pageProps }: AppProps) {

  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex flex-col h-screen">
  {/* Sidebar on the right */}
  <div className="flex-shrink">
    <CollapsableSideNavbar expanded={expanded} setExpanded={setExpanded} />
  </div>

  {/* Main content container */}
  <div className={`flex flex-col flex-grow overflow-hidden ${expanded ? "md:pl-60" : "md:pl-10"}`}>
    {/* TopBar at the top */}
    <TopBar />

    {/* Main content */}
    <div className="flex-grow overflow-x-hidden overflow-y-auto p-4 bg-white">
      <Component {...pageProps} />
    </div>
  </div>
</div>
  );
}
