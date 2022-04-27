//https://ithelp.ithome.com.tw/articles/10234876
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const prefix = require('./prefix.json')
client.login(auth.key);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    try{
        if (!msg.guild || !msg.member) return;
        if (!msg.member.user) return;
        if (msg.member.user.bot) return;
    } catch (err){
        return;
    }
    try{
        let tempPrefix = '-1';
        const prefixED = Object.keys(prefix); //前綴符號定義
        prefixED.forEach(element => {
            if (msg.content.substring(0, prefix[element].Value.length) === prefix[element].Value) {
                tempPrefix = element;
            }
        });

        //實作
        switch (tempPrefix) {
            case '0': //文字回應功能
                const cmd = msg.content.substring(prefix[tempPrefix].Value.length).split(' '); //以空白分割前綴以後的字串
                switch (cmd[0]) {
                    case '紅桃姊姊':
                        msg.channel.send('洛基大魷魚！天蓬元帥！');
                        break;
                    case '黑桃妹妹':
                        msg.channel.send('可愛擊敗黑狗狗，歐氣快來！！！');
                        break;
                    case '叔叔':
                        msg.channel.send('您好老！');
                        break;
                    case '浪浪':
                        msg.channel.send('\\ 北方煞徒 \/\\ 北方煞徒 \/\\ 北方煞徒 \/');
                        break;
                    case '87浪浪':
                        msg.channel.send('敢鑽我漏洞你找死膩?');
                        break;
                    case '百王大大':
                        msg.channel.send('醒！');
                        break;
                    case '皮哥':
                        msg.channel.send('一袋米要扛幾樓');
                        break;
                    case '巨巨':
                        msg.channel.send('巨大陰影的紅桃!');
                        break;
                    case '皮皮骰子神':
                        msg.channel.send('再搞啊！！');
                        break;
                    case '洗衣板':
                        msg.channel.send('芷蓉哥要洗衣服？');
                        break;
                    case 'i姬':
                        msg.channel.send('卍愛姫乂我佛你ㄟ夜店卍');
                        break;
                    case 'help':
                        msg.channel.send('請輸入:! 人名(紅桃姊姊,黑桃妹妹,叔叔,浪浪,百王大大,皮哥,巨巨,皮皮骰子神,洗衣板,i姬)');
                        break;
                }
                break;
            //case '1': //音樂指令
            //    msg.channel.send('music');
            //    break;
        }
    } catch (err){
        console.log('OnNessageError',err)
    }
});

//抓刪 刪除事件
client.on('messageDelete', function (message) {
    if (!message.guild) return; //只要是來自群組的訊息
    let mStr = '';
    try{
        mStr = mStr+
	    `---------------------------------------------------\n`+
            `事件 刪除\n`+
            `使用者 <@${message.member.user.id}>\n`+
            `群組 ${message.channel.name}\n`+
            `刪除內容 ${message.content}\n`+
	    `---------------------------------------------------\n`;
        if (message.channel.id == 958523124385730662 || message.channel.id == 958901473926873200){
            client.channels.cache.get(message.channel.id).send(mStr);
        }
        
    }catch(err){
        console.log("messageDeleteError",err);
    }
});

//抓刪 更新事件
client.on('messageUpdate', function (oldMessage, newMessage) {
    if (!oldMessage.guild || !newMessage.guild) return;
    mStr = '';
    try {
        mStr = mStr +
            `事件 更新\n` +
            `使用者 <@${oldMessage.member.user.id}>\n`+
            `群組   ${oldMessage.channel.name}\n` +
            `舊對話 ${oldMessage.content}\n` +
            `新對話 ${newMessage.content}`;

            if (oldMessage.channel.id == 958523124385730662 || oldMessage.channel.id == 958901473926873200){
                client.channels.cache.get(oldMessage.channel.id).send(mStr);
            }
    } catch (err) {
        console.log('messageUpdateError', err);
    }
})