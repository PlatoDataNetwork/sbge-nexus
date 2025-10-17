import { useEffect } from "react";

export const useVersionCheck = () => {
  useEffect(() => {
    // Check for new version every 5 minutes
    const checkInterval = setInterval(async () => {
      try {
        const response = await fetch("/index.html", {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" }
        });
        
        if (response.ok) {
          const html = await response.text();
          const currentVersion = document.documentElement.outerHTML;
          
          // Simple hash comparison - if HTML changed, reload
          if (html !== currentVersion) {
            console.log("New version detected, reloading...");
            window.location.reload();
          }
        }
      } catch (error) {
        console.error("Version check failed:", error);
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(checkInterval);
  }, []);
};
