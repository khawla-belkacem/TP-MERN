import express, { Request, Response, NextFunction } from "express";
export const Handler = (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  const operation = req.query.op;
  const a = req.query.n1;
  const b = req.query.n2;
  var nb1: number = +a;
  var nb2: number = +b;

  switch (operation) {
    case "add":
      res
        .status(200)
        .send(
          `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${
            nb1 + nb2
          }`
        );
      break;
    case "min":
      res
        .status(200)
        .send(
          `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${
            nb1 - nb2
          }`
        );
      break;
    case "mult":
      res
        .status(200)
        .send(
          `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${
            nb1 * nb2
          }`
        );
      break;
    case "div":
      res
        .status(200)
        .send(
          `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${
            nb1 / nb2
          }`
        );
      break;
    default:response.status(404).send('erreur')
          break;
  }
};
