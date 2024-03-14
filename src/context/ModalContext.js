"use client";
import { createContext, useEffect, useState } from "react";
const mockNotifications = [
  {
    id: 0,
    title: "First notification",
    body: {
      taskId: 4,
      text: "New package will arrive",
    },
    isRead: true,
  },
  {
    id: 1,
    title: "Second notification",
    body: {
      taskId: 5,
      text: "New package will arrive",
    },
    isRead: false,
  },
];

const NOTIFICATIONS_KEY = "notifications";

export const ModalContext = createContext({
  open: false,
  setOpen: () => {},
});

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem(NOTIFICATIONS_KEY);
    if (storedValue) {
      setNotifications(JSON.parse(storedValue));
    }
  }, []);

  const handleOnMessage = (message) => {
    console.log("MSG: ", message);
    const newMessage = {
      messageId: message.messageId,
      title: message.notification.title,
      ...message?.data,
      isRead: false,
    };
    setNotifications((prev) => {
      const newNotifications = [newMessage, ...prev];
      localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(newNotifications));
      return newNotifications;
    });
  };

  const handleViewMessage = (id) => {
    const index = notifications.findIndex((msg) => msg.id === id);
    const newNotifications = [...notifications];
    newNotifications[index].isRead = true;
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(newNotifications));
    setNotifications(newNotifications);
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        notifications,
        setNotifications,
        handleOnMessage,
        handleViewMessage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
