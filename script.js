// Function to ask for notification permission
function requestPermission() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        new Notification("Notifications enabled!");
      } else {
        console.log("Notification permission denied");
      }
    });
  }
}

// Function when user confirms Wudu
function confirmWudu() {
  alert("You have Wudu!");
}

// Function when user does NOT have Wudu
function noWudu() {
  if (Notification.permission === "granted") {
    new Notification("Reminder: Please do Wudu before prayer!");
  } else {
    requestPermission();
  }
}
