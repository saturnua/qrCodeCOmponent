(function () {
  const qr = new QRious({
    element: document.getElementById("qr-code"),
    value: 'https://www.frontendmentor.io?ref=challenge'
  });
  //qr.background = '#0087FF';
  qr.backgroundAlpha = 0;
  qr.level = 'H';
  qr.size = 200;
  qr.foreground = '#FFFFFF';
})();
