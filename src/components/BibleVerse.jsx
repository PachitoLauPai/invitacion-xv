const BibleVerse = ({ verse, reference }) => {
  return (
    <section className="relative h-48 w-full">
      {/* Imagen de fondo - reemplazar */}
      <div className="absolute inset-0 bg-[url('/src/assets/images/bible-mobile.jpeg')] bg-cover bg-center opacity-80"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-40">
        <blockquote className="text-white italic text-sm px-4 mb-2">
          "{verse}"
        </blockquote>
        <p className="text-cement-green font-serif text-xs">{reference}</p>
      </div>
    </section>
  )
}

export default BibleVerse