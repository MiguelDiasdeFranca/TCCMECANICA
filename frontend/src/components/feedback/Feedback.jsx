import './feedback.scss'

export default function Feedback({desc , nome ,local}){
  return(
    <div className="feedback-card">
    <p>{desc}</p>
    <div className="feedback-user">
      <span className="user-info"><strong>{nome}</strong> - {local}</span>
      <span className="user-icon">🚗</span>
    </div>
  </div>
  )
}

