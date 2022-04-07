function Name(props) {
    return <h1>{props.name}</h1>
}

function Title(props) {
    return <p>{props.title}</p>
}

function Email(props) {
    return <p>{props.email}</p>
}

function Phone(props) {
    return <p>{props.phone}</p>
}

const dark = {
  color: 'white',
  backgroundColor: 'black',
  padding: '2rem 4rem',
  textAlign: 'left'
}

const light = {
  color: 'black',
  backgroundColor: 'white',
  padding: '2rem 4rem',
  textAlign: 'left'
}


export default function BusinessCard(props) {
  return (
    <div style={props.darkMode ? dark : light}>
      <Name name="Joe"/>
      <Title title="Problem Solver"/>
      <Email email="joe@mail.com"/>
      <Phone phone="800-123-1234"/>
    </div>
  );
}
