import "./Navbar.css";

function Navbar(){

return(

<header className="navbar">

<div className="brand">

<div className="logo-link">
LINK POINT
</div>

<span>
CONTACT E.I.R.L.
</span>

</div>


<nav>

<a className="active">Inicio</a>
<a>Servicios</a>
<a>Empresa</a>
<a>Contacto</a>

</nav>


<button className="whatsapp">
🟢 Cotiza por WhatsApp
</button>


</header>

)

}

export default Navbar;