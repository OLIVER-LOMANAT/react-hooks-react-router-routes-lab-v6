import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
    
    return (
        <>
        <header>
            <NavBar />
        </header>
        <h1>
            Oops! Looks like something went wrong.
        </h1>
         </>

    )

}