import {useQuery} from "react-query"
import axios from "axios";

const fetchStudentData = () => {
    return axios.get('https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/students')
}

export const useStudentData = () => {
    return useQuery('student-data', fetchStudentData)
}
