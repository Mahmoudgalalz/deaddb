import { PathLike } from 'fs';
import fs from 'fs/promises';

export class JSONDB<TData> {
  private filePath: PathLike;

  constructor(file: PathLike) {
    this.filePath = file;
  }

  async read(): Promise<TData | null> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) as TData;
    } catch (error) {
      console.error('Error reading file:', error);
      return null;
    }
  }

  async update(updates: Partial<TData>): Promise<void> {
    try {
      const existingData = await this.read();
      if (existingData === null) {
        console.error('No data found to update');
        return;
      }
      const updatedData = { ...existingData, ...updates };
      await fs.writeFile(this.filePath, JSON.stringify(updatedData, null, 2));
    } catch (error) {
      console.error('Error updating file:', error);
    }
  }

  async delete(): Promise<void> {
    try {
      await fs.unlink(this.filePath);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }
}
