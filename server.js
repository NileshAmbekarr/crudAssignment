const app = require('./app.js')

const port = process.env.PORT || 4001;

app.listen(port, (error) =>{
    if(error){
        console.log("Error while Server Setup !!", error);
        return;
    }

    console.log(`Server Listening at ${port}`);
})