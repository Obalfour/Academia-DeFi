import Web3 from 'web3/dist/web3.min.js';
import { useEffect } from 'react';
import './styles/Donaciones.css';

export default function Donaciones() {

    // Contrato deployeado en Rinkeby (Testing Network)
    // https://rinkeby.etherscan.io/address/0x0fD1532eaA49DF13e3bA09Ccfe02d085D068DE0C
    const CONTRACT = '0x0fD1532eaA49DF13e3bA09Ccfe02d085D068DE0C';

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
          to: CONTRACT,
          value: amountDeposit
        });
    }

    return (
        <div>
            <div className="d-flex justify-content-center"><h1 className="fs-1 fw-bold text-white">Donaciones</h1></div>
            <p className="fs-5 text-white fst-italic w-50 pt-3 text-center mx-auto">Somos una plataforma totalmente gratuita, por eso tu aporte vale mucho!</p>
            <button type="button" className="btn fw-bold btn-outline-success mx-auto d-grid mt-5" onClick={connectWallet}>Conectar Wallet</button>
            <p id="account" className="d-flex fw-bold justify-content-center text-white"></p>
            <p className="text-muted align-text-center text-center">Cantidad en Ether</p>
            <div className="input-group mx-auto mb-3 mt-1 w-25">
                <span className="input-group-text text-white bg-dark">Ξ</span>
                <input type="number" className="form-control text-white bg-dark" id='depositValue' min={0} precision={3} step={0.0001}/>
            </div>
            <div className="d-flex justify-content-center" id='container-boton'>
                <button type="button" className="btn btn-primary mx-auto d-grid mt-2 mb-3" onClick={sendEther}>Enviar ➡</button>
            </div>
        </div>
    );
}