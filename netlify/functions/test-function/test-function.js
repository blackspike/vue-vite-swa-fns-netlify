import Mux from '@mux/mux-node'
const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET
});

export async function handler(event, context) {
  try {

    const playbackId = event.queryStringParameters.playbackId || 'prvYht02SQG8GrSxYy6na005oZJE3YuAccnzKlXWEM1bw'

    let baseOptions = {
      keyId: process.env.muxSigningKeyId,
      keySecret: process.env.muxSigningKeySecret,
      expiration: '2d', // E.g 60, "2 days", "10h", "7d", numeric value interpreted as seconds
    }

    const token = await mux.jwt.signPlaybackId(playbackId, { ...baseOptions, type: 'video' })

    return {
      statusCode: 200,
      body: JSON.stringify({ test: "name", token }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}