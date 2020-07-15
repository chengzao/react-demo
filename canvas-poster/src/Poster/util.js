import QRCode from "qrcode";

var opts = {
  errorCorrectionLevel: "H",
  type: "image/jpeg",
  quality: 0.3,
  margin: 1,
  // color: {
  //   dark: "#010599FF",
  //   light: "#FFBF60FF"
  // }
};

export function GetQrCodeImages(link) {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(link, opts, function (err, url) {
      if (err) throw err;
      resolve(url);
    });
  });
}

const PIXEL_RATIO = (function () {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr =
      window.devicePixelRatio ||
      window.webkitDevicePixelRatio ||
      window.mozDevicePixelRatio ||
      1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

  return dpr / bsr;
})();

export const createHiDPICanvas = function (w, h, ratio) {
  if (!ratio) {
    ratio = PIXEL_RATIO;
  }
  var can = document.createElement("canvas");
  can.width = Math.round(w * ratio);
  can.height = Math.round(h * ratio);
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
};

export function loadImg(imgUrl) {
  return new Promise((resolve, reject) => {
    const imgEl = new Image();
    imgEl.crossOrigin = "Anonymous";
    imgEl.onload = function () {
      resolve(this);
    };
    imgEl.src = imgUrl;
  });
}

export function fetchImage(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      let url = URL.createObjectURL(this.response);
      let img = new Image();
      img.onload = function () {
        resolve(this);
        console.log(this);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    };
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.send();
  });
}

export async function drawerImage(ctx, imgUrl, x, y, w, h) {
  ctx.save();
  ctx.drawImage(imgUrl, x, y, w, h);
  ctx.restore();
}

export async function drawerImg(ctx, imgUrl, x, y, w, h) {
  ctx.save();
  let img = await loadImg(imgUrl);
  ctx.drawImage(img, x, y, w, h);
  ctx.restore();
}

export function drawerTxt(ctx, option) {
  var {
    text,
    width,
    lineNum,
    lineHeight,
    left,
    top,
    fontSize,
    fontFamily,
    fontWeight,
    opacity,
    textAlign,
    baseLine,
    color,
  } = option;

  ctx.save();
  ctx.font = "normal "
    .concat(fontWeight || "normal", " ")
    .concat(fontSize || 14, "px ")
    .concat(fontFamily || "Arial");

  ctx.globalAlpha = opacity || 1;
  ctx.textAlign = textAlign || "center";
  ctx.textBaseline = baseLine || "middle";
  ctx.fillStyle = color || "white";

  var textWidth = ctx.measureText(text).width;
  var textArr = [];

  if (textWidth > width) {
    var fillText = "";
    var line = 1;
    for (var i = 0; i <= text.length - 1; i += 1) {
      // 将文字转为数组
      fillText += text[i];
      if (ctx.measureText(fillText).width >= width) {
        if (line === lineNum) {
          if (i !== text.length - 1) {
            fillText = "".concat(
              fillText.substring(0, fillText.length - 1),
              "..."
            );
          }
        }

        if (line <= lineNum) {
          textArr.push(fillText);
        }
        fillText = "";
        line += 1;
      } else if (line <= lineNum) {
        if (i === text.length - 1) {
          textArr.push(fillText);
        }
      }
    }
    textWidth = width;
  } else {
    textArr.push(text);
  }

  textArr.forEach(function (item, index) {
    ctx.fillText(item, left, top + (lineHeight || fontSize) * index);
  });

  ctx.restore();
}
