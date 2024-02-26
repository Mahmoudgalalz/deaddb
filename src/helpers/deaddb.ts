import { PathLike } from 'fs';
import { JSONDB } from './core';

export function connectJson<TData>(path: PathLike) {
  const db = new JSONDB<TData>(path);
  return db;
}