

class usersController {
    static async login(req, res) {
        try {
            res.send("login in successfully")
        } catch (error) {
            res.send(error)
        }
    }
};
export default usersController;
