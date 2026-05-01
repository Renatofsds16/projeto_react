import React from "react";
import ReactDOM from "react-dom/client";
import Primeiro from "./componentes/Primeiro";
import Bondia from "./componentes/Bondia";
import { BoaTarde, BoaNoite } from "./componentes/multiplos";
import Saldacao from "./componentes/Saldacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Pai nome="Renato" sobrenome="Firmino">
            <Filho nome="Pedro" sobrenome="Firmino" />
            <Filho nome="Ana" sobrenome="Firmino" />
            <Filho nome="Gustavo" sobrenome="Firmino" />
            <Filho nome="Rebeca" sobrenome="Firmino" /> 
        </Pai>
    </div>
);

