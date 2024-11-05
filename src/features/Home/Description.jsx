export default function Description() {
  return (
    <div className="relative mb-1 overflow-hidden rounded-full bg-blue-600 px-1 text-center md:mb-0 md:mr-5">
      <p className="text-sm font-bold md:text-base lg:text-lg">
        We help people access reliable healthcare information online, enabling
        them to make informed decisions for a healthier life.
      </p>
      {/* Pseudo-element for the folded paper effect */}
      <div className="clip-triangle absolute bottom-0 right-0 h-8 w-8 bg-red-600 shadow-md"></div>
    </div>
  );
}
