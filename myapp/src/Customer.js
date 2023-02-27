export const Customer = (props)=>{
    return(
      <div>
          <h3>Name : {props.name}</h3>
          <h3>Age : {props.age}</h3>  
          <h3>Email : {props.email}</h3>
          <hr></hr>
      </div>
    );
  }