import Image from 'next/image';

export default function Home() {
  return (
    <main className="grid-container">
      {[...Array(100)].map((_, index) => (
        <Image
          key={index}
          src="/IMG_1688.gif"
          alt="niranth"
          width={100}
          height={133.25}
        />
      ))}
    </main>
  );
}
