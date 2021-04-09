import { Server } from "miragejs";

export default function({ environment = 'deveopment'} = {}){
    return new Server({
        environment,

        routes(){

        },
    })
}