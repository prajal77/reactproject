
import { useEffect, useState } from "react";

// functional component
const HomePageLayout = (props) => {
    // state hook
    // let [counter, setCounter] = useState(0);
    let [liked, setliked] = useState(false)

    // effect hook
    // useEffect(() => {
    //     // console.log("counter is changed");
    // }, [setliked])

    return (<>
        I am homePage
        <p>Name: {props.name}</p>
        {/* <button onClick={(e) => {
            setCounter(++counter)
        }}>Add Counter</button>
        <p>{counter}</p> */}
        <button onClick={(e) => {
            setliked(!liked)

        }}>
            {
                liked ? "Liked" : "like"

            }
        </button>
    </>)
}

// import { Component } from "react";

// class HomePageLayout extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             StateName: "Test User"
//         }
//         console.log("hello World from the constructor!");
//     }

//     render = () => {
//         // console.log(this.props);
//         return (<>
//             I'm in class based component.
//             <p>Name: {this.props.name}</p>
//             <p>State: {this.state.StateName}</p>
//         </>)
//     }
// }

export default HomePageLayout;