const { admin } = require("../../config/other/firebase");
module.exports.sendPushNotification2 = async (fcmToken, data) => {
  const message = {
    token: fcmToken,
    notification: {
      title: "New task number: " + data.taskId,
      body: data.title,
    },
    webpush: {
      fcm_options: {
        link: "https://dummypage.com",
      },
    },
  };

  // const message = {
  //   token: fcmToken,
  //   data: data,
  //   webpush: {
  //     fcm_options: {
  //       link: "http:localhost:3000/",
  //     },
  //   },
  // };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      // Message sent successfully
      console.log("Message sent:", response);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
};

const { getAccessToken } = require("../authentication/firebaseService");
const serviceAccount = require("../../config/other/servicepwa-dac50-firebase-adminsdk-zzzdn-a0366bd8a9.json");

module.exports.sendPushNotification = async (fcmToken, data) => {
  console.log();
  try {
    const accessToken = await getAccessToken();
    const body = JSON.stringify({
      message: {
        token: fcmToken,
        webpush: {
          // data: data,
          // notification: {
          //   title: "New task number: " + data.taskId,
          //   body: data.title,
          //   requireInteraction: "true",
          // },
          fcm_options: {
            link: "https://dummypage.com",
          },
        },
      },
    });
    const res = await fetch(
      `https://fcm.googleapis.com/v1/projects/${serviceAccount.project_id}/messages:send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: body,
      }
    );
    const resData = await res.json();
    return resData;
  } catch (err) {
    console.error(err.message);
  }
};
