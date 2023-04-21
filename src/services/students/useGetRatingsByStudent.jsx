import { useEffect, useState } from "react"
import clientHTTP from "../../api/configAxios";
import { showAlertError } from "../../common";

export const useGetRatingsByStudent = (id) => {
  const [ratingByStudent, setRatingByStudent] = useState({});
  const [isLoadingGetRatingsByStudent, setIsLoadingGetRatingsByStudent] = useState(false);
  const getAllRatingsByStudent = async (idStudent) => {
    try {
      setIsLoadingGetRatingsByStudent(true);
      const { data } = await clientHTTP.get(`/ratings/byStudent/${idStudent}`);
      setRatingByStudent(data);
    } catch (error) {
      showAlertError();
    } finally {
      setIsLoadingGetRatingsByStudent(false);

    }
  }

  useEffect(() => {
    getAllRatingsByStudent(id);
  }, [])


  return {
    getAllRatingsByStudent,
    ratingByStudent,
    isLoadingGetRatingsByStudent
  }
}
