import React from 'react'
import ReactDOM from 'react-dom';
import "./ModalForm.css"

const ModalForm = ({
    setOpenModal,
    editMode,
    nombreProd,
    descripcionProd,
    marcaProd,
    modeloProd,
    precioProd,
    stockProd,
    tipoProd,
    method,
}) => {

    const [nombre, setNombre] = React.useState(nombreProd)
    const [descripcion, setDescripcion] = React.useState(descripcionProd)
    const [marca, setMarca] = React.useState(marcaProd)
    const [tipo, setTipo] = React.useState(tipoProd)
    const [modelo, setModelo] = React.useState(modeloProd)
    const [precio, setPrecio] = React.useState(precioProd)
    const [stock, setStock] = React.useState(stockProd)

    const closeModal = () => {
        setOpenModal(false)
    }
    return ReactDOM.createPortal(
        <section className='modal-bg'>
            <form action="" className='modal-form'>
                <h2 className='modal-form__title'>
                    {editMode ? "Editar producto" : "Crear nuevo producto"}
                </h2>
                <input
                    type="text"
                    placeholder='nombre'
                    className='modal-form__nombre'
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value) }}
                />

                <input
                    type="text"
                    placeholder='descripcion'
                    className='modal-form__descripcion'
                    value={descripcion}
                    onChange={(e) => { setDescripcion(e.target.value) }}
                />
                <select
                    value={tipo}
                    onChange={e => { setTipo(e.target.value) }}
                >
                    <option value="">
                        tipo de audifono
                    </option>
                    <option value="Wireless">
                        wireless
                    </option>
                    <option value="Diadema">
                        diadema
                    </option>
                    <option value="Diadema Wireless">
                        diadema wireless
                    </option>
                </select>

                <input
                    type="text"
                    placeholder='marca'
                    className='modal-form__marca'
                    value={marca}
                    onChange={(e) => { setMarca(e.target.value) }}
                />

                <input
                    type="text"
                    placeholder='modelo'
                    className='modal-form__modelo'
                    value={modelo}
                    onChange={(e) => { setModelo(e.target.value) }}
                />

                <input
                    type="text"
                    placeholder='precio'
                    className='modal-form__precio'
                    value={precio}
                    onChange={(e) => { setPrecio(e.target.value) }}
                />

                <input
                    type="number"
                    placeholder='stock'
                    className='modal-form__stock'
                    value={stock}
                    onChange={(e) => { setStock(e.target.value) }}
                />

                <div className='modal-buttons'>
                    <button
                        type='button'
                        className='action-button'
                        onClick={() => { closeModal() }}
                    >
                        {editMode ? "Guardar" : "Crear"}
                    </button>
                    <button
                        type='button'
                        className='close-button'
                        onClick={() => { closeModal() }}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </section>,
        document.getElementById("modal")
    )
}

export { ModalForm }