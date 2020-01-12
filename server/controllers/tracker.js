exports.track = function (req, res) {
  var userName = req.params.userName;
  var timeStamp = Math.floor(Date.now() / 1000);

  if (req.session.userName) {

    if (timeStamp - req.session.lastUpdatedAt > 30) {
      req.session.value = Math.floor(Math.random() * 10) + 1;
      req.session.lastUpdatedAt = timeStamp;
    }

    res.status(200).json({
      "lastUpdatedAt": req.session.lastUpdatedAt,
      "value": req.session.value
    })

  } else {
    req.session.userName = userName;
    req.session.lastUpdatedAt = timeStamp;
    req.session.value = Math.floor(Math.random() * 10) + 1;
    res.status(200).json({
      "lastUpdatedAt": req.session.lastUpdatedAt,
      "value": req.session.value
    })
  }
}
