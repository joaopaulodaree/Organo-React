import './DropdownList.css';

const DropdownList = (props) => {

    return (
        <div className = "DropdownList">
            <label>{props.label}</label>
            <select value = {props.value} onChange = {event => props.Selected(event.target.value)}>
                {props.items.map(item => <option key = {item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList;