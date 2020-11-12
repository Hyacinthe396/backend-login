class response {
    static success(res, code, data, message){
        return res.status(code).send({message: message, data: data})
    }
    static failed(res, code, message){
        return res.status(code).send({error: message})
    }
}

export default response