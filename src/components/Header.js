function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center'
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Hi, I'm Sadie Sial",
    bgColor: 'rgb(238, 233, 245)',
    textColor: '#795eb0'

}

export default Header