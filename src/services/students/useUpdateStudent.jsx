import clientHTTP from '../../api/configAxios'
import { showAlertError, showAlertSuccess } from '../../common';
import { useState } from 'react';

export const useUpdateStudent = () => {

  const [isLoadingUpdateStudent, setIsLoadingUpdateStudent]
    = useState(false);



  const updateStudent = async (req, id) => {
    setIsLoadingUpdateStudent(true);
    const {
      nit,
      name,
      lastName,
      phone,
      email,
      password,
      totalScore,
      writtenCommunication,
      quantitativeReasoning,
      criticalReading,
      citizenCompetences,
      english,
      math,
      softwareDesign
    } = req;

    try {
      const { data } = await clientHTTP.put(`/students/${id}`, {
        nit,
        name,
        lastName,
        phone,
        email,
        password,

      });


      const respRating = await clientHTTP.get(`/ratings/byStudent/${id}`)

      await clientHTTP.put(`/ratings/${respRating.data.id}`, {
        totalScore,
        writtenCommunication,
        quantitativeReasoning,
        criticalReading,
        citizenCompetences,
        english,
        math,
        softwareDesign,
        studentId: data.id
      })
      showAlertSuccess("Estudiante insertado correctamente")
    } catch (error) {
      showAlertError();
    } finally {
      setIsLoadingUpdateStudent(false);
    }
  }

  return {
    updateStudent,
    isLoadingUpdateStudent
  }
}
