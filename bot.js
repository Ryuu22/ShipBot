const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});
const p = "$sb";
client.on('message', msg => {
    
        if(msg.content === (p + "Input")) {
               msg.channel.sendMessage("Output");
} 
});

client.login('Mzk2MDUzMjUxMjM1MjUwMTk5.DSb1Hw.8rie__ih4z2fq14RvQapR2gCvYM');
/*Client ID: 396053251235250199*/
/*Uq3vXoKuSsvGn1y1M4iHPpT6pDUmRCG7*/