const AdminAuthHandlerDTO = {};

AdminAuthHandlerDTO.getBaseResponse = () => {
    return {
        success: true,
        message: "",
        data: {}
    }
}

export default AdminAuthHandlerDTO;