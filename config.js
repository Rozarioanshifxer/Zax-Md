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
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0N6Y3FoYk50ZWVOVitXR2JjbXQ3ejd3WVhvQUtoSmwzc2FzQWlhWU1FYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVGNGx2cDZIQVJublE1UWNMeXE3MFB6UVlwbUZZTG9Mdkp5UE91M2ZFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SW9HcmVvVjJpNlFNUDRwdHUyS3RiN3ExVHh5SFBZQk1hN2dLNnNId1VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZXF4TklMaW9OQWZhVmNMMXJ2ZHJuTVpKUlJlL3o5SEY3ZXVrblVSM3hZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHK0I5N2U2REM1TkZhS0lad3VnakhDeWdmOXJNTnBjS3g3NkhRajRZbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp3Ni9pWTJGK3FKQjBFcElUMFg5WEsrSmJqNmRVa1plMnZlTWJIdFJ2UWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib04rSXFZOXAxZHhuZ2hFczhvaHpMUnhVSFYvdG1OaDIyMTJmenVzcHAxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHlkQ2xyQVo1Z2s0Tjc1MG9MRG1OelpUUytLREF1SXNxYzdyK2dXNWhEMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im53RVZGK2lDSWtoQUpuUEs2b0NSK3c4SWVqb3ppTkllem9WWklVaHJSZ2MycnhtYkFMTGNXTzQ4TDZaS1hUQ0tFRzFtalVTbytaeUpOT0xESitRV0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJwamVuZzJwVWZ4QzlnR01qR0Q0NG9SRDBjcDJaZ29IQjJJUVRqNVFYdUs4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzWU94NXZCNlI2Nmt3bkNFYllCOGt3IiwicGhvbmVJZCI6IjU0ZDBkZDgxLTMxYTMtNGM1Mi05YTViLTgwNjBmMDViNmQ3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJycDY0KzQvNndCMVRLcjVTK1hJVmY5QURPNVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXpIR1hlUkRJbmtDVGx0VUVEWUZnQlZPSDlBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ1RTQ5S0s4IiwibWUiOnsiaWQiOiI5MTYyODI1MjQ1MTU6ODVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01iUHdkUUZFSXZSeGJnR0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVvU2psQWt0dVorVWtsUDVsdm80cVJXODk5azNCWjFSQUk1TElRYWdVRWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkN4SE9nV2FaZjk3UDVibWhxMkI3R2poelc4cGRkamRoN2EyR2ozL2s1UWFzaHV3bW9vWmdqUEEweDE5aDdEOFY3M0k4OUFXVHMwZkpZYmtaUUVIU0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4MFZuY1FUOFRxcSt2NW8wQ2JrdTQ5bzJHUjVGTVRhOEwyak1hdzg1ZnBGY2FTVWFjWGxRMTIyb2h4N0xpRnFqYU1vUG00S24rR2d5dW1zUVlrUk1CZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNjI4MjUyNDUxNTo4NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlYUVvNVFKTGJtZmxKSlQrWmI2T0trVnZQZlpOd1dkVVFDT1N5RUdvRkJKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MTk0MTM2fQ==";

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
