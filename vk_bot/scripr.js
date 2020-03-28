const { VK } = require('vk-io');
const vk = new VK();
vk.setOptions({
 token:"529d99e9d470814fed454cd3d77152ccd71db92cbaccf13fa64ed931b43e4e61c25983486eb0d74687f19"
});


vk.updates.hear(/^инфа о боте/i, (message) => {
    message.send('я бот созданный @gapprappit , и я в процессе создания по всем вопросам писать моему создателю)');
});


console.log ("yce");
vk.updates.start().catch(console.error);
