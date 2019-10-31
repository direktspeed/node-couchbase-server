// accepts cas and expir


function parseArgs() {
  // if option function

}


function set(id,value,options,cb) {
  // if option function
  const metadata = {
    "meta": {
      id,
      "rev": "1-1526338d1bbb00000000000002000000",
      "expiration": 0,
      "flags": 33554432,
      "type": "json"
    },
    "xattrs": {}
  }

  fs.writeSync(key, { value, metadata },cb)
}
