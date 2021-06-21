const mongoose = require('mongoose')
mongoose.connect(
    // 'mongodb+srv://cooltchop:Bb118258787@cooltchop.yabkn.mongodb.net/cooltchop',
    "mongodb://localhost:27017/cooltchop",
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
    (err) => {if (err) console.log(err)}
)
// mongoose.set('useCreateIndex', true)
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!")
});
process.on('SIGINT', () =>{
    mongoose.connection.close(()=>{
        console.log('mongoose disconnected through app termination')
        process.exit(0)
    })
})
