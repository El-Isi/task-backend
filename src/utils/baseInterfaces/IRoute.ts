import { Request, Response, NextFunction } from 'express';

type Handler = (req: Request, res: Response, next: NextFunction) => void;

interface IRoute {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  handler: Handler[];
}

export default IRoute;
