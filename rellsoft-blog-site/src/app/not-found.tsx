import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <Link href="/" className=" text-white px-4 py-2 rounded">
        Go back home!
      </Link>
    </main>
  );
}
