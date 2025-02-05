let notificationTimeout;  
let progressBarTimeout;  

window.addEventListener("message", function(event) {
    if (event.data.action === "show") {
        const notification = document.getElementById("notification");
        const title = document.getElementById("notif-title");
        const message = document.getElementById("notif-message");
        const icon = document.getElementById("notif-icon");
        const notifType = document.getElementById("notif-type");
        const progressWrapper = document.querySelector(".progress-bar");

        title.textContent = event.data.title || "INFORMATION";
        message.innerHTML = event.data.message || "This is a test notification.<br>These notifications are customizable.";
        icon.className = `fa-solid ${event.data.icon || "fa-comment-dots"} text-2xl text-white mr-4`;
        notifType.textContent = event.data.type || "SERVER";

        if (notificationTimeout) {
            clearTimeout(notificationTimeout);
        }

        if (progressBarTimeout) {
            clearTimeout(progressBarTimeout);
        }

        const newProgressBar = document.createElement("span");
        newProgressBar.style.width = "100%";
        newProgressBar.className = "progress-bar-span";
        progressWrapper.innerHTML = "";
        progressWrapper.appendChild(newProgressBar);

        setTimeout(() => {
            newProgressBar.style.animation = "progressAnim 5s linear forwards";
        }, 0);

        notification.classList.remove("top-4", "left-1/2", "-translate-x-1/2", "top-4", "right-4", "top-1/2", "-translate-y-1/2", "right-4");
        switch (event.data.position) {
            case "top-left":
                notification.classList.add("top-4", "left-4");
                break;
            case "top-right":
                notification.classList.add("top-4", "right-4");
                break;
            case "top-center":
                notification.classList.add("top-4", "left-1/2", "-translate-x-1/2");
                break;
            case "middle-right":
                notification.classList.add("top-1/2", "-translate-y-1/2", "right-4");
                break;
            case "middle-left":
                notification.classList.add("top-1/2", "-translate-y-1/2", "left-4");
                break;
            default:
                notification.classList.add("top-4", "left-1/2", "-translate-x-1/2");
                break;
        }

        notification.classList.remove("hidden");

        notificationTimeout = setTimeout(() => {
            notification.classList.add("hidden");
        }, 5000); 

        progressBarTimeout = setTimeout(() => {
            progressWrapper.innerHTML = "";  
        }, 5000); 
    }
});
