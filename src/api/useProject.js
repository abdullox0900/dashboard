import { useQuery } from "react-query"
import axios from "axios"

const fetchProjectData = () => {
    return axios.get('https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/students')
}

export const useProjectData = () => {
    return useQuery('project-data', fetchProjectData)
}
