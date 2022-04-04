/* Copyright (C) 2021 KAVIYAAH - Alexa Team  ,  Lusifar whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 8.0.0 avalable)
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './lusifar.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v8.0.0',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.LUSIFAR_SESSION === undefined ? '' : process.env.LUSIFAR_SESSION,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    ANTIBAD: process.env.ANTIBAD === undefined ? 'true' : process.env.ANTIBAD,
    YT_INFO: process.env.YT_INFO === undefined ? 'true' : process.env.YT_INFO,
    AUTO_REPLY: process.env.AUTO_REPLY === undefined ? 'false' : process.env.AUTO_REPLY,
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    REMOVE: process.env.THERI_KICK_GP === undefined ? 'false' : process.env.THERI_KICK_GP,
    AFN: process.env.ALL_CAPTION === undefined ? 'MADE BY Lusifar' : process.env.ALL_CAPTION,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    PM_BLOCK: process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK,
    LUSIFAR_AI: process.env.LUSIFAR_AI === undefined ? 'false' : process.env.LUSIFAR_AI,
    PLK: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    TAGPLK: process.env.TAG_REPLY === undefined ? '919072790587@s.whatsapp.net' : process.env.TAG_REPLY,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    WELCOME_GIF: process.env.WEL_GIF === undefined ? 'https://ibb.co/n0sJCXz' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.GIF_BYE === undefined ? 'https://ibb.co/0X7sD7B' : process.env.BYE_GIF,
    BOTPLK: process.env.BOT_NAME === undefined ? 'QUEEN ELSA BOT' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    TALKING_LUSIFAR: process.env.TALKING_LUSIFAR === undefined ? 'false' : process.env.TALKING_LUSIFAR,
    STICKERP: process.env.STICKER_REPLY === undefined ? false : convertToBool(process.env.STICKER_REPLY),
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    PLKBGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    PANEL_COMMAND: process.env.PANEL_COMMAND === undefined ? '.panel' : process.env.PANEL_COMMAND,
    PLKS: process.env.THERI_LIST_GP === undefined ? false : process.env.THERI_LIST_GP,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    MAHN: '94769370897,0' , //dont change thise , if you change this some plugins created by me might not work for others or might have error ( bcoz this is a api key ) kavishka sandaruwan
    
    
        //sites (dont edit )
    
    SPDFAPI: process.env.SPDFAPI === undefined ?'EHbew2GJGOzI5qCldC5Oiu7yVgcVuH39VvmOQGPNQE7Ap7EHKyaqA9ziEn1SRSj5' : process.env.SPDFAPI,
    SITE: process.env.SITE === undefined ?'netfiletolink.herokuapp.com/' : process.env.SITE,
    FBS1: process.env.FBS1 === undefined ?'https://api.dapuhy.ga/api/' : process.env.FBS1,
    FBS2: process.env.FBS2 === undefined ?'snapsave?url' : process.env.FBS2,
    VID1: process.env.VID1 === undefined ?'https://zenzapi.xyz/api/downloader/' : process.env.VID1,
    VID2: process.env.VID2 === undefined ?'RDMMiI1VlXspMp8&index=2' : process.env.VID2,
    ASITE: process.env.ASITE === undefined ?'https://netfiletolink.herokuapp.com/' : process.env.ASITE,
    BAPIS: process.env.BAPIS === undefined ?'https://bx-hunter.herokuapp.com/api/' : process.env.BAPIS,
    JAPIS: process.env.JAPIS === undefined ?'https://docs-jojo.herokuapp.com/api/' : process.env.JAPIS,
    HSITE: process.env.HSITE === undefined ?'hunter' : process.env.HSITE,
    RSITE: process.env.RSITE === undefined ?'https://rei-api.herokuapp.com/api/dl/' : process.env.RSITE,
    BAPIME: "EuKWDaeyG8qH8Fd",
    LOGSETTINGS: process.env.LOGSETTINGS === undefined ?'94769370897@s.whatsapp.net' : process.env.LOGSETTINGS,//if you clone my bot dont change this codes.when you change them not working my bot for others
    //end 
    
    
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './lusifar.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
