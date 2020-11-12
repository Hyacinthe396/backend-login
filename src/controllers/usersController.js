import userServises from "../services/userServices";
import response from "../helpers/response";

class usersController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const findUser = await userServises.findUser({email, password});
            console.log(email, password);
            return response.success(res, 200, {email: email, password: password})
        } catch (error) {
            res.send(error)
        }
    }
};
export default usersController;
