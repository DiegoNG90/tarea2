import {memo} from 'react';
//Cuando trabajamos con componentes con props estáticas, memo nos puede servir: el componente queda en "memoria" y no se vuelve a renderizar.
import PropTypes from "prop-types";
import './Header.css'


const Header = memo(({title}) => {
    const styles = {
        padding: "0 0 1.2rem 1.2rem",
        color: "black",
        textShadow: "6px 2px 4px silver",
        fontSize: "3rem",
        borderBottom: "2px solid #000",
        borderLeft: "2px solid #000",
        display: "inline-block",
        marginTop: "3px",
        boxShadow: "-0.7rem 0.7rem 0.3rem grey"
    } 
    return <h3 style={styles}>{title} 🚀</h3>;   
})

//Documentación de PropTypes
Header.propTypes={
    title: PropTypes.string.isRequired
}
//Si no se pasa, salta un warning en la consola y nada más.
export default Header;
