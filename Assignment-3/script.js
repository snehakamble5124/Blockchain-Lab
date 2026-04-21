let account;

// Connect MetaMask
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });

      account = accounts[0];
      document.getElementById("account").innerText =
        "Account: " + account;

    } catch (error) {
      console.log(error);
    }
  } else {
    alert("MetaMask not installed!");
  }
}

// Send Transaction
async function sendTransaction() {
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  if (!to || !amount) {
    alert("Fill all fields");
    return;
  }

  try {
    const tx = await ethereum.request({
      method: "eth_sendTransaction",
      params: [{
        from: account,
        to: to,
        value: (parseFloat(amount) * 1e18).toString(16)
      }]
    });

    document.getElementById("status").innerText =
      "Transaction Sent! Hash: " + tx;

  } catch (error) {
    console.log(error);
    document.getElementById("status").innerText =
      "Transaction Failed!";
  }
}
