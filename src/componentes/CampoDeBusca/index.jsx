import estilo from "./CampoDeBusca.module.css";
import Image from "next/image";
import Lupa from "../../assets/lupa.png";

export default function CampoDeBusca (props) {

    return (
        <section>
            <div className={estilo.container}>
                <Image src={Lupa} alt="Lupa" className={estilo.lupa} />
                <input type="text" value={props.textoInput} onChange={(event) => props.funcao(event.target.value) } className={estilo.busca} placeholder="Pesquise aqui um dos pratos do nosso cardápio"/>
            </div>
        </section>
    )
}