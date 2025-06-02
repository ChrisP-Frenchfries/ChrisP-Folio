"use client";

import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="bg-white font-serif min-h-screen flex items-center justify-center">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full sm:w-10/12 md:w-8/12 text-center">
                        <h1 className="text-center text-black text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8">
                            404
                        </h1>
                        <Image
                            src="/images/404.svg"
                            alt="404 - Page non trouvée"
                            width={600} // Remplacez par la largeur réelle de votre image
                            height={400} // Remplacez par la hauteur réelle de votre image
                            className="h-[250px] sm:h-[350px] md:h-[400px] object-contain mx-auto"
                            aria-hidden="true"
                        />
                        <div className="mt-[50px]">
                            <h3 className="text-2xl text-black sm:text-3xl font-bold mb-4">
                                Look like you&apos;re lost
                            </h3>
                            <p className="mb-6 text-black sm:mb-5">
                                The page you are looking for is not available yet ?!
                            </p>
                            <Link href="/">
                                <Button
                                    variant="default"
                                    className="my-5 bg-black hover:bg-green-700"
                                >
                                    Go to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}