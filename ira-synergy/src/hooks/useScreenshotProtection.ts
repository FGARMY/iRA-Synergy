"use client";

import { useEffect, useState, useCallback, useRef } from "react";

/**
 * Configuration options for the useScreenshotProtection hook.
 */
export interface UseScreenshotProtectionProps {
  watermarkText?: string;
  overlayDuration?: number;
  blurOnHide?: boolean;
  blockDevTools?: boolean;
  blockRightClick?: boolean;
  userEmail?: string;
}

/**
 * Custom hook to deter screenshots, copying, and developer console inspections.
 * 
 * @param props Configuration options for the security modules
 * @returns Object containing block states and a manual trigger callback
 */
export function useScreenshotProtection({
  overlayDuration = 1200,
  blurOnHide = true,
  blockDevTools = true,
  blockRightClick = true,
}: UseScreenshotProtectionProps = {}) {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
  const blockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Instantly blanks out screen for a configured duration when a screenshot attempt is made
  const triggerBlackout = useCallback(() => {
    setIsBlocked(true);
    if (blockTimeoutRef.current) {
      clearTimeout(blockTimeoutRef.current);
    }
    blockTimeoutRef.current = setTimeout(() => {
      setIsBlocked(false);
    }, overlayDuration);
  }, [overlayDuration]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Helper: checks if event targets an interactive input element
    const isInputElement = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      const tagName = target.tagName;
      return (
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        target.isContentEditable ||
        tagName === "SELECT" ||
        tagName === "OPTION"
      );
    };

    // -------------------------------------------------------------
    // 1. Keyboard Shortcuts & PrintScreen Interception
    // -------------------------------------------------------------
    const handleKeyDown = (e: KeyboardEvent) => {
      // Print Screen detection key intercept
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        e.preventDefault();
        triggerBlackout();
      }

      const ctrlOrCmd = e.ctrlKey || e.metaKey;

      if (ctrlOrCmd) {
        const key = e.key.toLowerCase();
        
        // Ctrl+P (Print)
        if (key === "p") {
          e.preventDefault();
          triggerBlackout();
        }

        // Ctrl+S (Save Page)
        if (key === "s") {
          e.preventDefault();
          triggerBlackout();
        }

        // Ctrl+A (Select All - Layer 4 restriction)
        if (key === "a" && !isInputElement(e.target as HTMLElement)) {
          e.preventDefault();
        }

        // Ctrl+C (Copy - Layer 4 restriction)
        if (key === "c" && !isInputElement(e.target as HTMLElement)) {
          e.preventDefault();
        }
      }

      // DevTools keys: F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+Shift+K
      if (blockDevTools) {
        if (e.key === "F12" || e.keyCode === 123) {
          e.preventDefault();
        }
        if (ctrlOrCmd && e.shiftKey) {
          const key = e.key.toLowerCase();
          if (key === "i" || key === "j" || key === "c" || key === "k") {
            e.preventDefault();
          }
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        triggerBlackout();
        // Clear clipboard immediately to block memory paste dumps
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText("Restricted Access").catch(() => {});
        }
      }
    };

    // Wipes clipboard on global copy attempts
    const handleCopy = (e: ClipboardEvent) => {
      if (!isInputElement(e.target as HTMLElement)) {
        e.preventDefault();
        if (e.clipboardData) {
          e.clipboardData.setData("text/plain", "Restricted Access");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("copy", handleCopy as EventListener);

    // -------------------------------------------------------------
    // 2. Page Visibility API & Tab Focus Blurring
    // -------------------------------------------------------------
    const handleVisibilityChange = () => {
      if (!blurOnHide) return;
      
      const body = document.body;
      if (document.visibilityState === "hidden") {
        body.classList.add("screenshot-blur");
      } else {
        body.classList.remove("screenshot-blur");
      }
    };

    const handleWindowBlur = () => {
      if (!blurOnHide) return;
      document.body.classList.add("screenshot-blur");
    };

    const handleWindowFocus = () => {
      if (!blurOnHide) return;
      document.body.classList.remove("screenshot-blur");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    // -------------------------------------------------------------
    // 3. Right-Click Context Menu & Selection Lock
    // -------------------------------------------------------------
    const handleContextMenu = (e: MouseEvent) => {
      if (blockRightClick && !isInputElement(e.target as HTMLElement)) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      if (!isInputElement(e.target as HTMLElement)) {
        e.preventDefault();
      }
    };

    // Apply global selections blocking CSS attributes
    const htmlElement = document.documentElement;
    if (htmlElement) {
      htmlElement.style.setProperty("user-select", "none");
      htmlElement.style.setProperty("-webkit-user-select", "none");
    }

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    // -------------------------------------------------------------
    // 4. DevTools Open Detection via size threshold delta
    // -------------------------------------------------------------
    let pollerId: number | null = null;
    
    if (blockDevTools) {
      const detectDevTools = () => {
        const threshold = 160;
        const widthDelta = window.outerWidth - window.innerWidth > threshold;
        const heightDelta = window.outerHeight - window.innerHeight > threshold;

        if (widthDelta || heightDelta) {
          setIsDevToolsOpen(true);
        } else {
          setIsDevToolsOpen(false);
        }
      };

      window.addEventListener("resize", detectDevTools);
      pollerId = window.setInterval(detectDevTools, 800) as unknown as number;
      detectDevTools(); // Initial run
    }

    // -------------------------------------------------------------
    // Cleanup of all triggers on unmount
    // -------------------------------------------------------------
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("copy", handleCopy as EventListener);
      
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);

      const htmlEl = document.documentElement;
      if (htmlEl) {
        htmlEl.style.removeProperty("user-select");
        htmlEl.style.removeProperty("-webkit-user-select");
      }

      if (blockDevTools) {
        window.removeEventListener("resize", () => {});
        if (pollerId !== null) clearInterval(pollerId);
      }

      if (blockTimeoutRef.current) clearTimeout(blockTimeoutRef.current);
      document.body.classList.remove("screenshot-blur");
    };
  }, [overlayDuration, blurOnHide, blockDevTools, blockRightClick, triggerBlackout]);

  return {
    isBlocked,
    isDevToolsOpen,
    triggerBlackout,
  };
}
