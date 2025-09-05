import { loginn } from "../store/slice/authSlice.js";
import { getCurrentUser } from "../api/user.api.js";
import { redirect } from "@tanstack/react-router";

export const checkAuth = async ({ context }) => {
    try {
       // console.log(context)
        const { queryClient, store } = context
        const user = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser
        })
        if (!user) return false;
        store.dispatch(loginn(user));

        const { isAuthenticated } = store.getState().auth;
        if (!isAuthenticated) return false;
        return true;
    }
    catch (error) {
        console.log(error)
        throw redirect({ to: "/auth" })
    }

}