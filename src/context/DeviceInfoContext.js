"use client";
import { useState, createContext, useEffect } from "react";
import {
  browserName,
  deviceType,
  osName,
  osVersion,
  isIOS,
} from "react-device-detect";

export const DeviceInfoContext = createContext();

export const DeviceInfoProvider = ({ children }) => {
  const [deviceInfo, setDeviceInfo] = useState();

  useEffect(() => {
    setDeviceInfo({
      standalone: window.matchMedia("(display-mode: standalone)").matches, // true if PWA is installed
      browserName,
      osName,
      deviceType,
      osVersion,
      isIOS,
      isActiveNotification: true,
    });
  }, []);

  return (
    <DeviceInfoContext.Provider value={{ deviceInfo, setDeviceInfo }}>
      {children}
    </DeviceInfoContext.Provider>
  );
};
