import Web3 from 'web3/dist/web3.min.js';
import { useEffect } from 'react';

export default function Nosotros() {

    const WALLET = '0xA5de4364e621f37F73Dfa6fCcd905aA427aE192a';

    let userAddress, amountDeposit;

    useEffect(async () => {
        let provider = window.ethereum;
        web3 = new Web3(provider);
    }, []);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            document.getElementById('account').innerHTML = `Wallet Conectada: ${userAddress}`;
        }
    }

    const sendEther = () => {
        amountDeposit = document.getElementById('depositValue').value;
        amountDeposit = amountDeposit * 1000000000000000000;
        web3.eth.sendTransaction({
          from: userAddress,
          to: WALLET,
          value: amountDeposit
        });
    }

    return (
        <div>
            <div className="d-flex justify-content-center"><h1 className="fs-1 fw-bold gradient-text">NOSOTROS</h1></div>
            <p className="fs-5 text-white w-75 pt-3 mx-auto">Somos una plataforma totalmente gratuita, ninguno de nuestro contenido sera pago porque un mundo con educacion financiera puede impulsarnos como sociedad. Por eso si bien no tenemos ingresos, tu aporte es de mucha ayuda para poder continuar proporcionando contenido!</p>
            <button type="button" className="btn fw-bold btn-outline-success mx-auto d-grid mt-5 mb-3" onClick={connectWallet}>Conecta tu Wallet</button>
            <p id="account" className="d-flex fw-bold justify-content-center text-white"></p>
            <div className="input-group mx-auto mb-3 mt-1 w-25">
                <span className="input-group-text text-white bg-dark">Ξ</span>
                <input type="number" className="form-control text-white bg-dark" id='depositValue' min={0} precision={3} step={0.001}/>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary mx-auto d-grid mt-2 mb-3" onClick={sendEther}>Send Ether ➡</button>
            </div>
        </div>
    );
}