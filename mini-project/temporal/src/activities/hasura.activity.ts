import axios from 'axios';

const HASURA_URL = 'http://localhost:8080/v1/graphql';
const ADMIN_SECRET = 'myadminsecret';

async function hasuraRequest(query: string, variables: any) {
  const response = await axios.post(
    HASURA_URL,
    { query, variables },
    {
      headers: {
        'x-hasura-admin-secret': ADMIN_SECRET,
      },
    }
  );

  return response.data;
}

export async function createOrder(
  orderId: string,
  productId: string,
  amount: number
) {
  console.log('Creating order via Hasura...');

  const mutation = `
    mutation($id: String!, $product_id: String!, $amount: Int!) {
      insert_orders_one(object: {
        id: $id,
        product_id: $product_id,
        amount: $amount,
        status: "CREATED"
      }) {
        id
      }
    }
  `;

  await hasuraRequest(mutation, {
    id: orderId,
    product_id: productId,
    amount,
  });
}

export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  const mutation = `
    mutation($id: String!, $status: String!) {
      update_orders_by_pk(
        pk_columns: { id: $id },
        _set: { status: $status }
      ) {
        id
      }
    }
  `;

  await hasuraRequest(mutation, {
    id: orderId,
    status,
  });
}
