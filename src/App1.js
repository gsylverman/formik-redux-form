export default function App() {
  return (
    <SomeComp
      values={{nameInput: 'name', lastNameInput: 'lastName'}}
    >
      {(change) => {
        return (
          <>
            <input onChange={change} type="text" />
          </>
        );
      }}
    </SomeComp>
  );
}



function SomeComp(props) {
  const change = (e) => {
    console.log(props.values)
    console.log(e.target.value)
  }
  return (
    <>
      {props.children(change)}
    </>
  );
}