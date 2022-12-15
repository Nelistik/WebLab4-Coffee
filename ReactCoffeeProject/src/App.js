import { React, useState } from "react";
import kofi from "./coffee.json";
function App() {
  /*Объявление списка*/
  const kofiRoster = kofi;
  const ingriRoster = [
    "Coffee",
    "1oz Espresso",
    "Foamed milk",
    "Ice cream",
    "Cream",
    "Espresso",
    "2oz Espresso",
    "Traditional",
    "Sweet",
    "Panela",
    "Steamed Milk",
    "Long pulled espresso",
    "Chocolate",
    "Sugar",
    "Hot Water",
    "1oz Steamed Milk",
    "Short pulled espresso",
    "Whiskey",
    "Foam",
    "Salt"
  ];
  /*Использование state и других возможностей React без написания классов
  С помощью React мы можем воспроизвести аналогичное поведение в функциональных компонентах:
  Для доступа к состоянию компонента используем useState()
  Стрелочная функция c более коротким синтаксисом.
  сheck-параметр со значением "True" записывается в массив; 
  если check-параметр имеет значение "False", то он удаляется из массива. 
  Массив сопоставляется с coffee.json и осуществляется поиск нужной позиции. 
  При отсутствии соответствующей позиции также выводится результат
  */
  const [description, setDescription] = useState("Choose another ingredients");
  var [choosedingriRoster, setIngredient] = useState([]);
  const [url, setUrl] = useState(
    "https://i.pinimg.com/736x/5d/05/2b/5d052b26de17c0060928b2c7637fe81b.jpg"
  );
  const [title, setTitle] = useState("No coffee :)");
  const onchange = (e) => {
    let k = 0;
    if (e.target.checked) {
      var c = choosedingriRoster;
      c.push(e.target.value);
      setIngredient(c);
    } else {
      c = choosedingriRoster;
      c.splice(c.indexOf(e.target.value), 1);
      setIngredient(c);
    }
    //сортировка и вывод в консоль
    var f = choosedingriRoster.sort();
    choosedingriRoster = f;
    console.log(choosedingriRoster);
    for (var i = 0; i < kofiRoster.length; i++) {
      if (
        JSON.stringify(c) === JSON.stringify(kofiRoster[i].ingredients.sort())
      ) {
        setDescription(kofiRoster[i].description);
        setUrl(kofiRoster[i].image);
        setTitle(kofiRoster[i].title);
        k = k + 1;
        break;
      }
    }
    //ничего не нашлось
    if (k === 0) {
      setUrl(
        "https://i.pinimg.com/736x/5d/05/2b/5d052b26de17c0060928b2c7637fe81b.jpg"
      );
      setTitle("No coffee :)");
      setDescription("Choose another ingredients");
    }
  };
  /*Адаптивный html-return*/
  return (
    <div className="CoffeHelper">
      <center>
        <table className="checkboxes">
          <tbody>
            {[...Array(5)].map((x, i) => (
              <tr>
                {[...Array(parseInt(ingriRoster.length / 5))].map((y, j) => (
                  <td>
                    <input
                      type="checkbox"
                      value={ingriRoster[i + 5 * j]}
                      onChange={onchange}
                      style={{ margin: "10px" }}
                    ></input>
                    <span>{ingriRoster[i + 5 * j]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </center>
      <center>
        <div>
          <img
            class="cimg"
            id="coffimg"
            src={url}
            width=""
            height="300"
            alt=""
          />
          <br />
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
      </center>
    </div>
  );
}

export default App;
