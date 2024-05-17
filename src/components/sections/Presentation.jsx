import styles from './Presentation.module.css'
import Button from '../elements/Button.jsx'
import {useState} from 'react'
import {useEffect} from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Alexandre Amaro!', 'Desenvolvedor Full Stack!', 'Técnico em Mecatrônica!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        },delta)
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return (
        <div className={styles.presentation} id='Presentation'>
            <h1><strong>Olá, eu sou {text}</strong></h1>
            <p>
                Bem-vindo ao meu portfólio! Meu nome é Alexandre Amaro. Sou técnico em mecatrônica pela ETEC Presidente Vargas. Curso Jogos Digitais pela Cruzeiro do Sul. Faço parte da Formação FullStack da Escola DNC. Tenho experiência na área de desenvolvimento FrontEnd e na análise de dados.
            </p>
            <Button text="Saber mais" link="https://www.linkedin.com/in/alexandre-amaro-16246930a/"></Button>
        </div>
    )
}

export default Presentation