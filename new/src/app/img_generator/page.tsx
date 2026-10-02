"use client";

export default function Certificates() {
  return (
    <>
      <section className="h-full w-full flex items-center justify-center min-h-screen">
        <div className="mx-auto w-full h-full flex flex-col items-center justify-center text-center">
          <h1 className="max-w-100  text-2xl font-bold mb-8 text-gray-100">
            Image generator is currently under development. Please check back
            later for updates!
          </h1>
          <div className="w-full bg-red-500 flex text-lg items-center justify-center p-2 gap-4 whitespace-nowrap">
            <p className="text-white font-semibold transform line-animation">
                We apologize for the inconvenience. Our team is working hard to
                bring this feature back online as soon as possible. Thank you! 
            </p>
            <p className="text-white font-semibold transform line-animation delay-50">
                We apologize for the inconvenience. Our team is working hard to
                bring this feature back online as soon as possible. Thank you! 
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
