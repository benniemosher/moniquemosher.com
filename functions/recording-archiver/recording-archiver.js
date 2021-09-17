// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    // console.log(event)

    // TODO: Change to env variable
    if (event.headers.authorization == "MvAe8ECXQBCW1eICf0QKDw") {
      console.log(event.body)
      let payload = event.body.payload
      let title = payload.topic
      let download_files = []

      payload.recording_files.forEach((file) => {
        download_files.push(file.download_url)
      })

      console.log(`download files: ${JSON.stringify(download_files) }`)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({'message':'hello world'})
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
