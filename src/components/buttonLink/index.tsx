import { Link } from "react-router-dom";

interface linkProps{
  text : string;
  route : string;
}

export default function ButtonLink({text, route} : linkProps){

  return(
    <Link to={route}>
      <button>{text}</button>
    </Link>
  )
}