module.exports = {
  config: {
    name: "help",
    version: "2.0-hinata",
    author: "Arafat Hassan",
    countDown: 5,
    role: 0,
    description: {
      en: "Custom stylized help menu for HinataUzumaki bot"
    },
    category: "info",
    guide: {
      en: "{pn} [all | basics | <page>]"
    },
    priority: 1
  },

  langs: {
    en: {
      customHelpMenu: `
❯ ❲ 🦋 ❳ 𝗛𝗶 𝗡𝗮 𝗧𝗮
━━━━━━━━━━━━━━ 
✅𝗕𝗮𝘀𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀

💎 .daily           🧩 .wordgame 
💰 .balance     🛒 .buy 
🎁 .gift             🌹 .rosashop
🧰 .briefcase   🏰 .skyrise
🎉 .quiz             ⚔️ .arena

➥Total command : 230
➥ View by page: .help <page>

━━━━━━━━ ✕
🛠️ Developed by Arafat Hassan 🎀`
    }
  },

  onStart: async function ({ message, args, getLang }) {
    const sub = args[0]?.toLowerCase();
    const lang = getLang("customHelpMenu");

    if (!sub || sub === "basics" || sub === "all" || !isNaN(sub)) {
      return message.reply(lang);
    } else {
      return message.reply(`❌ Command "${args[0]}" not found.\n📌 Use .help to view available commands.`);
    }
  }
};
