function SkillCard({ name, level, isFavorite }) {
  return (
    <article className="bg-surface p-5 rounded-xl border border-slate-800 shadow-md flex justify-between items-center hover:border-slate-700 transition-all">
      <div>
        <h3 className="font-semibold text-lg text-slate-100">{name}</h3>
        <span className="text-xs text-slate-400">Nivel: {level}</span>
      </div>
      {/* Condicional con && */}
      {isFavorite && (
        <span className="bg-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full border border-amber-500/30 font-medium">
          ★ Favorito
        </span>
      )}
    </article>
  );
}

export default SkillCard;