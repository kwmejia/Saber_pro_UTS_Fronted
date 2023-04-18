import { useEffect, useState } from "react";
import clientHTTP from "../../api/configAxios"
import { showAlertError } from "../../common";

export const useGetAllStudents = () => {
  const [listStudents, setListStudents] = useState([]);
  const [isLoadingGetAllStudents, setIsLoadingGetAllStudents]
    = useState(true);

  useEffect(() => {
    onMounted();
  }, [])

  const getAllStudents = async () => {
    setIsLoadingGetAllStudents(true);
    const resp = await clientHTTP.get(`/students/`)
    setListStudents(resp.data);
  }

  const onMounted = async () => {
    try {
      await getAllStudents();
    } catch (error) {
      showAlertError();
    } finally {
      setIsLoadingGetAllStudents(false);
    }
  }

  return {
    getAllStudents,
    isLoadingGetAllStudents,
    listStudents
  }
}