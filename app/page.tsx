export default function Home() {
  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.05] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 py-8 text-center">
        <h1 className="text-4xl sm:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Imtiyaz Sayyid's Portfolio
        </h1>
        <p className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          We Are In Development, Stay Tuned!
        </p>
      </div>
    </div>
  );
}
