
export {}
// const Command = require('./Command')
import Command from "../../../modules/classes/Command"

// let me =

// class Command {
// }

let find_member: Command;
find_member = new Command(
    {
        condition: async msg => msg.content.slice(0, 12) == "find_member ",
        action: async msg => {
            const id: string = msg.content.slice(12)
            console.log(`ID: ${id}`)

            const member = msg.channel.guild.members.cache.find(member => member.id == id)

            msg.channel.send(`it's: ${member.user.tag}`)

            

        },
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `important command`
    }
    // {condition : msg => msg.content = "find_member", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);


export default find_member
