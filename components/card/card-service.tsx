const CardService = () => {
  return (
    <>
      <div className="h-full max-h-[300px] mb-4">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            loading="lazy"
            decoding="async"
            className="rounded w-full h-full object-cover bg-cover"
            sizes="100vw"
            style={{
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-start p-6 gap-2">
            <div className="bg-white rounded-full inline px-3 py-1">
              <h3 className="text-sm font-semibold">HairCut</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full max-h-[300px] mb-4">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src="https://asset.kompas.com/data/photo/buku/65b1f4ddacfdc.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="rounded w-full h-full object-cover bg-cover"
            sizes="100vw"
            style={{
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-start p-6 gap-2">
            <div className="bg-white rounded-full inline px-3 py-1">
              <h3 className="text-sm font-semibold">Manicure and Pedicure</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full max-h-[300px] mb-4">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            loading="lazy"
            decoding="async"
            className="rounded w-full h-full object-cover bg-cover"
            sizes="100vw"
            style={{
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-start p-6 gap-2">
            <div className="bg-white rounded-full inline px-3 py-1">
              <h3 className="text-sm font-semibold">Facial Treatment</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardService;
