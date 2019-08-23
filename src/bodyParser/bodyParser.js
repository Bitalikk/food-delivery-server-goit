module.exports = function(req) {
  return new Promise((res, rej) => {
    let body = [];

    req
      .on('error', err => {
        rej(err);
      })
      .on('data', chank => {
        body.push(chank);
      })
      .on('end', () => {
        const bufferingString = Buffer.concat(body).toString();
        const bodyObj = JSON.parse(bufferingString);
        res(bodyObj);
      });
  });
}