import Filho from "../Filho";

export default function Pai({ dinheiro, handleCarteira }) {



    return (
        <>
            <div>Sou o Pai</div>
            <Filho dinheiro={dinheiro} handleCarteira={handleCarteira}></Filho>
        </>

    )
}