import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"; //Antes de renderizar algo ao user passamos pelo servidor 
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

export function canSSRAuth(){
    
}