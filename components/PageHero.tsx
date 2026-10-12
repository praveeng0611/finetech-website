export default function PageHero({
  image,
  title,
  subtitle,
}: {
  image: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative h-[36vh] min-h-[260px] w-full overflow-hidden bg-[#0c1117]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40" />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-8xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">{title}</h1>
          {subtitle && <p className="text-base sm:text-lg text-white/85 max-w-2xl">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
