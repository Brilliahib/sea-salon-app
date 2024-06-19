import Image from "next/image";

const CardService = () => {
  const services = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HairCut",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Manicure and Pedicure",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Facial Treatment",
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <div key={index} className="h-full max-h-[260px] mb-4">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={service.imageUrl}
              alt={`Service ${service.title}`}
              layout="responsive" // Set layout to responsive
              width={2070} // Width of the original image
              height={1155} // Height of the original image
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-start p-6 gap-2">
              <div className="bg-white rounded-full inline px-3 py-1">
                <h3 className="text-sm font-semibold">{service.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardService;
