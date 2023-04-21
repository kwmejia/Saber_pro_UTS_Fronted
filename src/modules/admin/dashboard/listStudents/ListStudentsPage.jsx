import Swal from "sweetalert2";
import { useDeleteStudent } from "../../../../services/students";
import { useGetAllStudents } from "../../../../services/students/useGetAllStudents";
import { useNavigate } from "react-router-dom";

const ListStudentsPage = () => {


  const { listStudents, getAllStudents } = useGetAllStudents();
  const { deleteStudent } = useDeleteStudent();
  const navigation = useNavigate();


  const alertDelete = (id) => {
    Swal.fire({
      title: 'Estas seguro que quieres eliminar este estudiante?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#0B4A75",
      cancelButtonText: "Cancelar"

    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
      }
    })
  }

  const onDelete = async (id) => {
    await deleteStudent(id);
    await getAllStudents();
  }

  const navigateUpdateStudent = (id) => {
    navigation(`form-student-update/${id}`);
  }
  return (
    <div className="list-cont d-flex flex-column w-100 m-5">
      <h1 className="text-center mb-5">Listado de estudiantes</h1>

      <section className="w-100 d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Nit</td>
              <td>Teléfono</td>
              <td>Correo</td>
              <td>Acciones</td>
            </tr>
          </thead>

          <tbody>
            {listStudents.map((student, index) => (
              <tr key={student.id}>
                <th>{index + 1}</th>
                <th>{student.name}</th>
                <th>{student.lastName}</th>
                <th>{student.nit}</th>
                <th>{student.phone}</th>
                <th>{student.email}</th>
                <th>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigateUpdateStudent(student.id)}
                  >
                    Actualizar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => alertDelete(student.id)}
                  >
                    Eliminar
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default ListStudentsPage;