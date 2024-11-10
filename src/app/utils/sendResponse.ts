import { Response } from "express";

interface TResponnse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

const sendResponse = <T>(res: Response, jsonData: TResponnse<T>) => {
  const response: TResponnse<T> = {
    success: jsonData.success,
    status: jsonData.status,
    message: jsonData.message,
  };

  if (jsonData.data !== undefined) {
    response.data = jsonData.data;
  }
  res.status(jsonData.status).json(response);
};

export default sendResponse;
