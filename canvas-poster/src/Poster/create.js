import {
  GetQrCodeImages,
  createHiDPICanvas,
  drawerImg,
  drawerTxt,
} from "./util";
import BgPic from "./skin-1.png";

export async function DrawQRPoster(url, width, height) {
  const imgWidth = 210;
  const posY = 420;

  const canvas = createHiDPICanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false; //获取设备像素比

  // 750 x 1094
  const gap = 20;
  await drawerImg(ctx, BgPic, gap, gap, width - gap * 2, height - gap * 2);

  const qrCodeImg = await GetQrCodeImages(url);

  await drawerImg(
    ctx,
    qrCodeImg,
    (width - imgWidth) / 2,
    154,
    imgWidth,
    imgWidth
  );

  drawerTxt(ctx, {
    text: "xxx-xxx",
    fontSize: 16,
    color: "#f7f7f7",
    textAlign: "center",
    top: posY + 20,
    left: width / 2,
    width: 200,
    lineNum: 2,
    lineHeight: 20,
    baseLine: "middle",
  });

  const imageBase64 = canvas.toDataURL();
  return imageBase64;
}
