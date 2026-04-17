import "../styles.css";
import image from "../assets/images/cat.png"

export const About = () => {
    return (
        <>
            <div className="flex">
                <div className="">
                    <img className="" src={image}></img>
                </div>
                <div className="text-gray-500">
                    <h1 className="font-bold text-gray-400 text-2xl">Hi, I am ABHINAV MISHRA</h1>
                    <p className="">
                        I am a passionate and driven engineering student with a strong interest in Artificial Intelligence, Machine Learning, and software development. I enjoy building practical, real-world solutions that combine intelligent systems with user-friendly applications.
                        With hands-on experience in developing projects involving AI/ML models, IoT systems, and full-stack web applications, I am constantly exploring new technologies and refining my problem-solving skills. I have worked on projects ranging from RFID-based systems and ESP8266-powered devices to Flask-based applications and interactive web interfaces, showcasing my ability to bridge hardware and software effectively.
                        I am particularly interested in leveraging data-driven approaches and scalable systems to solve meaningful problems. Alongside my technical work, I actively participate in hackathons and collaborative projects, where I focus on creating efficient, impactful solutions.
                        I am always eager to learn, adapt, and take on new challenges, with the goal of growing into a skilled engineer who builds innovative and reliable technology.
                    </p>
                </div>
            </div>
            </>
    )
}