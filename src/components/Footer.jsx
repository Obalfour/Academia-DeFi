import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export default function App() {
  return (
    <MDBFooter className='text-center text-white bg-dark' id='footer'>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Ayudanos</span>
            <Link to="/donaciones"><button type='button' className='btn btn-outline-light btn-rounded'>
              Dona!
            </button></Link>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' style={{ textDecoration: 'none' }} href='https://academia-defi.vercel.app/'> Academia DeFi</a>
      </div>
    </MDBFooter>
  );
}