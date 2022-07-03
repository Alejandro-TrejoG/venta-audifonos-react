import React from 'react'
import ReactDOM from 'react-dom';
import "./ModalForm.css"

const ModalForm = ({ setOpenModal, editMode }) => {
    
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
                />

                <input
                    type="text"
                    placeholder='descripcion'
                    className='modal-form__descripcion'
                />
                <select>
                    <option value="">
                        tipo de audifono
                    </option>
                    <option value="">
                        wireless
                    </option>
                    <option value="">
                        diadema
                    </option>
                    <option value="">
                        diadema wireless
                    </option>
                </select>

                <input
                    type="text"
                    placeholder='marca'
                    className='modal-form__marca'
                />

                <input
                    type="text"
                    placeholder='modelo'
                    className='modal-form__modelo'
                />

                <input
                    type="text"
                    placeholder='precio'
                    className='modal-form__precio'
                />

                <input
                    type="number"
                    placeholder='stock'
                    className='modal-form__stock'
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