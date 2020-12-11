import React from "react";
import "./App.scss";
import Menu from "./component/Menu/Menu";
import Card from "./component/Card/Card";
import { Route, Switch } from "react-router-dom";
import Basket from "./component/Basket/Basket";
import { dataProduct } from "./redux/action/ItemsActionTypes";
import { useDispatch, useSelector } from "react-redux";
import { itemsRequest } from "./redux/action/ItemsAction";
import { RootStore } from "./redux/redux-store";
import { initialStateT } from "./redux/reducers/ItemsReducers";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const items: initialStateT = useSelector((state: RootStore) => state.itemsR);
  // const [data, setData] = useState(initialState)
  const data: dataProduct[] | undefined = items.items;
  // console.log(data?.sort((a, b) => a.price - b.price));

  console.log(data);

  React.useEffect(() => {
    dispatch(itemsRequest());
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
                {items.loading && "Загрузка"}
                {items.faile && "Помилка"}
                {data &&
                  data.map((datas: dataProduct, index) => (
                    <div className="card" key={index}>
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
