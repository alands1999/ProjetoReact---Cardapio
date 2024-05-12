import estilo from "./Cards.module.css";
import Image from "next/image";

export default function Card (props) {
    return (
        <main className={estilo.container_cards}>
            <div className={estilo.card}>
                <Image src={props.imagem} alt={props.nome} className={estilo.image} />
                <div className={estilo.container_texto}>
                    <h3 className={estilo.title}>{props.nome}</h3>
                    <span className={estilo.categoria}>{props.categoria}</span>
                    <p className={estilo.descript}>{props.descricao}</p>
                    <p className={estilo.preco}>R$ {props.preco}</p>
                </div>
            </div>
        </main>
    )
}