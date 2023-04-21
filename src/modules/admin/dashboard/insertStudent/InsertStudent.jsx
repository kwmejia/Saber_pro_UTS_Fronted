import { useState } from "react";
import { showAlertError } from "../../../../common";
import { useInsertStundent } from "../../../../services/students/useInsertStundent";
import { useNavigate } from "react-router-dom";
import { useGetAllStudents } from "../../../../services/students";

const InsertStudent = () => {


  const { listStudents } = useGetAllStudents();
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


  const { insertStudent, isLoadingInsertStudent } = useInsertStundent();
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

    await insertStudent(valueForms);
    navigation('/dashboard')
    setvalueForms({
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
    })
  }


  return (
    <section className="container cont-insert-student m-5">
      <div className="row">
        <h1>Insertar Estudiante</h1>
        <div className="col-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, name: e.target.value })}
            />
            <label>Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, lastName: e.target.value })}
            />
            <label>Apellido</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="123456789"
              onChange={(e) => setvalueForms({ ...valueForms, nit: e.target.value })}
            />
            <label>Número de documento</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Kevin Mejía"
              onChange={(e) => setvalueForms({ ...valueForms, email: e.target.value })}
            />
            <label>Correo electronico</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              min={0}
              className="form-control"
              id="floatingInput"
              placeholder="password"
              onChange={(e) => setvalueForms({ ...valueForms, password: e.target.value })}
            />
            <label>Contraseña</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="floatingInput"
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
              id="floatingInput"
              placeholder="Kevin Mejía"
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
              id="floatingInput"
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
              id="floatingInput"
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
              id="floatingInput"
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
              id="floatingInput"
              onChange={(e) => setvalueForms({ ...valueForms, citizenCompetences: e.target.value })}
            />
            <label>Puntaje Competencias ciudadanas</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              id="floatingInput"
              onChange={(e) => setvalueForms({ ...valueForms, english: e.target.value })}
            />
            <label>Puntaje Ingles</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              id="floatingInput"
              onChange={(e) => setvalueForms({ ...valueForms, math: e.target.value })}
            />
            <label>Puntaje Matematicas</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min={0}
              className="form-control"
              id="floatingInput"
              onChange={(e) => setvalueForms({ ...valueForms, softwareDesign: e.target.value })}
            />
            <label>Puntaje diseño de software</label>
          </div>
        </div>
        <button
          className="button-green mt-4 w-50"
          onClick={onSubmit}
        >
          {isLoadingInsertStudent
            ? <div class="spinner-border text-light" role="status">
            </div>
            : <span>Agregar estudiante</span>
          }
        </button>
      </div>
    </section>
  )
}

export default InsertStudent;