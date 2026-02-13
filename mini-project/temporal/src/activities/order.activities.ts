import axios from "axios";

/**
 * 🔹 Hasura Configuration
 */
const HASURA_URL = "http://localhost:8080/v1/graphql";
const HASURA_ADMIN_SECRET = "myadminsecret"; // must match docker-compose

const hasuraClient = axios.create({
  baseURL: HASURA_URL,
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  },
});

/**
 * 🔹 Create Order
 */
  export async function createOrder(
  orderId: string,
  productId: string,
  amount: number
) {
  console.log(" Creating order via Hasura...");

  try {
    const response = await axios.post(
      HASURA_URL,
      {
        query: `
          mutation CreateOrder($id: String!, $product_id: String!, $amount: numeric!, $status: String!) {
            insert_orders_one(object: {
              id: $id,
              product_id: $product_id,
              amount: $amount,
              status: $status
            }) {
              id
            }
          }
        `,
        variables: {
          id: orderId,
          product_id: productId,
          amount: amount,
          status: "CREATED",
        },
      },
      {
        headers: {
          "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
        },
      }
    );

    console.log(" Full Hasura Response:", JSON.stringify(response.data, null, 2));

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    console.log(" Order inserted successfully");

  } catch (error: any) {
    console.error(" GraphQL Error:", error.response?.data || error.message);
    throw error;
  }
}


/**
 * 🔹 Update Order Status
 */
export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  console.log(` Updating order ${orderId} → ${status}`);

  try {
    const response = await hasuraClient.post("", {
      query: `
        mutation UpdateOrder($id: String!, $status: String!) {
          update_orders_by_pk(
            pk_columns: { id: $id },
            _set: { status: $status }
          ) {
            id
            status
          }
        }
      `,
      variables: {
        id: orderId,
        status: status,
      },
    });

    console.log(" Status updated:", response.data.data.update_orders_by_pk);
  } catch (error: any) {
    console.error(" Error updating order:", error.response?.data || error.message);
    throw error;
  }
}

/**
 * 🔹 Inventory
 */
export async function reserveInventory(productId: string) {
  console.log(` Reserving inventory for ${productId}`);
}

export async function releaseInventory(productId: string) {
  console.log(`↩ Releasing inventory for ${productId}`);
}

/**
 * 🔹 Payment
 */
export async function processPayment(amount: number) {
  console.log(` Processing payment of ${amount}`);

  // simulate random failure
  if (Math.random() < 0.5) {
    console.log(" Payment failed");
    throw new Error("Payment failed");
  }

  console.log(" Payment successful");
}

/**
 * 🔹 Notification
 */
export async function sendNotification(message: string) {
  console.log(" Sending notification:", message);
}
