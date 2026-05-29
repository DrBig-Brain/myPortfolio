import "../styles.css";
import { quotes } from "../data/quotes";

export const Quote = (props) => {
    console.log(props)
    return(<>
    <div className="text-center py-6 px-4">
        <p className="text-gray-500 text-xl sm:text-3xl md:text-6xl font-serif italic">{quotes[props.id]}</p>
    </div>
    </>)
}