const regexName = /^[A-Za-z]+$/;

export const validation = (props) => {
    let errors = {}
    console.log("Props recibidos en la función validation:", props);

    if (!props.name) {
        errors.name = "Name is required.";
    } else if (!regexName.test(props.name)) {
        errors.name = "Enter only letters.";
    } else if (props.name.length < 4) {
        errors.name = "Must have at least 4 letters.";
    }

    if(props.image.length < 10){
        errors.image = "Must have at least 10 letters.";
    }

    if (props.hp < 1 || props.hp > 255) {
        errors.hp = "The HP value must be in the range of 1 to 255."
    }

    if (props.attack < 1 || props.attack > 255) {
        errors.attack = "The attack value must be in the range of 1 to 255."
    }

    if (props.defense < 1 || props.defense > 255) {
        errors.defense = "The defense value must be in the range of 1 to 255."
    }

    if (props.speed < 1 || props.speed > 255) {
        errors.speed = "The speed value must be in the range of 1 to 255."
    }

    if (props.height < 1 || props.height > 1000) {
        errors.height = "The height value must be in the range of 1 to 255."
    }

    if (props.weight < 10 || props.weight > 9999) {
        errors.weight = "The weight value must be in the range of 1 to 255."
    }

    if (props.types[0] === "" || props.types[0] === undefined) {
        errors.types = "Primary type is required.";
    }

    return errors
}