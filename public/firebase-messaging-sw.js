importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.8.1/firebase-app-compat.min.js"
);
importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.8.1/firebase-messaging-compat.min.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAia2Xqdgzh2SIE_waNbMXVZYW6_2Vrfwk",
  authDomain: "servicepwa-dac50.firebaseapp.com",
  projectId: "servicepwa-dac50",
  storageBucket: "servicepwa-dac50.appspot.com",
  messagingSenderId: "1054034773298",
  appId: "1:1054034773298:web:44449e01304240b6b0432b",
  measurementId: "G-0C8B941HW7",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   data: payload.data,
  //   taskId: payload.data.taskId,
  //   tag: "notification-1",
  // };

  self.addEventListener(
    "notificationclick",
    function (e) {
      var t = e.notification;
      if ((console.log("notificationclick", e), "" !== e.action))
        "close" === e.action && t.close();
      else {
        var n = "http://localhost:3000";
        n && self.clients.openWindow(n);
      }
    },
    !1
  );

  self.addEventListener("install", function (e) {
    self.skipWaiting(), console.log("MagicBellSW:install");
  });
  self.addEventListener("activate", function (e) {
    console.log("MagicBellSW:activate"), e.waitUntil(self.clients.claim());
  });
  self.addEventListener("push", function (e) {
    var t,
      n = null === (t = e.data) || void 0 === t ? void 0 : t.json(),
      r = {
        body: n.content || "",
        vibrate: [100, 50, 100],
        data: "data nek",
        actions: [{ action: "close", title: "Close" }],
      };
    e.waitUntil(self.registration.showNotification("n.title", r));
  });

  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
    tag: "notification-1",
  };

  // const channel = new BroadcastChannel("NotificationTaskView");

  // //after use click notify on panner Inside the notification click event handler
  // self.registration.getNotifications().then(function (notifications) {
  //   // console.log("channel.postMessage ", notifications);
  //   // const dataSent = [];
  //   // notifications.forEach((element) => {
  //   //   if (element.data.FCM_MSG) {
  //   //     let newObject = {
  //   //       data: element.data.FCM_MSG,
  //   //     };
  //   //     dataSent.push(newObject);
  //   //   }
  //   // });
  //   // channel.postMessage(dataSent);
  // });

  // self.registration.hideNotification();
  self.registration.showNotification(notificationTitle, notificationOptions);
});
