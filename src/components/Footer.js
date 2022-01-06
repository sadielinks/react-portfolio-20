function Footer({ text, bgColor, textColor }) {
    const footerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center'
    }

    return (
        <footer style={footerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    text: "Hi, I'm Sadie Sial",
    bgColor: 'thistle',
    textColor: '#ff6a95'

}

export default Footer