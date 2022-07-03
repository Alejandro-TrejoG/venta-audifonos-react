import React from 'react'
import ReactDOM from 'react-dom';
import "./ModalForm.css"
import Swal from 'sweetalert2';


const ModalForm = ({ setOpenModal, editMode }) => {

    const API = "http://localhost:3001/api/v1/products/"

    const [nombre, setNombre] = React.useState("")
    const [descripcion, setDescripcion] = React.useState("")
    const [tipo, setTipo] = React.useState("")
    const [marca, setMarca] = React.useState("")
    const [modelo, setModelo] = React.useState("")
    const [precio, setPrecio] = React.useState("")
    const [stock, setStock] = React.useState(0)

    const registrarAudifono = async () =>{
        if(nombre.trim()!=="" && tipo.trim()!=="" && descripcion.trim()!=="" && marca.trim() !=="" && modelo.trim() !=="" && precio.trim() !== "" && stock >0){
            const obj = {
                nombre: nombre,
                descripcion: descripcion,
                tipo: tipo,
                marca: marca,
                modelo: modelo,
                precio: precio,
                stock: stock
            }
            await fetch(API, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(obj)
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Excelente! se ha añadido tu audifono',
                showConfirmButton: false,
                timer: 1500
            })
            setNombre("")
            setTipo("")
            setDescripcion("")
            setMarca("")
            setModelo("")
            setPrecio("")
            setStock(0)
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Llena todos los campos',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

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
                    onChange={(e)=>{setNombre(e.target.value)}}
                />

                <input
                    type="text"
                    placeholder='descripcion'
                    className='modal-form__descripcion'
                    value={descripcion}
                    onChange={(e)=>{setDescripcion(e.target.value)}}
                />
                <select onChange={(e)=>setTipo(e.target.value)}>
                    <option value="">
                        tipo de audifono
                    </option>
                    <option value="wireless">
                        wireless
                    </option>
                    <option value="diadema">
                        diadema
                    </option>
                    <option value="diadema wireless">
                        diadema wireless
                    </option>
                </select>

                <input
                    type="text"
                    placeholder='marca'
                    className='modal-form__marca'
                    value={marca}
                    onChange={(e)=>{setMarca(e.target.value)}}
                />

                <input
                    type="text"
                    placeholder='modelo'
                    className='modal-form__modelo'
                    value={modelo}
                    onChange={(e)=>{setModelo(e.target.value)}}
                />

                <input
                    type="text"
                    placeholder='precio'
                    className='modal-form__precio'
                    value={precio}
                    onChange={(e)=>{setPrecio(e.target.value)}}
                />

                <input
                    type="number"
                    placeholder='stock'
                    className='modal-form__stock'
                    value={stock}
                    onChange={(e)=>{setStock(e.target.value)}}
                />

                <div className='modal-buttons'>
                    <button
                        type='button'
                        className='action-button'
                        onClick={() => { closeModal()}}
                    >
                        {editMode ? "Guardar" : "Crear" }
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