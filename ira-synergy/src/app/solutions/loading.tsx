export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[100px] lg:pt-[130px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <div className="h-6 w-48 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-14 w-96 max-w-full bg-gray-200 rounded-lg mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 w-2/3 bg-gray-100 rounded mx-auto animate-pulse"></div>
        </div>

        <div className="flex flex-col gap-0">
          {[1, 2, 3].map((i) => (
            <section key={i} className={`py-24 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                  <div className="w-full lg:w-5/12">
                    <div className="aspect-[4/5] rounded-[2rem] bg-gray-200 animate-pulse"></div>
                  </div>
                  <div className="w-full lg:w-7/12 space-y-4">
                    <div className="h-6 w-28 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-12 w-3/4 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-20 w-full bg-gray-100 rounded animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="h-6 bg-gray-100 rounded animate-pulse"></div>
                      ))}
                    </div>
                    <div className="h-12 w-48 bg-gray-200 rounded-xl animate-pulse mt-8"></div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
