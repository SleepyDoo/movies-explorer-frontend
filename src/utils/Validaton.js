import { NAME_REG, EMAIL_REG, NO_FIELD_ERR, VAL_FIELD_ERR } from "./constants";

export const validateName = (name) => {

    let isValid = false;
    let error = null;

    if (name) {

        if (name.match(NAME_REG)) {
            if (name.match(NAME_REG)[0] === name) {
                isValid = true;
            } else {
                error = VAL_FIELD_ERR;
            }
        } else {
            error = VAL_FIELD_ERR;
        }
    } else {
        error = NO_FIELD_ERR;
    }
    return { isValid, error }
}

export const validateEmail = (email) => {

    let isValid = false;
    let error = null;

    if (email) {
        if (email.match(EMAIL_REG)) {
            if (email.match(EMAIL_REG)[0] === email) {
                isValid = true;
            } else {
                error = VAL_FIELD_ERR;
            }
        } else {
            error = VAL_FIELD_ERR;
        }
    } else {
        error = NO_FIELD_ERR;
    }
    return ({ error, isValid });
}

export const validateOther = (password) => {
    let isValid = false;
    let error = null;

    if (password) {
        isValid = true;
    } else {
        error = NO_FIELD_ERR;
    }

    return { error, isValid };
}