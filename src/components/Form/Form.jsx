import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypesPokemons } from "../../redux/actions/infoActions";
import axios from "axios";
import { validation } from "../../helpers/validation";

const Form = () => {
  const typesPokemons = useSelector((state) => state.typesPokemons);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: 1,
    attack: 1,
    defense: 1,
    speed: 1,
    height: 1,
    weight: 10,
    types: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: "",
  });
  console.log("Errors: ", errors);
  const [formError, setFormError] = useState("");
  console.log("Error data:", formError);

  useEffect(() => {
    dispatch(getTypesPokemons());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "types") {
      setForm({
        ...form,
        types: [value, form.types[1]],
      });
    } else if (name === "secondaryType") {
      setForm({
        ...form,
        types: [form.types[0], value],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    setErrors(
      validation({
        ...form,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in errors) {
      if (errors[key]) {
        setFormError(
          "Please correct any errors before submitting the form."
        );
        return;
      }
    }

    axios
      .post("http://localhost:3001/pokemons/pokemons", form)
      .then((response) => {
        console.log("Nuevo Pokémon creado:", response.data);
      })
      .catch((error) => {
        console.error("Error al crear el Pokémon:", error);
      });

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={form.name}
      />
      {errors.name && <div>{errors.name}</div>}

      <label>Image</label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={form.image}
      />

      <label>HP</label>
      <input
        type="number"
        name="hp"
        onChange={handleChange}
        value={form.hp}
        min="1"
        max="255"
      />
      {errors.hp && <div>{errors.hp}</div>}

      <label>Attack</label>
      <input
        type="number"
        name="attack"
        onChange={handleChange}
        value={form.attack}
        min="1"
        max="255"
      />
      {errors.attack && <div>{errors.attack}</div>}

      <label>Defense</label>
      <input
        type="number"
        name="defense"
        onChange={handleChange}
        value={form.defense}
        min="1"
        max="255"
      />
      {errors.defense && <div>{errors.defense}</div>}

      <label>Speed</label>
      <input
        type="numer"
        name="speed"
        onChange={handleChange}
        value={form.speed}
        min="1"
        max="255"
      />
      {errors.speed && <div>{errors.speed}</div>}

      <label>Height</label>
      <input
        type="number"
        name="height"
        onChange={handleChange}
        value={form.height}
        min="1"
        max="255"
      />
      {errors.height && <div>{errors.height}</div>}

      <label>Weight</label>
      <input
        type="number"
        name="weight"
        onChange={handleChange}
        value={form.weight}
        min="10"
        max="255"
      />
      {errors.weight && <div>{errors.weight}</div>}

      <label>Type:</label>
      <select name="types" onChange={handleChange}>
        <option value="">Selecciona un tipo</option>
        {typesPokemons.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {errors.types && <div>{errors.types}</div>}

      <select name="secondaryType" onChange={handleChange}>
        <option>Selecciona un tipo</option>
        {typesPokemons.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
      <div>{formError && <div>{formError}</div>}</div>
    </form>
  );
};

export default Form;
