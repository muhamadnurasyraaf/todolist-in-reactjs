export const User =(props)=>{
    return(
        <div>
            <h4>Name : {props.name}</h4>
            <h4>Age : {props.age}</h4>
            <h4>State : {props.state}</h4>
            <hr></hr>
        </div>
    );
}