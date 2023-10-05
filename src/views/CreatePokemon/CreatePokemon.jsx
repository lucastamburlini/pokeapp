import Form from "../../components/Form/Form";

import style from './CreatePokemon.module.css'

const CreatePokemon = () => {
  return (
    <div className={style.createContainer}>
      <h1>Create your Pokemon</h1>
      <Form/>
    </div>
  );
};

export default CreatePokemon;
