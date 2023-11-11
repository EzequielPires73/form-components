import VMasker from "vanilla-masker";

export const maskNumberCard = (value: string) => VMasker.toPattern(value, "9999 9999 9999 9999");

export const maskCep = (value: string) => VMasker.toPattern(value, "99999-999");

export const maskCpf = (value: string) => VMasker.toPattern(value, "999.999.999-99");

export const maskPrice = (value: string) => VMasker.toMoney(value);

export const maskNumber = (value: string) => VMasker.toNumber(value);

export const maskPhone = (value: string) => VMasker.toPattern(value, '(99) 99999-9999');