import React from 'react'
import clientHTTP from '../../api/configAxios'
import { showAlertError, showAlertSuccess } from '../../common';
import { useState } from 'react';

export const useInsertStundent = () => {

  const [isLoadingInsertStudent, setIsLoadingInsertStudent]
    = useState(false);

  const insertStudent = async (req) => {
    setIsLoadingInsertStudent(true);
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
      const { data } = await clientHTTP.post(`/students/`, {
        nit,
        name,
        lastName,
        phone,
        email,
        password,

      });

      const resp = await clientHTTP.post(`/ratings/`, {
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
      console.log(error)
      showAlertError();
    } finally {
      setIsLoadingInsertStudent(false);
    }
  }

  return {
    insertStudent,
    isLoadingInsertStudent
  }
}
