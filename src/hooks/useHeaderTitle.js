import { useContext } from "react"
import { Context } from "../context/header-title"

const useHeaderTitle = () => {
    const {text, setText} = useContext(Context)

    return {text, setText}
}

export default useHeaderTitle