const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348033863911";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_52_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTg4ajBzMFdxWU14SFpYaHVTWFVYengxVTdPM0pJT0hwMExFUmk1TG9vQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVm1ENjU1TzRRZFdiREtQVVI4blJmZ1wiLFxuICBcInBob25lSWRcIjogXCIxM2Q3NThkNS0xMTk3LTQwNGMtOTkxYS0zODM5ODRhNDljYTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTMsXG4gICAgICA0MixcbiAgICAgIDE0NSxcbiAgICAgIDY4LFxuICAgICAgMjAwLFxuICAgICAgMjI5LFxuICAgICAgNyxcbiAgICAgIDk0LFxuICAgICAgMTgsXG4gICAgICAxMTYsXG4gICAgICAxNjAsXG4gICAgICAyMTIsXG4gICAgICAyMzAsXG4gICAgICA3OCxcbiAgICAgIDI1NCxcbiAgICAgIDMxLFxuICAgICAgNjgsXG4gICAgICA1OSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTEwLFxuICAgICAgMTA5LFxuICAgICAgMTY1LFxuICAgICAgMTU2LFxuICAgICAgMTMzLFxuICAgICAgMTQzLFxuICAgICAgOTgsXG4gICAgICAxOTksXG4gICAgICAxMjEsXG4gICAgICAyMjQsXG4gICAgICAyLFxuICAgICAgMTg4LFxuICAgICAgNTYsXG4gICAgICAyNDYsXG4gICAgICAxOCxcbiAgICAgIDQxLFxuICAgICAgOTgsXG4gICAgICAyNDIsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFQ2QVJSS0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzM4NjM5MTE6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMTQ2MDA0NjA0NTM1MDozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSGxodkVDRUo3TWdMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInh5MlZvSXFjdVVhMVk5WWJ5dmZMVWszM2YvZjBjY2Z3NmgyY2hZeTgrRmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUdkZUtQU2lWbkEvMVBwOU5scFBvZmFuanBSeWZGTlRaWDRXOXo3MFVnUWhOZTdMT3NtWmV0SEttSEV1SlVWU1ZLcjdxMXNDYnovZ3hTK25pbGFNQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1BzeDFyTWJDcTlUQXNwMmJvWlh2TC9xOUdRZDcyd0FpaWRkUXhIN2IzN0hpNCt3K3Z5WkxXbVUxS2VKQm1TNUNma1BBVjRXcXUxWk1hZDg1b1lBQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzMzg2MzkxMTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NzE1NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZS9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUplLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
