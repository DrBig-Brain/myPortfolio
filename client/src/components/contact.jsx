import "../styles.css";

export const Contact = () => {
    return(
        <div className="text-center bg-gray-800" id="contact">
            <p className="text-gray-400">
                Want to work together or learn more about my projects? Send me a message.
            </p>
            <a href="mailto:abhinav714b@gmail.com" className="text-white">Email Me</a>
            <p className="text-gray-400">Or Connect on</p>
            <a className="text-white" href="https://www.linkedin.com/in/abhinavmishra05">Linkedin</a>
        </div>
    )
}