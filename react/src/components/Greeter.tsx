interface myProps {
  name: string;
}

const Greeter = ({ name }: myProps): JSX.Element => {
  return (
    <>
      <h1>Hey There {name}</h1>
    </>
  );
};

export default Greeter;
