import './Title.css'

const Title = (props) => {
  return (
      <div className='container text-center flex-column'> 
        <h1 className="title display-1">{props.title}</h1>
        <h4 className="subtitle">{props.subtitle}</h4>
      </div>
  )
}

export default Title;