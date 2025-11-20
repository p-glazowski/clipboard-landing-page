interface ImageProps {
  src: string;
}

export default function ArticleImage({ src }: ImageProps) {
  return (
    <div>
      <img src={src} alt="Logo" />
    </div>
  );
}
