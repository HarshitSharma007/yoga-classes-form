import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left'  style={{position:'absolute',bottom:"0", marginTop:"15px",width:"100%",display :"flex", justifyContent:"center",backgroundColor: 'rgb(62, 62, 67) ' }}>
      <div className='text-center p-3' style={{ color:"white",backgroundColor: 'rgb(62, 62, 67) ' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
       
          Harshit Sharma
        
      </div>
    </MDBFooter>
  );
}