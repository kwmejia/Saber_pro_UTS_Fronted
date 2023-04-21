import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { Header } from './components/';
import './ratings.scss'
import { useGetRatingsByStudent } from '../../../services/students/useGetRatingsByStudent';

const RatingsPage = () => {

  const { user, logOut } = useContext(AuthContext);
  const { ratingByStudent } = useGetRatingsByStudent(user.id);

  const getLevel = (score) => {
    if (score >= 191) {
      return "Nivel 4"
    } else if (score <= 191 && score >= 156) {
      return "Nivel 3"
    } else if (score <= 155 && score >= 126) {
      return "Nivel 2"
    } else {
      return "Nivel 1"
    }
  }


  return (
    <section className="container-fluid p-0">

      <Header logOut={logOut} />
      <div className="mt-5 d-flex justify-content-center">
        <div className="col-4">
          <h3>Gobal</h3>
          <div className="card_ puntaje d-flex align-items-center gap-4">
            <div className="d-flex w-100 align-items-center">
              <img src="https://images.vexels.com/media/users/3/166375/isolated/preview/7a844164b4b3dff03d9840306150b4d0-icono-de-copa-de-trofeo-de-graduacion.png" alt="" height={70} />
              <p className="fw-bold fs-4">Puntaje  Total</p>
            </div>

            <div className="total-point">
              <p>{ratingByStudent.totalScore} <span>/300</span></p>
            </div>
            <div className="cont-nivel two">
              {getLevel(ratingByStudent.totalScore)}
            </div>
          </div>
        </div>

        <div className="col-6">
          <h3>Puntaje por Pruebas</h3>
          {/* CARD */}

          <div className="w-100 d-flex flex-wrap gap-5">
            <div className="card_ ">
              <p className="w-100 fs-4 fw-bold">Comunicación Escrita</p>
              <div className="d-flex justify-content-between gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/2362/2362432.png" alt="" width={60} height={60} />
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0 text-grey  fw-bold fs-5">Puntaje</p>
                    <p className="m-0 fs-2 fw-bold text-orange">{ratingByStudent.writtenCommunication}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100">
                    <div className="cont-nivel two">
                      {getLevel(ratingByStudent.writtenCommunication)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="card_">
              <p className="w-100 fs-4 fw-bold">Razonamiento Cuantitativo</p>
              <div className="d-flex justify-content-between gap-4">
                <img src="https://play-lh.googleusercontent.com/7nZqAPEuWxAeckXC-lm1fWEk6pDK3mRlUCxPuLIctJ1MD9RM0HPgOdrhOwr39deWSjtn" alt="" width={60} height={60} />
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0 text-grey  fw-bold fs-5">Puntaje</p>
                    <p className="m-0 fs-2 fw-bold text-orange">{ratingByStudent.quantitativeReasoning}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100">
                    <div className="cont-nivel two">
                      {getLevel(ratingByStudent.quantitativeReasoning)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="card_">
              <p className="w-100 fs-4 fw-bold">Lectura Crítica</p>
              <div className="d-flex justify-content-between gap-4">
                <img src="https://www.how-to-study.com/study-skills-images/critical-reading-book-under-microscope.gif" alt="" width={60} height={60} />
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0 text-grey  fw-bold fs-5">Puntaje</p>
                    <p className="m-0 fs-2 fw-bold text-orange">{ratingByStudent.criticalReading}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100">
                    <div className="cont-nivel one">
                      {getLevel(ratingByStudent.criticalReading)}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* CARD */}
            <div className="card_">
              <p className="w-100 fs-4 fw-bold">Competencias
                Ciudadanas</p>
              <div className="d-flex justify-content-between gap-4">
                <img src="https://www.aulasenpaz.org/wp-content/uploads/2021/01/icono-quienes-somos-3.png" alt="" width={60} height={60} />
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0 text-grey  fw-bold fs-5">Puntaje</p>
                    <p className="m-0 fs-2 fw-bold text-orange">{ratingByStudent.citizenCompetences}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100">
                    <div className="cont-nivel one">
                      {getLevel(ratingByStudent.citizenCompetences)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="card_">
              <p className="w-100 fs-4 fw-bold">Inglés</p>
              <div className="d-flex justify-content-between gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1377/1377975.png" alt="" width={60} height={60} />
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0 text-grey  fw-bold fs-5">Puntaje</p>
                    <p className="m-0 fs-2 fw-bold text-orange">{ratingByStudent.english}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100">
                    <div className="cont-nivel one">
                      {getLevel(ratingByStudent.english)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="card_">
              <p className="w-100 fs-4 fw-bold">
                Matemáticas y Estadística</p>
              <div className="d-flex justify-content-between gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/2084/2084541.png" alt="" width={60} height={60} />
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0 text-grey  fw-bold fs-5">Puntaje</p>
                    <p className="m-0 fs-2 fw-bold text-orange">{ratingByStudent.math}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100">
                    <div className="cont-nivel one">
                      {getLevel(ratingByStudent.math)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="card_">
              <p className="w-100 fs-4 fw-bold">
                Diseño De Software</p>
              <div className="d-flex justify-content-between gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/2752/2752488.png" alt="" width={60} height={60} />
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0 text-grey  fw-bold fs-5">Puntaje</p>
                    <p className="m-0 fs-2 fw-bold text-orange">{ratingByStudent.softwareDesign}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100">
                    <div className="cont-nivel one">
                      {getLevel(ratingByStudent.softwareDesign)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RatingsPage;