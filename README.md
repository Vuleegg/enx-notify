![Screenshot_9](https://github.com/user-attachments/assets/2621c32f-7a46-4bc9-a893-e83732e7d39f)


# `enx-notify`

`enx-notify` is a simple notification system designed for FiveM that allows you to send customizable notifications with various options like position, type, title, description, and icon. This module can be integrated into your server and used for different notification purposes in-game.

## Features:
- Display customizable notifications with a title, description, and icon.
- Choose where the notification appears on the screen (e.g., top-center, bottom-right, etc.).
- Support for various types of notifications (e.g., alert, info, etc.).
- Easy integration with FiveM servers and client-side scripts.

## Installation

### Client-Side:
1. Download the `enx-notify` resource and place it in your `resources` folder.
2. Add the following line to your `server.cfg`:

```plaintext
start enx-notify

```example 
exports['enx-notify']:SendAlert({
    title = "ENX Roleplay",
    description = "Welcome to ENX Roleplay!",
    position = "top-center",
    icon = "fa-solid fa-bullhorn",
    type = "obavestenje"
})
