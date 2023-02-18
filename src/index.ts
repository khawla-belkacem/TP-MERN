import express, {
  NextFunction,
  Request,
  Response,
} from "express";
const app = express();

const verif = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const op = req.query.op;
  const a = req.query.n1;
  const b = req.query.n2;

  var nb1: number = +a;
  var nb2: number = +b;

  if (
    !Number.isNaN(nb1) &&
    !Number.isNaN(nb2)
  ) {
    if (
      op === "add" ||
      op === "min" ||
      op === "mult" ||
      op === "div"
    )
      next();
    else {
      res.send(
        "Error: you must choose add or min or mult ou div"
      );
    }
  } else {
    res.send(
      "Error: a ou b not number"
    );
  }
};

const calcul = (
  req: Request,
  res: Response,
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
        `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${nb1+nb2}`
      );
      break;
    case "min":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${nb1-nb2}`
      );  
    break;
    case "mult":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${nb1*nb2}`
      ); 
    break;
    case "div":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${operation} de ${a} et ${b} est egale a ${nb1/nb2}`
      );   
    break;
      default:
        break;
      }
    
};

app.get("/calcul",verif,calcul);


app.listen(8080, () => {
  console.log(
    "Server listening on port 8000"
  );
});
