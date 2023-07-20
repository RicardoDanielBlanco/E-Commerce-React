interface propsError {
  message : string
}


function Error({ message } :propsError){
  return (
    <>
    <h2>Error loading information. We will solve it as soon as possible.</h2>
    <h3>{`Error description: ${message}`}</h3>
    </>
  )
}

export default Error;