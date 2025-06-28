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
❯ ❲ 🦋 ❳ Hi Na Ta
━━━━━━━━━━━━━━━━━━ ✅

🧩 Basic Commands:

💎 .daily  
💰 .balance  
🎁 .gift  
🧰 .briefcase <action> [args]  
🎉 .quiz [subject|guide|hint]  
🧩 .wordgame [difficulty|guide|hint]  
🌱 .garden [subcommand]  
🛒 .buy <command>  
🌹 .rosashop  
🏰 .skyrise <command> [args]  
💱 .trade [list|buy|sell|cancel]  
⚔️ .arena [pet] [--ai]

━━━━━━━━━━━━━━━━━━

➥ .help all – Show all commands  
➥ .help basics – Show only basics  
➥ .help <page> – View help by page

━━━━━━━━━━━━ ✕ ━━━━━━━━━━━ ✦
Developed by: Arafat Hassan 🎀`
    }
  },

  onStart: async function ({ message, args, getLang }) {
    const sub = args[0]?.toLowerCase();
    const lang = getLang("customHelpMenu");

    if (!sub || sub === "basics" || sub === "all" || !isNaN(sub)) {
      return message.reply(lang);
    } else {
      return message.reply(`❌ Command "${args[0]}" not found.\nUse .help to view available commands.`);
    }
  }
};
