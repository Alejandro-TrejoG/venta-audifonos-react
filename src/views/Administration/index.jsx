import React from 'react'
import "./Administration.css"

import imgAdmin from "../../images/undraw_logistics_x-4-dc.svg"
import imgNotSession from "../../images/undraw_happy_music_g6wc.svg"
import imgNotProducts from "../../images/undraw_taken_re_yn20.svg"
import { ModalForm } from '../../components/ModalForm'
import { UserContext } from '../../App'

const Administration = () => {
    const API = "http://localhost:3001/api/v1/products"
    const { usuario, productosUsuario, setProductosUsuario, logged } = React.useContext(UserContext)
    const [openModal, setOpenModal] = React.useState(false)
    const [editeMode, setEditeMode] = React.useState(false)
    const [nombreProd, setNombreProd] = React.useState("")
    const [descripcionProd, setDescripcionProd] = React.useState("")
    const [marcaProd, setMarcaProd] = React.useState("")
    const [modeloProd, setModeloProd] = React.useState("")
    const [tipoProd, setTipoProd] = React.useState("")
    const [precioProd, setPrecioProd] = React.useState("")
    const [stockProd, setStockProd] = React.useState(0)
    const [method, setMethod] = React.useState("POST")

    const showCreateModal = () => {
        setMethod("POST")
        setEditeMode(false)
        setOpenModal(true)
    }

    const showEditModal = (item) => {
        setMethod("PATCH")
        setNombreProd(item.nombre)
        setDescripcionProd(item.descripcion)
        setMarcaProd(item.marca)
        setModeloProd(item.modelo)
        setTipoProd(item.tipo)
        setPrecioProd(item.precio)
        setStockProd(item.stock)
        setEditeMode(true)
        setOpenModal(true)
    }

    React.useEffect(() => {
        const getAudifonos = async () => {
            const response = await fetch(`${API}/${usuario.id}`)
            const data = await response.json()
            const { body } = data
            setProductosUsuario(body)
        }

        getAudifonos()
    }, [openModal])

    return (
        <>
            <div className='admin-content'>
                {
                    logged ?
                        <div className='admin-content__middle'>
                            <div className='admin-title__content'>
                                <h2 className='admin-title'>
                                    ¡Que bueno tenerte de vuelta {usuario.nombre}!
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
                                {
                                    productosUsuario.length > 0 ?
                                        <div className='admin-panel__table'>
                                            <table className='table'>
                                                <thead>
                                                    <tr>
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
                                                    {
                                                        productosUsuario.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {item.nombre}
                                                                    </td>
                                                                    <td>
                                                                        {item.descripcion}
                                                                    </td>
                                                                    <td>
                                                                        {item.marca}
                                                                    </td>
                                                                    <td>
                                                                        {item.modelo}
                                                                    </td>
                                                                    <td>
                                                                        {item.tipo}
                                                                    </td>
                                                                    <td>
                                                                        ${item.precio}
                                                                    </td>
                                                                    <td>
                                                                        {item.stock}
                                                                    </td>
                                                                    <td
                                                                        onClick={() => { showEditModal(item) }}
                                                                    >
                                                                        <button
                                                                            type='button'
                                                                            className='boton-editar'
                                                                        >
                                                                            <i className="fas fa-edit"></i>
                                                                        </button>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            type='button'
                                                                            className='boton-eliminar'
                                                                        >
                                                                            <i className="fas fa-trash"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        :
                                        <div className='no-product-content'>
                                            <p>¡No tienes productos registrados aún!</p>
                                            <img src={imgNotProducts} alt="No hay productos" />
                                        </div>
                                }
                            </section>
                        </div>
                        :
                        <div className='no-session-content'>
                            <p>¡Vaya! parece que no has iniciado sesión</p>
                            <img src={imgNotSession} alt="No has iniciado sesion" />
                        </div>
                }
                {
                    logged &&
                    <img src={imgAdmin} alt="Administracion" className='admin-img' />
                }
                {
                    openModal &&
                    <ModalForm
                        // openModal={openModal}
                        setOpenModal={setOpenModal}
                        editMode={editeMode}
                        nombreProd={nombreProd}
                        descripcionProd={descripcionProd}
                        marcaProd={marcaProd}
                        modeloProd={modeloProd}
                        precioProd={precioProd}
                        stockProd={stockProd}
                        tipoProd={tipoProd}
                        method={method}
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