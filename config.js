//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349166382224";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Z6QmkvaENoQUlMemRrSHhJenZMb1JwKzNUYUNyVDh2VDM0ekVGWVdGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL25nZGtSTlFTOEtTd0JqV1gvdDNXOXZzUHdPM01OZHZ5MDJnT0lWakNRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSmZESnJuQ29zM2VZS2wvMmp6TnpGRjFobGl3aEdJd2J0VmxqNVdFN1Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQRENJbG13M3k0M3RVMllUYTZRSU5iV3h5aDdSR0I0aXZsNnhZeDg5UTBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOVENveTJlU25hMlVVaS9EN3g2V1pvc3ZWZjdudXBqeC9DeitYS2o5R3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh1YkMreWZaMlB0WkdKZHdXV1JlWGxOR01rWllHZmxOVUgzRUE1eDhVRFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0d2WEYrUW9WUENxdHZMVkMvTjEzZUNxZ1cwVlFCMXlSeFM5dnE1MWJHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3JWdk1ZU1VqTXhZdzFIRDExYi9TOEw1QjlnTXIyL0tyZURNaXBCV1lBRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXOVByclFISTl6dGFIVXFnMXRmanA0K29ZYUJMZXpseU5TVkZZbyszNTdoUW5RL0F0VXZVQ09rUTB1Q3JLSzRJRnpramR5VlV0U2wxcTM3L0FEdWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJiYnRXRDQzSlJ5Rkt0RkI2aitkRXdIaU9NV1kvRjBvMTdnNlF4cERzTk9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6Z0VySWtuZ1IyT3pXcVg5WkFXUGFnIiwicGhvbmVJZCI6Ijk0YjAxZjI1LTgxZjQtNGFlZi04ZmY0LWQ1NTk5N2ExNzhkYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTC8zMXhaSGE0cHA2dVF5UjgxVmJuUUMyUms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2JPK0lmMFRTUFJURlVTNm5Cem8vMkpFZlBnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNXWkdaWVBEIiwibWUiOnsiaWQiOiIyMzQ5MTY2MzgyMjI0OjQ1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJaTM0WW9DRUtMZG5iVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOMmZMN212VENQaTFsOUJMbFdFTnZHa3gvYnNyK2xBaFVXbWFHMDMwMmdjPSIsImFjY291bnRTaWduYXR1cmUiOiJiQzNSMnArRE9kRUkzcGV0OU16T0xxSW4xZjB4a0NUR1Fla25DR0tjR3c3aG5aYngzV3QyY2ptQ3NPUzZQMVlEM25sUU9lRUVzeFVsOUZpdjd1aDZBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZmJlaHhqRWJLa1JVblNuMURBOTV0RW1GS3V1Qlc5cFVKRE5SaVBOMlBSOXdiU2ZFQ0FYbHR6d0NlV0p1QWsrV3NCQkF5Q0lBY0NzRTRIbUszbGJVaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY2MzgyMjI0OjQ1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRkbnkrNXIwd2o0dFpmUVM1VmhEYnhwTWYyN0svcFFJVkZwbWh0TjlOb0gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyNDg4NzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkZKIn0=|
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "Anonymous",
  packname: process.env.PACK_NAME || "anonymous",
  botname: process.env.BOT_NAME || "Anonymous",
  ownername: process.env.OWNER_NAME || "Anonymous",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
