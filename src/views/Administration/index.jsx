import React from 'react'
import "./Administration.css"

import imgAdmin from "../../images/undraw_logistics_x-4-dc.svg"
import { ModalForm } from '../../components/ModalForm'

const Administration = () => {
    const nombre = "Alejandro"
    const [openModal, setOpenModal] = React.useState(false)
    const [editeMode, setEditeMode] = React.useState(false)

    const showCreateModal = () => {
        setEditeMode(false)
        setOpenModal(true)
    }

    const showEditModal = () => {
        setEditeMode(true)
        setOpenModal(true)
    }

    return (
        <>
            <div className='admin-content'>
                <div className='admin-content__middle'>
                    <div className='admin-title__content'>
                        <h2 className='admin-title'>
                            ¡Que bueno tenerte de vuelta {nombre}!
                        </h2>
                        <button
                            type='button'
                            className='btn-new-product'
                            onClick={() => { showCreateModal() }}
                        >
                            Registrar nuevo producto
                        </button>
                    </div>
                    <section className='admin-panel'>

                        <div className='admin-panel__table'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>
                                            id
                                        </th>
                                        <th>
                                            Nombre
                                        </th>
                                        <th>
                                            Descripcion
                                        </th>
                                        <th>
                                            Marca
                                        </th>
                                        <th>
                                            Modelo
                                        </th>
                                        <th>
                                            Tipo de Audifono
                                        </th>
                                        <th>
                                            Precio
                                        </th>
                                        <th>
                                            Stock
                                        </th>
                                        <th>
                                            Editar
                                        </th>
                                        <th>
                                            Eliminar
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Jib+
                                        </td>
                                        <td>
                                            Audifonos inalambricos Jib+
                                        </td>
                                        <td>
                                            Skullcandy
                                        </td>
                                        <td>
                                            1234as
                                        </td>
                                        <td>
                                            wireless
                                        </td>
                                        <td>
                                            $500
                                        </td>
                                        <td>
                                            11
                                        </td>
                                        <td
                                            onClick={() => { showEditModal() }}
                                        >
                                            Ed
                                        </td>
                                        <td>
                                            El
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Jib+
                                        </td>
                                        <td>
                                            Audifonos inalambricos Jib+
                                        </td>
                                        <td>
                                            Skullcandy
                                        </td>
                                        <td>
                                            1234as
                                        </td>
                                        <td>
                                            wireless
                                        </td>
                                        <td>
                                            $500
                                        </td>
                                        <td>
                                            11
                                        </td>
                                        <td>
                                            Ed
                                        </td>
                                        <td>
                                            El
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Jib+
                                        </td>
                                        <td>
                                            Audifonos inalambricos Jib+
                                        </td>
                                        <td>
                                            Skullcandy
                                        </td>
                                        <td>
                                            1234as
                                        </td>
                                        <td>
                                            wireless
                                        </td>
                                        <td>
                                            $500
                                        </td>
                                        <td>
                                            11
                                        </td>
                                        <td>
                                            Ed
                                        </td>
                                        <td>
                                            El
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Jib+
                                        </td>
                                        <td>
                                            Audifonos inalambricos Jib+
                                        </td>
                                        <td>
                                            Skullcandy
                                        </td>
                                        <td>
                                            1234as
                                        </td>
                                        <td>
                                            wireless
                                        </td>
                                        <td>
                                            $500
                                        </td>
                                        <td>
                                            11
                                        </td>
                                        <td>
                                            Ed
                                        </td>
                                        <td>
                                            El
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                <img src={imgAdmin} alt="Administracion" className='admin-img' />
                {
                    openModal &&
                    <ModalForm
                        // openModal={openModal}
                        setOpenModal={setOpenModal}
                        editMode={editeMode}
                    // setEditeMode={setEditeMode}
                    />
                }
            </div>
            <footer className="footer">
                Desarrollado por : Jessica Lilian Becerra Hernandez | Alejandro Trejo Godinez
            </footer>
        </>
    )
}

export { Administration }