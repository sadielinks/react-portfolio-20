function Nav({ text, bgColor, textColor }) {
    const navStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center'
    }

    return (
        <nav style={navStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </nav>
    )
}

Nav.defaultProps = {
    text: "Hi, I'm Sadie Sial",
    bgColor: 'rgb(238, 233, 245)',
    textColor: '#795eb0'

}

export default Nav