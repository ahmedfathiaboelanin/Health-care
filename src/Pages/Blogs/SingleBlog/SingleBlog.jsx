import "./SingleBlog.css"
import { useParams } from "react-router-dom"
//how to use useParams hook?
export default function SingleBlog() {
    const params = useParams();
  return (
    <div>SingleBlog { params.id }</div>
  )
}
