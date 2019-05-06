module.exports.handler = function(event, context, callback) {
  const eventJson = JSON.stringify(event, null, 2);
  console.log("event:" + eventJson);

  callback(null,  {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: eventJson,
  });
}
