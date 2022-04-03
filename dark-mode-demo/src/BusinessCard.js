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

export default function BusinessCard(props) {
  return (
    <div className={props.darkMode ? "dark" : "light"}>
      <Name name="Joe"/>
      <Title title="Problem Solver"/>
      <Email email="joe@mail.com"/>
      <Phone phone="800-123-1234"/>
    </div>
  );
}
