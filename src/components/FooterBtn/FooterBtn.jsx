import './FooterBtn.scss'

const FooterBtn = ({ title }) => {
  return (
    <div className="FooterBtn">
      {title.map((item) => {
        return <button className="footerBtn">{item}</button>
      })}
    </div>
  )
}

export default FooterBtn
