import ErrorsType from "./interfaces/errors-type";

const messages = (attributte: string): string => {
  const messages: Record<ErrorsType, string> = {
    isNotEmpty: "O campo não pode ser vazio",
    isEmail: "Email informado invalido",
    isString: "O valor não é um texto",
  };
  return messages[attributte];
};

export default messages;
