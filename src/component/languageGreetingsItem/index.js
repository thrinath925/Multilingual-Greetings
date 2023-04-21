import './index.css'

const LanguageGreetingsItem = props => {
  const {greet} = props

  return (
    <div className="greeting-container">
      <img
        className="img"
        src={greet[0].imageUrl}
        alt={greet[0].imageAltText}
      />
    </div>
  )
}

export default LanguageGreetingsItem
