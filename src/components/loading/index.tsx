
interface props {
  props : string
}

function Loading({props} : props){
  return (
    <h2>{`Loading ${props} ...`}</h2>
  )
}

export default Loading;