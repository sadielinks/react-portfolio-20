import React from 'react';
import ProjectCards from '.'
import projects from '../projects.json'

function Wrapper(props) {
    return <div className='wrapper'>{props.children}</div>;
}

function projects() {

    return (
        <section>
            <div className='project'>
                <h1 className='title'>My projects:</h1>
                <hr></hr>
            </div>

            {/* going to try BCS LA suggestion with JSON file! */}
            <Wrapper id='card-data'>
                {projects.map((project) => (
                    <ProjectCards key={project.id}
                        image={project.image}
                        name={project.name}
                        github={project.github}
                        deploy={project.deploy}
                    />
                ))}
            </Wrapper>
        </section>

    );
}

export default projects;