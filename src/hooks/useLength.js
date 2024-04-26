import { useContext } from "react"
import { Context } from "../context/length"
import { useProjectData } from '../api/useProject'

const useLength = () => {

    const { data } = useProjectData()

    const { length, setLength } = useContext(Context)

    setLength(data?.data?.length)

    return { length, setLength }
}

export default useLength