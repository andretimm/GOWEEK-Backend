const Tweet = require('../models/Tweet');

module.exports = {
    //metodos async
    async store(req, res){
        //Retorna tweet pelo id
        const tweet = await Tweet.findById(req.params.id);
        //Incrementa like
        tweet.set({ likes: tweet.likes + 1 });
        //Salva
        await tweet.save();
        return res.json(tweet);
    }
};