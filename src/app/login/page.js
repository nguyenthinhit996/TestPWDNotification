"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Login from "@/components/Login";
import { DeviceInfoContext } from "@/context/DeviceInfoContext";
import { minVersionCheck } from "@/util/Utils";
import WarningModal from "@/components/common/WarningModal";

export default function Home() {
  const { deviceInfo, setDeviceInfo } = useContext(DeviceInfoContext);
  const [open, setOpen] = useState(false);
  console.log("DEVICE INFO: ", deviceInfo);

  useEffect(() => {
    if (deviceInfo?.isIOS) {
      if (!minVersionCheck(deviceInfo.osVersion.toString(), 16, 5)) {
        setDeviceInfo((prev) => ({ ...prev, isActiveNotification: false }));
        setOpen(true);
      }
    }
  }, [deviceInfo?.isIOS]);

  return (
    <Fragment>
      <WarningModal open={open} onClose={() => setOpen(false)} />
      <Login />
    </Fragment>
  );
}
