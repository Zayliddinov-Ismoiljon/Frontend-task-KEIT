import instance from "."
import store from "../../store"
import { logout } from "../../store/user_slice"
import { message } from "antd"
import { Notification } from "../../utils/notification";

const _logout = async () => {
    try {
        const response = await instance({ url: '/auth/logout', method: 'POST' })
        if (response.data?.status === 1) {
            localStorage.removeItem('access_token')
            Notification('success', 'read', response.data?.message).then(() => {
                store.dispatch(logout());
            })
        }
    } catch (error: any) {
        message.error(error?.response?.message)
    }
}

export default _logout