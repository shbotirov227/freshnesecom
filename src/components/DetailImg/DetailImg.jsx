import DetailImage from '../../assets/images/detailImage.png';

import './DetailImg.scss';

const DetailImg = ({ rate, rateTitle }) => {
    return (
        <div className="DetailImg">
            <img src={DetailImage} alt="" width="640" height="455" />
            
            <div className="d-flex align-items-center detailImgItems">
                {
                    rate ? <span className="detailImgRate">{rate}</span> : undefined
                }
                {
                    rateTitle ? <span className="detailImgRate">{rateTitle}</span> : undefined
                }
            </div>
        </div>
    )
}

export default DetailImg;