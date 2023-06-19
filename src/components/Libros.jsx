import { useEffect, useState } from "react";
import '../components/Libros.css'

const Libros = () => {
    const [libros, setLibro] = useState([]);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
   
    useEffect(() => {
        obtenerLibros();
    }, []);

    const obtenerLibros = async () => {
        try {
            const response = await fetch('http://localhost:4000/libros');
            const data = await response.json();
            if (data.error) return;
            setLibro(data)
        } catch (error) {
            console.error(error)
        }
    };


    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value);
    };

    const agregarLibro = async () => {
        try {
            await fetch('http://localhost:4000/libros/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, precio }),
            });
            obtenerLibros();
            setNombre('');
            setPrecio('');
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div >
            <h2>Agregar Libro</h2>
            <div className="input-container">
                <input className='input'type="text" value={nombre} onChange={handleNombreChange} placeholder="Nombre" />
                <input className='input'type="text" value={precio} onChange={handlePrecioChange} placeholder="Precio" />
            </div>
            <div id="midiv">
               <button onClick={agregarLibro} id="boton">Agregar</button>
                </div> 

            <h2>Lista de Libros</h2>
            <div className="cards-container">
                {libros.map((Libro) => (
                    <div className="card" key={Libro.id}>
                        <h3>{Libro.nombre}</h3>
                        <p>Precio: ${Libro.precio}</p>
                    </div>
                ))}
            </div>

          
        </div>
    );
}

export default Libros