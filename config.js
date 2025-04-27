const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233247923525";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_04_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUwLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRSthQWZqNDZ5d3MwVVQyOFRxbkNqYjlQaHZBN0ljUVlERXd3WG02eHhkdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyMDc0MTU0NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE5MjVGM0E3NDdDMTk2N0QwQzkxOUZEQzAwRUU4MjFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NTc1OTA5MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0QTQzNWd1MlJWaUNSd19OOFFJR1h3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhYzQ5Njk4LTU3YjEtNDkwYS05NWUxLTlmNzUzZTczNWI2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDIwNyxcbiAgICAgIDE4MCxcbiAgICAgIDEyNCxcbiAgICAgIDIxNyxcbiAgICAgIDE0NCxcbiAgICAgIDEzMyxcbiAgICAgIDE5NyxcbiAgICAgIDI5LFxuICAgICAgMTc1LFxuICAgICAgMjE5LFxuICAgICAgMTAxLFxuICAgICAgMjA4LFxuICAgICAgMTIzLFxuICAgICAgOTgsXG4gICAgICAyMjYsXG4gICAgICAyMjUsXG4gICAgICAxNixcbiAgICAgIDE4OCxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDgyLFxuICAgICAgMTc0LFxuICAgICAgMTQ2LFxuICAgICAgMTQ5LFxuICAgICAgMjIzLFxuICAgICAgMjM2LFxuICAgICAgMjUsXG4gICAgICAyMDYsXG4gICAgICA0MyxcbiAgICAgIDEwNCxcbiAgICAgIDEzNCxcbiAgICAgIDU1LFxuICAgICAgMTA2LFxuICAgICAgMTQ0LFxuICAgICAgMTk0LFxuICAgICAgMTkwLFxuICAgICAgMTkwLFxuICAgICAgODksXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFNUWEdHTTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwNzQxNTQ2OTo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFtZyBUb3BwZXJcIixcbiAgICBcImxpZFwiOiBcIjIwMTk5NzE3NzM1NjMyNzo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaU85ZWNCRU9uV3VNQUdHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImcxbm9oMHlrZ0FMN1JHVmdlbkw3L1J5T0wrWGJzVGh6ZTdJUXN6SXI5MXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUG1DRk1vaDN2bklpWTVQZnFhYzlDcVdkakhPR1J0QnVNRjU1UmVEQ0piNEVrZDR2b01KOHptdFhZb05LMGQvTWIwZno2UjVwVEw0bE9RVzNsZW1NQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDQ0R2VVeG04YnJMczFoK0VwR3RIUDVQNjdtdnp3OGRBYlREalpYR1FyT2EraytpMFF5U2Q0NGVGN0NsNXlxTjRjbEJmK01xQ2JWSVdBb3lVODlMaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjA3NDE1NDY5OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU3NTkwODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFORElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5ESS5qc29uIjogIntcImtleURhdGFcIjpcIk5RbVRRanRzdlRTSmRiaDZ0NTNGN1J6bklvU1REaEgzazJWUVZ2QkNVcnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDg2MzYwODU2LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCw0LDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
