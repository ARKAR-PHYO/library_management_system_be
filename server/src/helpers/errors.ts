export const CreateError = (status: any, message: string, data?: any) => {
  const error: any = new Error();

  error.statusCode = status;
  error.message = message;
  error.data = data;

  return error;
};
