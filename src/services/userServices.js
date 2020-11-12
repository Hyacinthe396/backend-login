import { Op } from "sequelize";
import db from "../database/models/user";
import response from "../helpers/response";

class userServices {
    static async findUser(data) {
        try {
            const userAvailable = await db.user.findOne({where: {email : data.email }});
        if (userAvailable === null){
            return response.failed(res, 404, "email is not regirested")
        }
        else {
            if (userAvailable.password === data.password){
                return userAvailable
            }
        }
        } catch (error) {
         res.send(error) ;  
        }
    }
}

export default userServices