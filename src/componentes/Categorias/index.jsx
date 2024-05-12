import estilos from "./Categorias.module.css"
import Image from "next/image";
import entrada from "../../assets/entrada.png";
import massas from "../../assets/massa.png";
import carnes from "../../assets/carne.png";
import bebidas from "../../assets/bebidas.png";
import saladas from "../../assets/salada.png";
import sobremesas from "../../assets/sobremesa.png";

export default function Categorias (props) {


    return (
        <main className={estilos.container_buttons}>
            
            <button onClick={()=> props.funcao("Entradas")} className={estilos.botao}>
                <div className={estilos.botao_img}>
                <Image src={entrada} className={estilos.imagem} alt="Entradas" />
                <h3>Entradas</h3>  
                </div>
            </button>

            <button onClick={()=> props.funcao("Massas")} className={estilos.botao}>
                <div className={estilos.botao_img}>
                <Image src={massas} className={estilos.imagem} alt="Massas" />                
                <h3>Massas</h3>  
                </div> 
            </button>
            
            <button onClick={()=> props.funcao("Carnes")} className={estilos.botao}>
                <div className={estilos.botao_img}>
                <Image src={carnes} className={estilos.imagem} alt="Carnes" /> 
                <h3>Carnes</h3>  
                </div>
            </button>
            
            <button onClick={()=> props.funcao("Bebidas")} className={estilos.botao}>
                <div className={estilos.botao_img}>
                <Image src={bebidas} className={estilos.imagem} alt="Bebidas" />
                <h3>Bebidas</h3>  
                </div> 
            </button>
            
            <button onClick={()=> props.funcao("Saladas")} className={estilos.botao}>
                <div className={estilos.botao_img}>
                <Image src={saladas} className={estilos.imagem} alt="Saladas" />
                <h3>Saladas</h3>  
                </div> 
            </button>
            
            <button onClick={()=> props.funcao("Sobremesas")} className={estilos.botao}>
                <div className={estilos.botao_img}>
                <Image src={sobremesas} className={estilos.imagem} alt="Sobremesas" />
                <h3>Sobremesas</h3> 
                </div> 
            </button>
            
            
        </main>
    )
}