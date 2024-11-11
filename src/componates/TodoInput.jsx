export default function TodoInput(props) {
    const { hadalAddTodoes } = props;

    return (
        <header>
            <input defaultValue="" placeholder="Enter todo..." id="todo" />
            <input defaultValue="" id="date" type="date" />
            <select defaultValue="No time alloted" id="time">
                <option value="No time alloted">No set time</option>
                <option value="5 min">5 min</option>
                <option value="10 min">10 min</option>
                <option value="30 min">30 min</option>
                <option value="1 hour">1 hour</option>
                <option value="2 hours">2 hours</option>
                <option value="> 2 hours">over 2 hours</option>
            </select>
            <button onClick={() => {hadalAddTodoes(get_inputs())}}>Add</button>
        </header>
    )
}

function get_inputs(){
    let items = {
        todo: document.getElementById('todo'),
        date: document.getElementById('date'),
        time: document.getElementById('time')
    };

    let ret = [];

    for (let item in items){
        if(items[item].value !== ''){
            ret.push(items[item].value);
        } else {
            ret.push("Not given");
        }
        items[item].value = items[item].defaultValue;
        console.log(items[item]);
    }

    return ret;
}