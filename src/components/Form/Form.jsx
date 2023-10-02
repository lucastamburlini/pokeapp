import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypesPokemons } from "../../redux/actions/infoActions";

const Form = () => {
  const typesPokemons = useSelector((state) => state.info.typesPokemons);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  console.log("Esta es la data que se manda al reducer ", data);

  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Valor de data ", name);
    console.log("Valor de value ", value);

    if (name === "primaryType" || name === "secondaryType") {
      const selectedType = value;
      const updateTypes = data.types.slice();
      const indexOfType = updateTypes.indexOf(selectedType);

      if (indexOfType === -1) {
        updateTypes.push(selectedType);
      } else {
        updateTypes.splice(selectedType, 1);
      }

      setData({
        ...data,
        types: updateTypes,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.priventDefault(data);
    dispatch(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label type="text">Name</label>
      <input
        type="name"
        name="name"
        onChange={handleChange}
        value={data.name}
      />

      <label type="text">Image</label>
      <input
        type="image"
        name="image"
        onChange={handleChange}
        value={data.image}
      />

      <label type="number">HP</label>
      <input type="hp" name="hp" onChange={handleChange} value={data.hp} />

      <label type="number">Attack</label>
      <input
        type="attack"
        name="wttack"
        onChange={handleChange}
        value={data.attack}
      />

      <label type="number">Defense</label>
      <input
        type="defense"
        name="defense"
        onChange={handleChange}
        value={data.defense}
      />

      <label type="number">Speed</label>
      <input
        type="speed"
        name="speed"
        onChange={handleChange}
        value={data.speed}
      />

      <label type="number">Height</label>
      <input
        type="height"
        name="height"
        onChange={handleChange}
        value={data.height}
      />

      <label type="number">Weight</label>
      <input
        type="weight"
        name="weight"
        onChange={handleChange}
        value={data.weight}
      />

      <label type="text">Type:</label>
      <select name="primaryType" onChange={handleChange}>
        <option value="">Selecciona un tipo</option>
        {typesPokemons.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select name="secondaryType" onChange={handleChange}>
        <option value="">Selecciona un tipo</option>
        {typesPokemons.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
