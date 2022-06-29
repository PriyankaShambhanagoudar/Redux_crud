import React from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux"
import { counterIncre, counterDecre, counterIncreBy, toggleBut } from "../redux/action"


const Couter = () => {
    const counterNum = useSelector(state => state.counter.counter)
    const show = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch(counterIncre())
    };

    const increaseHandler = () => {
        dispatch(counterIncreBy())
    };

    const decrementHandler = () => {
        dispatch(counterDecre())
    };

    const toggleHandler = () => {
        dispatch(toggleBut())

    };

    return (
        <div>
            <main
                style={{
                    margin: "5rem auto",
                    boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
                    width: "40rem",
                    borderRadius: "8px",
                    padding: "1rem",
                    textAlign: "center",
                    backgroundColor: " #f4f0fa ",
                }}
            >
                <h1
                    style={{
                        fontSize: "1rem",
                        margin: "0",
                        color: " #575757",
                        textTransform: "uppercase",
                    }}
                >
                    Counter
                </h1>
                <div
                    style={{
                        fontSize: "2rem",
                        color: "#3c0080",
                        margin: "2rem 0 ",
                        fontWeight: "bold",
                    }}
                >
                    {" "}
                    {counterNum}
                </div>
                {show && <div>
                    <Button
                        style={{ margin: "1rem" }}
                        variant="contained"
                        color="primary"
                        onClick={incrementHandler}
                    >
                        Increment
                    </Button>
                    <Button
                        style={{ margin: "1rem" }}
                        variant="contained"
                        color="primary"
                        onClick={increaseHandler}
                    >
                        Increase by 10
                    </Button>
                    <Button
                        style={{ margin: "1rem" }}
                        variant="contained"
                        color="primary"
                        onClick={decrementHandler}
                    >
                        Decrement
                    </Button>


                </div>}
                <div>
                    <Button
                        style={{ margin: "1rem" }}
                        variant="contained"
                        color="primary"
                        onClick={toggleHandler}
                    >
                        Toggle Counter
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default Couter;
