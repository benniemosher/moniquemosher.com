// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    console.log(`event ${JSON.stringify(event)}`)
    // const subject = event.queryStringParameters.name || 'World'
    // console.log(`event body: ${JSON.stringify(event.body)}`)

    // parse = JSON.parse(event.body)
    // console.log(`parse payload ${parse.payload}`)
    // console.log(event)
    // let download_urls = []

    // TODO: Change to env variable
    // if (event.headers.authorization == "MvAe8ECXQBCW1eICf0QKDw") {
      // console.log(event.body)
      // let payload = event.body.payload
      // let title = payload.topic

      // payload.recording_files.forEach((file) => {
      //   download_urls.push(file.download_url)
      // })

      // console.log(JSON.stringify(download_urls, null, 2))
    // }

    return {
      statusCode: 200,
      body: JSON.stringify({'message': 'hello world'})
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
