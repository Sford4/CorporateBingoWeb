import React from 'react';
// var QRCode = require('qrcode.react');
import QRCode from 'qrcode.react';

// Style imports
import { MASTER, COLORS } from '../../../../styles/masterStyles';


const BuildQRCodeTask = (props) => {

  const generateQRCode = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = 'bingo_qr_code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div style={styles.container}>
        <div style={{ marginTop: -10, marginBottom: -5 }}>
            <QRCode
                id="123456"
                value={props.task._id}
                size={200}
                level={"Q"}
                includeMargin={false}
            />
        </div>
        <button 
            style={{ ...MASTER.wideRoundBtn, marginTop: 20, height: 60, width: 200 }} 
            onClick={() => generateQRCode()}
        >
            <span style={{ ...MASTER.wideRoundBtnText, fontSize: 22 }}>Download QR Code</span>
        </button>
    </div>
  );
}
  
const styles = {
  
};

export default BuildQRCodeTask;