import Mux from '@mux/mux-node'

export async function handler(event, context) {
  try {


    return {
      statusCode: 200,
      body: JSON.stringify({ test: "name" }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}