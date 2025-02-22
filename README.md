# AppsheetTelegram


Telegram and Google Sheets Integration 🤖📊

This project allows you to interact with a Google Sheet via a Telegram bot. Users can send commands to the bot to fetch specific data from a Google Spreadsheet, and they can also input new data directly into the spreadsheet using Telegram messages.


Features ✨:

Webhook Setup: Automatically connects your bot to a webhook to receive real-time updates 🔄.

Inline Keyboard: Users can click buttons to fetch specific data from the spreadsheet ⬇️.

Data Insertion: Users can input data in a specific format, which gets saved to the Google Sheet 📥.

Real-Time Responses: The bot replies with the requested data or confirmation of data entry 📩.


Prerequisites 🛠️:

A Telegram bot token. You can create one by talking to the BotFather on Telegram.

A Google Spreadsheet where you want to store or retrieve data 📈.

Google Apps Script to connect the Telegram bot and Google Sheets.


Instructions 📜:

Deploy the Google Apps Script as a web app 🌐.

Set up the webhook by calling the setWebhook function 🔗.

Interact with the bot via Telegram by sending messages in the specified format or using the inline keyboard 💬.


Notes ⚠️:

Make sure the Telegram bot has permission to interact with users (set up privacy settings in Telegram) 🛡️.

Ensure the Google Spreadsheet is correctly shared with the necessary permissions for the script to access and update it 🔑.
