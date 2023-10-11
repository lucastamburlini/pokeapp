import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypesPokemons } from "../../redux/actions/actions";
import axios from "axios";
import { validation } from "../../helpers/validation";

import style from "./Form.module.css";

const Form = () => {
  const typesPokemons = useSelector((state) => state.typesPokemons);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: 1,
    attack: 5,
    defense: 5,
    speed: 5,
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

  useEffect(() => {
    dispatch(getTypesPokemons());
    const isComplete =
      Object.values(form).every((value) => value !== "") &&
      form.types.length > 1;
    setIsFormComplete(isComplete);
  }, [form]);

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

    if (name !== "secondaryType") {
      setErrors(
        validation({
          ...form,
          [name]: value,
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/pokemons/pokemons", form)
      .then((response) => {
        setSuccessMessage("Nuevo Pokémon creado: " + response.data.name);
        setErrorMessage(""); //
        setForm({
          name: "",
          image: "",
          hp: 1,
          attack: 5,
          defense: 5,
          speed: 5,
          height: 1,
          weight: 10,
          types: [],
        });

        dispatch(getPokemons())
      })
      .catch((error) => {
        setErrorMessage("Error al crear el Pokémon: " + error.message);
        setSuccessMessage("");
      });
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={form.name}
      />
      {errors.name && <div className={style.errorMessage}>{errors.name}</div>}

      <label>
        Image URL or{" "}
        <a
          href="https://replicate.com/lambdal/text-to-pokemon"
          target="_blank"
          rel="noreferrer"
        >
          CREATE IMAGE
        </a>
      </label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={form.image}
      />
      {errors.image && <div className={style.errorMessage}>{errors.image}</div>}

      <label>HP</label>
      <input
        type="number"
        name="hp"
        onChange={handleChange}
        value={form.hp}
        min="1"
        max="255"
      />
      {errors.hp && <div className={style.errorMessage}>{errors.hp}</div>}

      <label>Attack</label>
      <input
        type="number"
        name="attack"
        onChange={handleChange}
        value={form.attack}
        min="5"
        max="190"
      />
      {errors.attack && (
        <div className={style.errorMessage}>{errors.attack}</div>
      )}

      <label>Defense</label>
      <input
        type="number"
        name="defense"
        onChange={handleChange}
        value={form.defense}
        min="5"
        max="230"
      />
      {errors.defense && (
        <div className={style.errorMessage}>{errors.defense}</div>
      )}

      <label>Speed</label>
      <input
        type="number"
        name="speed"
        onChange={handleChange}
        value={form.speed}
        min="5"
        max="180"
      />
      {errors.speed && <div className={style.errorMessage}>{errors.speed}</div>}

      <label>Height</label>
      <input
        type="number"
        name="height"
        onChange={handleChange}
        value={form.height}
        min="1"
      />
      {errors.height && (
        <div className={style.errorMessage}>{errors.height}</div>
      )}

      <label>Weight</label>
      <input
        type="number"
        name="weight"
        onChange={handleChange}
        value={form.weight}
        min="10"
      />
      {errors.weight && (
        <div className={style.errorMessage}>{errors.weight}</div>
      )}

      <label>Type:</label>
      <select name="types" onChange={handleChange}>
        <option value="">Selecciona un tipo</option>
        {typesPokemons.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {errors.types && <div className={style.errorMessage}>{errors.types}</div>}

      <select name="secondaryType" onChange={handleChange}>
        <option>Selecciona un tipo</option>
        {typesPokemons.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button
        className={style.submitButton}
        type="submit"
        disabled={!isFormComplete}
      >
        Submit
      </button>
      {successMessage && (
        <div className={style.successSubmitMessage}>{successMessage}</div>
      )}
      {errorMessage && (
        <div className={style.errorSubmitMessage}>{errorMessage}</div>
      )}
    </form>
  );
};

export default Form;
