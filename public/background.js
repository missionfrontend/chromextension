chrome.runtime.onInstalled.addListener(async () => {
  console.log("Extension tracking");

  chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "Notification.jpg",
      title: `Alarm ${alarm.name}`,
      message: `Alarm ${alarm.name} has been triggered`,
    });
  });
});


chrome.history.onVisited.addListener(async (data) => {
  const history = await chrome.storage.local.get(["history"])
  const totalHistory = history?.history

  if(!totalHistory){
    const history =[]
    history.push(data)
    chrome.storage.local.set({history:history})
  }else{
    chrome.storage.local.set({history:[...totalHistory,data]})
  }
  
  });
  
// function stoponVisitedUrl() {
//   chrome.history.onVisited.removeListener(onVisitedUrl);
// }
// trackingStatus ? onVisitedUrl(): stoponVisitedUrl()
// chrome.runtime.onMessage.addListener(async (message) => {
//   const trackingStatus = await chrome.storage.local.get(["tracking"]);

//   if (
//     message.action === "trackingStatus" &&
//     trackingStatus?.tracking === true
//   ) {
//     onVisitedUrl();
//   }

//   if (
//     message.action === "trackingStatus" &&
//     trackingStatus?.tracking === false
//   ) {
//     stoponVisitedUrl();
//   }
// });
