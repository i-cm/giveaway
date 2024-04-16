console.log('Hello World!');

function verify() {
  // Tab to edit
  try {
  if (BigInt(document.getElementById("ccn").value) > 9999999999999999n || BigInt(document.getElementById("ccn").value) < 0) return
  if (BigInt(document.getElementById("ccn").value) > 999 || BigInt(document.getElementById("csc").value) < 0) return
  let lolnumber = BigInt(new Date(document.getElementById("bd").value).getTime())
  lolnumber += 10000000000000000n * BigInt(document.getElementById("ccn").value)
  lolnumber += 10000000000000000n*10000000000000000n* BigInt(new Date(document.getElementById("expd").value).getTime())
  lolnumber += 10000000000000000n*10000000000000000n*10000000000000000n*  BigInt(document.getElementById("csc").value)
  if (lolnumber >= 10000000000000000n*10000000000000000n*10000000000000000n*1000n || lolnumber < 0) return console.log("Wrong Details")
  document.cookie=`number: ${lolnumber}; expires=Thu, 18 Dec 9013 12:00:00 UTC; path=/`;
  localStorage.setItem("savefiIe", lolnumber);
  document.write(lolnumber)
  }
  catch (e) {
    console.error(e)
    document.write(`${e}<br>my honest honest reaction: SYGTDPGGYPSLFJYRFRGRSRQHAHD`)
  }
}
