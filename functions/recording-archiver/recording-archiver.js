// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    // console.log(event)

    // TODO: Change to env variable
    // if (event.headers.authorization == "MvAe8ECXQBCW1eICf0QKDw") {
      console.log(event.body)
    // }

    return {
      statusCode: 200,
      body: JSON.stringify(event),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
