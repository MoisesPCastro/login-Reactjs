import * as yup from "yup";

export const Validations = yup.object().shape({
    nome: yup
    .string()
    .min(3, 'Nome deve ter mais de 4 caracteres!')
    .required('Nome é um campo obrigatório!'),
    
    // cpf: yup
    // .string()
    // .max(15, 'Cpf precisa ter 11 caracteres')
    // .min(11, 'Cpf precisa ter 11 caracteres')
    // .cpf(''),

telefone: yup
    .string()
    .min(11, 'Celular precisa ter mais de 11 caracteres.'),
});