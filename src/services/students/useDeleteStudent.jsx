import clientHTTP from "../../api/configAxios"
import { showAlertError } from "../../common"



export const useDeleteStudent = () => {


  const deleteStudent = async (id) => {
    try {
      const resp = await clientHTTP.delete(`/students/${id}`);
      console.log(resp)
    } catch (error) {
      showAlertError("Error al eliminar el estudiante.");
    }
  }

  return {
    deleteStudent
  }
}
