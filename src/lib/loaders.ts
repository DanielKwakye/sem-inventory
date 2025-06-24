import {redirect} from "react-router";
import store from "@/store";

export const accountLoader = () => {

    // you can make the user data available to the page if everything passes
    const authState = store.getState().auth

    const userRole = authState.userRole
    if(userRole === undefined) {
        return redirect('/');
    }

    return true

}