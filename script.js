function calculatebill() {
    var item1 = parseFloat(document.getElementById('item1').value) || 0;
    var item2 = parseFloat(document.getElementById('item2').value) || 0;
    var item3 = parseFloat(document.getElementById('item3').value) || 0;
    var item4 = parseFloat(document.getElementById('item4').value) || 0;
    var sum = item1 + item2 + item3 + item4;

    document.getElementById('price1').textContent = item1;
    document.getElementById('price2').textContent = item2;
    document.getElementById('price3').textContent = item3;
    document.getElementById('price4').textContent = item4;
    document.getElementById('total').textContent = sum;
}
