import './Certificates.css'
import c1 from '../../../assets/283.png'
import c2 from '../../../assets/Dibyajyoti Parida.png'
import c3 from '../../../assets/IMG_20250403_075255.jpg' 
import c4 from '../../../assets/IMG_20250503_090354.jpg'
export default function Certificates(){
    return(
        <>
        <div className="certificates">
            <img src={c4} alt="Certificates" />
            <img src={c1} alt="Certificates" />
            <img src={c3} alt="Certificates" />
            <img src={c2} alt="Certificates" />
        </div>
        </>
    );
}