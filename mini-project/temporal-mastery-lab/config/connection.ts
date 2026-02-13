import { Connection } from '@temporalio/client';

export async function getConnection() {
  return await Connection.connect({
    address: 'localhost:7233',
  });
}
