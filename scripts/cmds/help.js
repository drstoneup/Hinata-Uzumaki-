module.exports = { config: { name: "help", version: "2.0-hinata", author: "Arafat Hassan", countDown: 5, role: 0, description: { en: "Custom stylized help menu for HinataUzumaki bot" }, category: "info", guide: { en: "{pn} [all | basics | <page>]" }, priority: 1 },

langs: { en: { customHelpMenu: `❯  ❲ 🦋 ❳  𝐅𝐮𝐱𝐞𝐭𝐞𝐶𝐬𝐬𝐪𝐪 ━━━━━━━━━━━━━━━ ✅ 𝗕𝗮𝘀𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 💎 .daily 💰 .balance 🎁 .gift 🧰 .briefcase <action> [args] 🎉 .quiz [subject|guide|hint] 🧩 .wordgame [difficulty|guide|hint] 🌱 .garden [subcommand] 🛒 +buy <command> 🌹 +rosashop 🏰 +skyrise <command> [args] 🛒 +trade [list/buy/sell/cancel] ⚔️ +arena [pet] [--ai]

➥ Try to Explore more commands! ➥ View ALL COMMANDS: .help all ➥ View by page: .help <page> ➥ View basics: .help basics ━━━━━━━ ✕ ━━━━━━ ✦ Developed by Arafat Hassan 🎀` } },

onStart: async function ({ message, args, getLang }) { const sub = args[0]?.toLowerCase(); const lang = getLang("customHelpMenu");

if (!sub || sub === "basics" || sub === "all" || !isNaN(sub)) {
  return message.reply(lang);
} else {
  return message.reply(`Command "${args[0]}" not found. Use .help to view available commands.`);
}

} };

