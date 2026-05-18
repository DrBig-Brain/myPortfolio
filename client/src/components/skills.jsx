import "../styles.css";

export const Skills = () => {
    return (
        <>
            <p className="text-action-primary bold text-5xl text-center">SKILLS</p>
            <div className="text-5xl text-center flex flex-row" id="skills">
                <div className="p-4">
                    <p className="text-green-500 text-2xl">Languages</p>
                    <ul className="">
                        <li><i class="devicon-python-plain colored"></i></li>
                        <li><i class="devicon-c-original text-blue-500"></i></li>
                        <li><i class="devicon-javascript-plain colored"></i></li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="text-green-500 text-2xl">AI/ML</p>
                    <ul>
                        <li><i class="devicon-scikitlearn-plain colored"></i></li>
                        <li><i class="devicon-pytorch-original colored"></i></li>
                        <li><i class="devicon-tensorflow-original colored"></i></li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="text-green-500 text-2xl">Data Analytics</p>
                    <ul>
                        <li><i class="devicon-pandas-plain-wordmark colored"></i></li>
                        <li><i class="devicon-numpy-plain colored"></i></li>
                        <li><i class="devicon-sqldeveloper-plain colored"></i></li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="text-green-500 text-2xl">Backend Development</p>
                    <ul>
                        <li><i class="devicon-fastapi-plain colored"></i></li>
                        <li><i class="devicon-flask-original text-white"></i></li>
                        <li><i class="devicon-nodejs-plain-wordmark colored"></i></li>
                        <li><i class="devicon-express-original colored"></i></li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="text-green-500 text-2xl">Frontend Development</p>
                    <ul>
                        <li><i class="devicon-react-original colored"></i></li>
                        <li><i class="devicon-bootstrap-plain colored"></i></li>
                        <li><i class="devicon-tailwindcss-original colored"></i></li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="text-green-500 text-2xl">MLOPS and Cloud</p>
                    <ul>
                        <li><i class="devicon-amazonwebservices-plain-wordmark colored"></i></li>
                        <li><i class="devicon-docker-plain colored"></i></li>
                        <li><i class="devicon-kubernetes-plain colored"></i></li>
                        <li><i class="devicon-terraform-plain colored"></i></li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="text-green-500 text-2xl">Databases</p>
                    <ul>
                        <li><i class="devicon-mongodb-plain colored"></i></li>
                        <li><i class="devicon-postgresql-plain colored"></i></li>
                    </ul>
                </div>

            </div>
        </>
    )
}