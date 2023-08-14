import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
	

    const handleInput = event => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            setTodos(prevTodos => [...prevTodos, inputValue]);
            setInputValue("");
        }
    };

	const handleDelete = indexToDelete => {
        setTodos(prevTodos => prevTodos.filter((_, index) => index !== indexToDelete));
    };

	return (
        <div className="container w-50 mx-auto text-warning fw-light">
            <h1 className="text-center text-warning fw-light h1 display-1">todos</h1>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input
                        type="text"
                        className="form-control border-0"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={handleInput}
                        onKeyPress={handleKeyPress}
                    />
                </li>
                {todos.map((todo, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        {todo}
                        <button className="btn btn-outline-danger" onClick={() => handleDelete(index)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="it text-secondary">{todos.length} item left</div>
        </div>
    );
};

export default Home;






