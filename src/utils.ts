import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://filxhpno:sze8GY-oZtkd5ppr_vbvLyMc47v9-xVn@flora.db.elephantsql.com/filxhpno");
    await client.connect();
    return client;
}