import express, { Request, Response,NextFunction} from 'express'
const middleware = (req: Request,res: Response, next:NextFunction) => {

    const operation = req.query.op;
    const a = req.query.n1;
    const b = req.query.n2;
    var nb1: number = +a;
    var nb2: number = +b;

  
        if (operation === "mult" && a==0 ){
            res.status(400).send("erreur")
        }
          next();
    };

  export {middleware as ValidateParams}
