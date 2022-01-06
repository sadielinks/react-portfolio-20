import { NavLink } from "react-router-dom";

function Nav({ text, bgColor, textColor }) {
    const navStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center'
    }

    return (
        <nav style={navStyles}>
            <div className="navigation" id="navigation">
                <h2>{text}</h2>
            </div>
        </nav>
    )
}

Nav.defaultProps = {
    text: "nav bar",
    bgColor: 'rgb(238, 233, 245)',
    textColor: '#795eb0'

}

export default Nav