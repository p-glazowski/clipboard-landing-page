interface LogoProps {
  src: string;
}

export default function Logo({ src }: LogoProps) {
  return (
    <div className="w-40">
      <img src={src} alt={`${src} logo`} />
    </div>
  );
}
