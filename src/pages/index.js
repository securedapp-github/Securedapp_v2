"use client";
import MetaTags from "../components/common/MetaTags";
import { useDispatch } from "react-redux";
import Home from "../pageComponents/home/HomePage";
import { useRouter } from "next/router";
import {
  getHomeSelector,
  setIsLargeScreen,
} from "../redux/slices/main/homeSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("../components/chat/ChatWidget"), {
  ssr: false,
});

export default function Index() {
  const dispatch = useDispatch();
  const { isLargeScreen, isRequestModalOpen } = useSelector(getHomeSelector);
  const router = useRouter();
  const pathname = router.pathname;
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const isSolidityShieldScan = pathname.startsWith("/solidity-shield-scan");

    // Only manipulate the DOM on the client side
    if (isSolidityShieldScan && isLargeScreen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Delay loading the chatbot to improve initial Performance scores
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isLargeScreen, pathname]);

  return (
    <div className="bg-primary dark:bg-secondary text-secondary dark:text-primary">
      <Home />
      {showChat && (
        <ChatWidget bottomOffset={108} rightOffset={24} mobileBottomOffset={84} />
      )}
    </div>
  );
}
