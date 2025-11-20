interface SinglePerkImageProps {
  src: string;
}

export default function SinglePerkImage({ src }: SinglePerkImageProps) {
  return (
    <div className="mx-auto max-w-130">
      <img src={src} alt={`${src} logo`} />
    </div>
  );
}
