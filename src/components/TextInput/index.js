import './TextInput.css';

const TextInput = (props) => {

    const typing = (event) => {
        props.typing(event.target.value);
    }

    return (
        <div className = "text-input">
            <label>{props.label}</label>
            <input value = {props.value} onChange={typing} placeholder = {props.placeholder}/>
        </div>
    )
}

export default TextInput