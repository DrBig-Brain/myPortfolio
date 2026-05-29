import "../styles.css";
import { quotes } from "../data/quotes";

export const Quote = (props) => {
    console.log(props)
    return(<>
    <div className="text-center py-10">
        <p className="text-gray-500 text-6xl font-serif italic">{quotes[props.id]}</p>
    </div>
    </>)
}