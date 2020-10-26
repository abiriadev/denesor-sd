import {log} from "util";

export {}

// import config from "./../../../settings/config.json"
import config from "./../../../settings/config.json"

// module.exports = member => {
//
//     const channel = member.guild.channels.cache.find(ch => ch.name === '나가는-회원');
//
//     if (!channel) return;
//
//     channel.send(`${member}님, 안녕히 가세요~!`);
// };

let guildMemberRemove
guildMemberRemove = member => {

    console.log("작별인사")

    // const channel = member.guild.channels.cache.find(ch => ch.id == config.welcome_channel_ID);
    const channel = member.guild.channels.cache.find(ch => ch.id == 752437853241344061);

    if (!channel) return console.error("나가는-회원 채널이 없습니다!!");

    channel.send(`${member.toString()}님, 안녕히 가세요~!`);
};

export default guildMemberRemove