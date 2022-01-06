function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
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
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'

}

export default Header