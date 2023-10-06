const regexName = /^[A-Za-z]+$/;

export const validation = (props) => {
    let errors = {}

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

    if (props.attack < 5 || props.attack > 190) {
        errors.attack = "The attack value must be in the range of 5 to 190."
    }

    if (props.defense < 5 || props.defense > 230) {
        errors.defense = "The defense value must be in the range of 5 to 230."
    }

    if (props.speed < 5 || props.speed > 180) {
        errors.speed = "The speed value must be in the range of 5 to 180."
    }

    if (props.height < 1) {
        errors.height = "The height value must be greater than 1."
    }

    if (props.weight < 10) {
        errors.weight = "The height value must be greater than 10."
    }

    if (props.types[0] === "" || props.types[0] === undefined) {
        errors.types = "Primary type is required.";
    }

    return errors
}