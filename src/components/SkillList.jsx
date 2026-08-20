import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

function SkillList() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-slate-200 text-center sm:text-left">
        Mis Habilidades Tecnológicas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Recorrido de datos con .map() e id único como key */}
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            level={skill.level}
            isFavorite={skill.isFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillList;