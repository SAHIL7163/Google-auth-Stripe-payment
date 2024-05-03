import { useNavigate } from "react-router-dom";
import Stripe from './payment/Stripe';
import useAuth from "../hooks/useAuth";

const Unauthorized = () =>
{
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const {auth} = useAuth();
    return(
        <section className="unauthorized d-flex flex-column justify-content-center align-items-center">
        <h1>Unauthorized</h1>
       {/*  <br /> */}
        <p className=" text-center fs-3">You do not have access to the requested page.</p>
        <div className="flex-grow">
            <div className="d-flex align-item-center justify-content-center">
            <button className="unauthorized-btn btn-lg"onClick={goBack}>Go Back</button>
            </div>
            <div className={(auth.accessToken && auth?.roles?.includes(2001)) ?  "" :  "hide"}>
            <Stripe/>
            </div>
        </div>
    </section> 
    )
    }

    
export default Unauthorized