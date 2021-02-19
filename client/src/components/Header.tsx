import Greeter from './Greeter';

export const Header = () => {
// let greeter = new Greeter("ITverket");

  console.log(Greeter({message: "itverket"}));
  return (
    <div className="header">
      <h1>React With NodeJS</h1>
    </div>
  );
};
