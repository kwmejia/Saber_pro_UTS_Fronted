import { useEffect, useState } from "react";
import clientHTTP from "../../api/configAxios"
import { showAlertError } from "../../common/ShowAlertError";

export const useGetAllCoordinators = () => {
  const [listCoordinators, setListCoordinators] = useState([]);
  const [isLoadingGetAllCoordinators, setIsLoadingGetAllCoordinators]
    = useState(true);

  useEffect(() => {
    onMounted();
  }, [])

  const getAllCoordinators = async () => {
    setIsLoadingGetAllCoordinators(true);
    const resp = await clientHTTP.get(`/coordinators/`)
    setListCoordinators(resp.data);
  }

  const onMounted = async () => {
    try {
      await getAllCoordinators();
    } catch (error) {
      showAlertError();
      console.log(error)
    } finally {
      setIsLoadingGetAllCoordinators(false);
    }
  }

  return {
    getAllCoordinators,
    isLoadingGetAllCoordinators,
    listCoordinators
  }
}