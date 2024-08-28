import {Sequelize} from "sequelize";

const conn = new Sequelize("todo","root","Sen@iDev77!.", {
    host:"localhost",
    dialect:"mysql",
})

// try {
//     await conn.authenticate();
//      console.log("connection MYSQL")
// } catch (error) {
//     console.error("error:", error)
// }

export default conn