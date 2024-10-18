const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Rozarioanshifxer/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/AYJB65b.jpeg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "916282524515";
global.owner = process.env.OWNER_NUMBER || "916282524515";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUttNHlHZHlpMEIzUXd5bHJ5UG00NmlvRFRoTVF1SVdLRUJrL3RoOHhHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xKcDd3VXcwazdFa2tFaEJBU0RXUlBsVHM4emc0L1lSdEd6SmpSQ25sUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UHBLU2JSbExEaS80elpmcytqbUpvbVBpUlJpbUVYRFh2NHJQSzhNckZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZHc3NjM1MFZLUXorM3lvWjlWT2NzNDNCcVBNYldsVktXeUljNlh2R1FnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBVTdwVldKd3o0dlkxR1d2UHVSY01kMVFMK1I0VnBCUHpIT0d6MFppSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpnVkliaXZ3R1NRTE9wZ1JFVkpnVHVCL29JRGJESVRYT1BKS3RoV0NRMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01rY1JJdUczMkM1ekp5dXdqWjZYYVYrdmxLaEJEemUrK1ROVStocFpsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJhOHc4SGd2eGxXNDhRMDZKQVlPV09hSzlsbXZQRlkxV0loUGt4bVZFOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE4dnArRVBqRnhzQVlQZzVRZTllaEJtd2J5R2JvTUJUaVNWRkJlZ3htUEE1M25mZi9rdHh6bEQ0V3JJK2QxYnRZdTJvTUdRMVg3bEFoYXhQU1VGcURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJWR0NFNU5BZGJXVk5maW5yQ2xieUgvZkRiTC9FK05lT1NRU2J4ZDdROEhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1NVlEaUluRVJheUtNc2pUT2RHRmtnIiwicGhvbmVJZCI6Ijc3OTc3MWZkLWE5NjItNDdlZi1iMjNlLWIxYTUxOTU1NTI2YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXVS9jNzVoVUR3VUdhM1lTNWpxRW92Z0FwblU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXJwSmxaWHhSMGVGdjMxeTdPc3pPOUJ4c1FVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjgzM0NIS1lXIiwibWUiOnsiaWQiOiI5MTYyODI1MjQ1MTU6ODhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01mUHdkUUZFSUhVeDdnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVvU2psQWt0dVorVWtsUDVsdm80cVJXODk5azNCWjFSQUk1TElRYWdVRWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5CazRVWDBNSGxPaGFNUU9Gbi9ZMnZmQlhWdFVwUXlXT3REdkN6bk5UNXpOdjZyaUFBa2JYeVNISE5BWHdkV3lHSnBrQW1GWUNKT3NtcHZBN2htSUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKaElqZ2RHa05tQ3V1eW96UzNRcXpwcXJBMlc0bWVNc0xhU1pSdVRCOWdrV2FMd0tCZTVVTTNPVmQycGl4K2dndGRlSDM3cUQyejBJaE5rNDFSaFdDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNjI4MjUyNDUxNTo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlYUVvNVFKTGJtZmxKSlQrWmI2T0trVnZQZlpOd1dkVVFDT1N5RUdvRkJKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MjI3Mjc4fQ==";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "© ᴀɴsʜɪғ xᴇʀ",
  author: process.env.PACK_AUTHER || "ᴀɴsʜɪғ xᴇʀ",
  packname: process.env.PACK_NAME || " ᴀɴsʜɪғ xᴇʀ",
  botname: process.env.BOT_NAME || " ᴀɴsʜɪғ xᴇʀ ᴍᴅ",
  ownername: process.env.OWNER_NAME || " ᴀɴsʜɪғ xᴇʀ",
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
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
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
