import satori from 'satori';
import fs from 'fs/promises';
import path from 'path';

export default async ({ req, res, log, error }) => {
  const fontSemibold = await fs.readFile(path.join(__dirname, '../fonts/Nunito-SemiBold.ttf'));
  const fontBold = await fs.readFile(path.join(__dirname, '../fonts/Nunito-Bold.ttf'));

  const svg = await satori(
    `<div style="color: black;">hello, world</div>`,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Nunito',
          data: fontSemibold,
          weight: 600,
          style: 'normal',
        },
        {
          name: 'Nunito',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
      ],
    },
  );

  return res.send(svg, 200, {
    'Content-Type': 'image/svg+xml',
  });
};
