module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || "mongodb+srv://adminApp:0000@vitafamilydb.iq2cq.mongodb."
        + "net/AppProject?retryWrites=true&w=majority"
    //db: process.env.MONGODB || "mongodb+srv://admin:admin1234@alphateam21.lt7uc.mongodb.net/alphateam21?retryWrites=true&w=majority"
};