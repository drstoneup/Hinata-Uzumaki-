module.exports = { config: { name: "help", version: "2.0", author: "Arafat Hassan", countDown: 5, role: 0, description: { en: "Displays the list of basic commands in a stylish format." }, category: "info", guide: { en: "{pn}" }, priority: 1 },

onStart: async function ({ message }) { const helpMenu = ` ❯  ❲ 🦋 ❳  𝗛𝗶 Na Ta ━━━━━━━━━━━━━━━ ✅ 𝗕𝗮𝘀𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 💎 .daily 💰 .balance 🎁 .gift 🧰 .briefcase <action> [args] 🎉 .quiz [subject|guide|hint] 🧩 .wordgame [difficulty|guide|hint] 🌱 .garden [subcommand] 🛒 .buy <command> 🌹  rosashop 🏰 .skyrise <command> [args] 🛒 .trade [list/buy/sell/cancel] ⚔️ .arena [pet] [--ai]

➥ Try to Explore more commands! ➥ View by page: .help

━━━━━━━ ✕ ━━━━━━ ✦ Developed by Arafat Hassan 🎀 `;

message.reply(helpMenu);

} };
