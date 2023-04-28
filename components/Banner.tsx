function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 font-bold justify-between px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">The Calcutta Bong</h1>
            <h2 className="mt-5 md:mt-0">Welcome to{" "}
            <span className="underline decoration-4 decoration-[#F7AB0A]">
                our celebration{" "}
            </span>
            of Bengal's rich art, song, and culture!
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Journey Through the Cultural Wonders of Bengal's Art, Song, and Dance
        </p>
    </div>
  )
}

export default Banner