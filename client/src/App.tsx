import axios from "axios";
import React from "react";
import "./App.scss";
import Card from "./component/Card/Card";

type dataTypes = {
  id: number;
  name: string;
  balance: number;
};

const App: React.FC = () => {
  const [data, setData] = React.useState<dataTypes[]>([
    { id: 1, name: "Artur", balance: 1000 },
    { id: 2, name: "Denis", balance: 1000 },
  ]);

  React.useEffect(() => {
    axios.get(`http://localhost:3005/products`).then((data) => {
      console.log(data);
    });
  }, []);

  const toggleHandler = (id: number) => {
    setData((prev) =>
      prev.map((data) => {
        if (data.id !== id) {
          return {
            ...data,
            balance: data.balance + 100,
          };
        }
        if (data.id === id) {
          return {
            ...data,
            balance: data.balance - 100,
          };
        }
        return data;
      })
    );
  };

  return (
    <div className="container">
      <div className="cards">
        {data.map((data: dataTypes) => (
          <Card
            key={data.id}
            id={data.id}
            toggleHandler={toggleHandler}
            name={data.name}
            balance={data.balance}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
