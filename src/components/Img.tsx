import type { ImgHTMLAttributes } from 'react';

type ImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /**
   * Base path without extension (e.g. "/images/hero-tower").
   * Tries `<src>.png` first; falls back to `<src>.svg` if the PNG is
   * missing, so placeholder SVGs keep rendering until real photos are
   * uploaded.
   */
  src: string;
};

export default function Img({ src, alt = '', onError, ...rest }: ImgProps) {
  return (
    <img
      {...rest}
      alt={alt}
      src={`${src}.png`}
      onError={(e) => {
        const img = e.currentTarget;
        if (!img.dataset.triedSvg) {
          img.dataset.triedSvg = '1';
          img.src = `${src}.svg`;
        }
        onError?.(e);
      }}
    />
  );
}
