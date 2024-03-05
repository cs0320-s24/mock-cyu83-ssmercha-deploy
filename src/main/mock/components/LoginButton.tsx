import { Dispatch, SetStateAction } from 'react';

/**
 * These are the loginProps
 */
interface loginProps {
    isLoggedIn: boolean //boolean representing if the user is logged in
    setIsLoggedIn: Dispatch<SetStateAction<boolean>> //sets the boolean above
}

/**
 * This is the login button
 * @param props a boolean representing if the user's logged in and a setter
 * @constructor
 */
export function LoginButton(props: loginProps) {

    const authenticate = () => {
        const newValue = !props.isLoggedIn
        props.setIsLoggedIn(newValue)
        return newValue
    }

    if (props.isLoggedIn) {
        return (
            <button aria-label='Sign Out' onClick={authenticate}>Sign out</button>
        )
    } else {
        return (
            <button aria-label='Login' onClick={authenticate}>Login</button>
        )
    }
}