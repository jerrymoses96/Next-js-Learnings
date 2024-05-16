"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleback = () => {
    router.back();
  };
  const handlenavigate = () => {
    router.push("products");
  };
  return (
    <div>
      <p>hello world</p>
      <Link href={"/products"}>navigate to products page</Link>
      <p className="text-2xl">alternative way of navigating using userouter</p>
      <button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={handlenavigate}
      >
        Go to products
      </button>
      <button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={handleback}
      >
        back
      </button>
    </div>
  );
}
