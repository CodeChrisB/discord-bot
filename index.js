const Discord = require('discord.js')
const key = require('./token')


const bot = new Discord.Client();
const token = key.generateKey() //set your own key here
console.log(token)
bot.on('ready',() =>{
    console.log('bot logged in.')
})
bot.login(token);

const prefix = '!'
bot.on('message',(msg) =>{
    if(msg.content[0] !== '!') {//check if the message is a command
    console.log('Not a command!')
    return;  
    }


    const args = msg.content.slice(prefix.length).trim().split(' ');
    console.log(args)
    const command = args.shift().toLowerCase();
    console.log(command)

    switch(command){
        case 'help':
            help(msg,args)
            break;
        case 'clear':
            clear(msg,args)
        

    }

})

function help(msg,args){
    console.log(args[0])
    if(args[0] == null ){
        msg.reply(
            'Here you go !:yum:\n'+
            '--> **!help**  get a list of all commands\n'+
            '--> **!help <command>** get help for a specific command\n'+
            '--> **!clear <number> [@<user>]** Remove a specific amount of messages');
            return;
        }
    
    if(args[0] == 'clear')
        msg.reply(
        '```!clear <Number>``` Let\'s you clear a specific amount'+
        ' of messages in the current channel')

}

function clear(msg,args){
    let num =2;
    if(args[0]){
        num = Math.min(parseInt(args[0])+1,100);
    }

    if(args.length ==1){
        console.log(num)
        msg.channel.bulkDelete(num);
        msg.channel.send(`deleted ${num} posts for you`)
    }else{
        //get 2nd argument delete n message from this user
    }

    
}




