import "./Heading.css";

function Heading(props) {
    return(
        <>
            <p className="heading">{props.heading}</p>
        </>
    );
}

export default Heading;