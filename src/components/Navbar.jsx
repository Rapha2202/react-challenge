function Navbar({ panier, prix }) {


    return (
        <div className="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Logo" />
            <h1>Title</h1>
            <div className="panier">
                <p>Nombre: {panier}</p>
                <p>Prix: {prix}€</p>
            </div>

        </div>
    )
}

export default Navbar
