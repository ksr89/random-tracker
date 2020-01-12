var users = {};

exports.track = function (req, res) {
  var userName = req.query.username;
  userName = userName.replace(/[^A-Z0-9]+/ig, "_");
  console.log('userName', userName)
  var timeStamp = Math.floor(Date.now() / 1000);

  if (userName in users) {
    if (timeStamp - users[userName].lastUpdatedAt > 30) {
      users[userName].lastUpdatedAt = timeStamp;
      users[userName].value = Math.floor(Math.random() * 10) + 1;
    }

    res.status(200).json({
      "lastUpdatedAt": users[userName].lastUpdatedAt,
      "value": users[userName].value
    })

  } else {
    users[userName] = {};
    users[userName].lastUpdatedAt = timeStamp;
    users[userName].value = Math.floor(Math.random() * 10) + 1;
    res.status(200).json({
      "lastUpdatedAt": users[userName].lastUpdatedAt,
      "value": users[userName].value
    })
  }
}
