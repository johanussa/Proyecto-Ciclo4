module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || "mongodb+srv://adminApp:0000@vitafamilydb.iq2cq.mongodb."
       + "net/AppProject?retryWrites=true&w=majority"
};