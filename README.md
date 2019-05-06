This is a demonstration for testing and development of a `serverless-step-functions` feature discussed [here](https://github.com/horike37/serverless-step-functions/pull/192#issuecomment-489705701).


Example requests (where `XXXXXXXXXXX` is the endpoint host from your deploy output). View the log output in CloudWatch Logs to view the differences between the event format between these two calls:

```
curl -X "POST" "https://XXXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/lambda" \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/json' \
     -d $'{
  "foo": "bar",
  "biz": "bang",
  "bool": true,
  "hax": 1337
}
```

```
curl -X "POST" "https://XXXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/stepfunction" \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/json' \
     -d $'{
  "foo": "bar",
  "biz": "bang",
  "bool": true,
  "hax": 1337
}
```
