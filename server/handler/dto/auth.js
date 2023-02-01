const AuthHandlerDTO = {};

AuthHandlerDTO.getBaseResponse = () => {
    return {
        success: true,
        message: "",
        data: {}
    }
}

export default AuthHandlerDTO