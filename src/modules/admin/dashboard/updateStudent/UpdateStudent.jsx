import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetRatingsByStudent, useGetStudent, useUpdateStudent } from '../../../../services/students';
import { showAlertSuccessToast } from '../../../../common';

const UpdateStudent = () => {
  const [valueForms, setvalueForms] = useState({
    nit: '',
    name: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    totalScore: 0,
    writtenCommunication: 0,
    quantitativeReasoning: 0,
    criticalReading: 0,
    citizenCompetences: 0,
    english: 0,
    math: 0,
    softwareDesign: 0
  });

  const navigation = useNavigate();
  const { id } = useParams();
  const {
    ratingByStudent
  } = useGetRatingsByStudent(id);
  const { infoStudent } = useGetStudent(id);
  const { isLoadingUpdateStudent, updateStudent } = useUpdateStudent();

  useEffect(() => {
    onMounted();
  }, [ratingByStudent, infoStudent]);

  const onMounted = async () => {
    setvalueForms({
      nit: infoStudent.nit,
      name: infoStudent.name,
      lastName: infoStudent.lastName,
      phone: infoStudent.phone,
      email: infoStudent.email,
      password: infoStudent.password,
      totalScore: ratingByStudent.totalScore,
      writtenCommunication: ratingByStudent.writtenCommunication,
      quantitativeReasoning: ratingByStudent.quantitativeReasoning,
      criticalReading: ratingByStudent.criticalReading,
      citizenCompetences: ratingByStudent.citizenCompetences,
      english: ratingByStudent.english,
      math: ratingByStudent.math,
      softwareDesign: ratingByStudent.softwareDesign
    });
  }

  const onSubmit = async () => {
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
    } = valueForms;

    if ([
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
    ].includes('')) {
      showAlertError("Todos los campos son obligatorios");
      return;
    }
    await updateStudent(valueForms, id);
    navigation('/dashboard');
    showAlertSuccessToast("Estudiante Actualizado correctamente.");
  }



  return (
    <section className="container cont-insert-student m-5">
      <div className="row">
        <h1>Actualizar Estudiante</h1>
        <div className="col-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Kevin Mejía"
              value={valueForms.name}
              onChange={(e) => setvalueForms({ ...valueForms, name: e.target.value })}
            />
            <label>Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Kevin Mejía"
              value={valueForms.lastName}
              onChange={(e) => setvalueForms({ ...valueForms, lastName: e.target.value })}
            />
            <label>Apellido</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="123456789"
              value={valueForms.nit}
              onChange={(e) => setvalueForms({ ...valueForms, nit: e.target.value })}
            />
            <label>Número de documento</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Kevin Mejía"
              value={valueForms.email}
              onChange={(e) => setvalueForms({ ...valueForms, email: e.target.value })}
            />
            <label>Correo electronico</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              min={0}
              className="form-control"
              placeholder="password"
              value={valueForms.password}
              onChange={(e) => setvalueForms({ ...valueForms, password: e.target.value })}
            />
            <label>Contraseña</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              value={valueForms.phone}
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, phone: e.target.value })}
            />
            <label>Teléfono</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              value={valueForms.totalScore}
              onChange={(e) => setvalueForms({ ...valueForms, totalScore: e.target.value })}
            />
            <label>Puntaje total</label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              value={valueForms.writtenCommunication}
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, writtenCommunication: e.target.value })}
            />
            <label>Puntaje comunicación escrita</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              value={valueForms.quantitativeReasoning}
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, quantitativeReasoning: e.target.value })}
            />
            <label>Puntaje Razonamiento cuantitativo</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              value={valueForms.criticalReading}
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, criticalReading: e.target.value })}
            />
            <label>Puntaje Lectura critica</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="Kevin Mejía"
              value={valueForms.citizenCompetences}
              onChange={(e) => setvalueForms({ ...valueForms, citizenCompetences: e.target.value })}
            />
            <label>Puntaje Competencias ciudadanas</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, english: e.target.value })}
              value={valueForms.english}
            />
            <label>Puntaje Ingles</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              onChange={(e) => setvalueForms({ ...valueForms, math: e.target.value })}
              value={valueForms.math}
            />
            <label>Puntaje Matematicas</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              onChange={(e) => setvalueForms({ ...valueForms, softwareDesign: e.target.value })}
              value={valueForms.softwareDesign}
            />
            <label>Puntaje diseño de software</label>
          </div>
        </div>
        <button
          className="button-green mt-4 w-50"
          onClick={onSubmit}
        >
          {isLoadingUpdateStudent
            ? <div className="spinner-border text-light" role="status">
            </div>
            : <span>Actualizar estudiante</span>
          }
        </button>
      </div>
    </section>
  );


}

export default UpdateStudent;