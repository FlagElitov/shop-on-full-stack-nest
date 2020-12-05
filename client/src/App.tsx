import axios from "axios";
import React from "react";
import "./App.scss";
import Menu from "./component/Menu/Menu";
import Card from "./component/Card/Card";
import { Route, Switch } from "react-router-dom";
import Basket from "./component/Basket/Basket";

export interface dataProduct {
  title: string;
  price: number;
  image: string;
  rating: number;
  company: string;
}

const App: React.FC = () => {
  const [data, setData] = React.useState<dataProduct[]>([]);

  console.log(data);

  React.useEffect(() => {
    axios.get(`http://localhost:3005/products`).then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/basket" component={Basket} />
          <Route
            exact
            path="/"
            render={() => (
              <div className="contentCard">
                {data &&
                  data.map((datas: dataProduct) => (
                    <div className="card">
                      <Card
                        title={datas.title}
                        price={datas.price}
                        rating={datas.rating}
                        company={datas.company}
                        image={datas.image}
                      />
                    </div>
                  ))}
              </div>
            )}
          />
        </Switch>
      </div>
    </>
  );
};
export default App;
