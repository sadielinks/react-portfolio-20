import React from 'react'

function About() {

    return (
        <section className="my-5" id="about">
            <h1 id="about">A little about myself...</h1><hr></hr>
            <img src='' className="my-2" style={{ width: "18%" }} alt='my-face' />
            <div className="my-2">
                <p>
                    My name is Sadie Sial and I am currently a Clinical Research
                    Coordinator at Northwestern University's Feinberg School of
                    Medicine. I am currently enrolled in NU's Full-Stack Bootcamp
                    program through my department. I hope to obtain necessary
                    development skills required for interesting new projects on the
                    horizon! Although these projects would be based on back-end development, I am proud to now be a full-stack
                    developer.
                </p>
            </div>
        </section>
    )
}

export default About