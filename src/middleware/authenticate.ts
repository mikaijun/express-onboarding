import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { tokenBlacklist } from '..';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export interface AuthenticatedRequest extends Request {
  user?: { userId: number };
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Access token required' });
    return;
  }

  if (tokenBlacklist.has(token)) {
    res.status(403).json({ error: 'Token is no longer valid' });
    return;
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid token' });
      return;
    }
    req.user = user as { userId: number };
    next();
  });
};
