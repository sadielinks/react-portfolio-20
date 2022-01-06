function Footer({ text, bgColor, textColor }) {
    const footerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center'
    }

    return (
        <footer style={footerStyles} className="footer" id="footer">

            <div id="footer-icons">
                {/* Phone */}
                <a href="tel:(920)-368-6336" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png" /></a>
                {/* Email */}
                <a href="mailto:sadiecodes@gmail.com" target="_blank"><img
                    src="https://img.icons8.com/ios-filled/50/000000/send-mass-email.png" alt='email' class='icon' /></a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sadie-sial-bootcamp" target="_blank"><img
                    src="https://img.icons8.com/ios-glyphs/55/000000/linkedin.png" alt="LinkedIn" class="icon" /></a>
                {/* GitHub */}
                <a href="https://github.com/sadielinks" target="_blank"><img src="https://img.icons8.com/ios-glyphs/55/000000/github.png" alt="GitHub" class="icon" /></a>
            </div>
            {/* tagline */}
            <h5> Made with ✨  &nbsp; in Chicago by Sadie Sial
            </h5>

        </footer>
    )
}

Footer.defaultProps = {
    // text: "Made with ✨ &nbsp; in Chicago by Sadie Sial",
    bgColor: 'rgb(238, 233, 245)',
    textColor: '#795eb0'
}

export default Footer