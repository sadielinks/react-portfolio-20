function Footer({ text, bgColor, textColor }) {
    const footerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center'
    }

    return (
        <div className="footer" id="footer">
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
            <h5> Made with ✨&nbsp;in Chicago by Sadie Sial
            </h5>



        </div>
    )
}

Footer.defaultProps = {
    text: "Hi, I'm Sadie Sial",
    bgColor: 'thistle',
    textColor: '#ff6a95'

}

export default Footer