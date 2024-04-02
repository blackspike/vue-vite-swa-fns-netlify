import Mux from '@mux/mux-node'
const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET
});

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
}

export async function handler(event, context) {
  try {

    const asset = await mux.video.assets.create({
      input: [{ url: 'https://mux-video-test.netlify.app/animation.mp4' }],
      playback_policy: ['public'],
    });

    return {
      headers: CORS_HEADERS,
      statusCode: 200,
      body: JSON.stringify({ test: "name", asset }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}