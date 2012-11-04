function syncTime() {
  // Set up our time object, synced by the HTTP DATE header
  // Fetch the page over JS to get just the headers
  //console.log("syncing time")
  var r = new XMLHttpRequest();
  var start = (new Date).getTime();

  r.open('GET', document.location+"time", false);
  r.onreadystatechange = function(){
    if (r.readyState != 4) {
      return;
    }
    var latency = (new Date).getTime() - start;
           /*
    var timestring = r.getResponseHeader("DATE");

    // double date header fix
    timestring = timestring.substring(0,timestring.indexOf("GMT")+3);

    // Set the time to the **slightly old** date sent from the
    // server, then adjust it to a good estimate of what the
    // server time is **right now**.
    var systemtime = new Date(timestring);
    systemtime.setMilliseconds(systemtime.getMilliseconds() + (latency / 2))
                                  */

    var calc_offset = parseInt(r.response) + (latency/2) - new Date().getTime();

    //var calc_offset = systemtime.getTime() - new Date().getTime() + 500; // -500 is baseline from client to server on same machine

    //console.log("S:"+timestring);

    //console.log("server_offset:"+(calc_offset+200)+" len:"+last_server_offsets.length);

    last_server_offsets.push(calc_offset)

    while(last_server_offsets.length > 100) {
      last_server_offsets.shift();
    }
  };
  r.send(null);
}