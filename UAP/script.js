function calculateTotal() {
    const itemCode = document.getElementById('itemCode').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    let total = 0;
  
    switch (itemCode) {
      case '001':
        total = quantity * 10000; 
        break;
      case '002':
        total = quantity * 20000; 
        break;
      case '003':
        total = quantity * 30000; 
        break;
      default:
        total = 0;
    }
  
    if (total > 0) {
      const message = `Total yang harus dibayarkan: Rp ${total.toLocaleString()}`;
      window.alert(message);
  
      const uangBayar = parseFloat(prompt('Masukkan uang user:', ''));
      if (!isNaN(uangBayar)) {
        const kembalian = uangBayar - total;
        if (kembalian >= 0) {
          window.alert(`Uang yang dibayarkan: Rp ${uangBayar.toLocaleString()}\nKembalian: Rp ${kembalian.toLocaleString()}`);
        } 
    }
}
}



