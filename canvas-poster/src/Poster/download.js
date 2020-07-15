import QRCode from "qrcode";

function downloadBlob(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";

    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject(new Error("Download failed."));
    };
    xhr.send();
  });
}
export function downloadFile(url, fileName = "") {
  return downloadBlob(url, fileName)
    .then((resp) => {
      if (resp.blob) {
        return resp.blob();
      }
      return new Blob([resp]);
    })
    .then((blob) => {
      if ("msSaveOrOpenBlob" in navigator) {
        window.navigator.msSaveOrOpenBlob(blob, fileName);
      } else {
        const obj = URL.createObjectURL(blob);
        downloadURL(obj, fileName);
        URL.revokeObjectURL(obj);
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function downloadURL(url, name = "") {
  const link = document.createElement("a");
  link.download = name;
  link.href = url;
  if ("download" in document.createElement("a")) {
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // 对不支持download进行兼容
    click(link, (link.target = "_blank"));
  }
}
// clone https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    let evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null
    );
    node.dispatchEvent(evt);
  }
}

let opts = {
  errorCorrectionLevel: "H",
  type: "image/jpeg",
  quality: 0.3,
  margin: 5,
  // color: {
  //   dark: "#010599FF",
  //   light: "#FFBF60FF"
  // }
};

export function GetQrCodeImages(link) {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(link, opts, (err, url) => {
      if (err) throw err;
      resolve(url);
    });
  });
}
