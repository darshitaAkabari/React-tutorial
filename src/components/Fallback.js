export const Fallback = () => {
    return <h1>Something went wrong!!!</h1>
}

// Fallback = (props) => {
//     return <h1>{props.var_name}{props.children}</h1>
// }
// props are immutable use states instead

// <Fallback var_name="" ><p>this is children</p></Fallback>