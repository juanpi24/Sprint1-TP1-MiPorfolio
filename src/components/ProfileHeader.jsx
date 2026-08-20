function ProfileHeader({ name, role, bio, onContactClick }) {
  return (
    <header className="flex flex-col items-center text-center py-12 px-4 max-w-2xl mx-auto">
      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary mb-4 text-3xl font-bold">
        {name.charAt(0)}
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        {name}
      </h1>
      <p className="text-primary font-semibold text-lg mb-4">{role}</p>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
        {bio}
      </p>
      <button
        type="button"
        onClick={onContactClick}
        className="bg-primary hover:bg-primary-hover text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-lg"
      >
        Contactar / Saludar
      </button>
    </header>
  );
}

export default ProfileHeader;