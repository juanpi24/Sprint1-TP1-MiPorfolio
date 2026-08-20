import ProfileHeader from "./components/ProfileHeader";
import SkillList from "./components/SkillList";
import Footer from "./components/Footer";

function App() {
  const authorName = "Juan Pablo Millicay"; // Reemplaza con tu nombre

  // Handler fuera del JSX
  const handleContactClick = () => {
    alert(`¡Gracias por visitar mi perfil! Desarrollado por ${authorName}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main>
        <ProfileHeader
          name={authorName}
          role="Desarrollador Frontend & Entusiasta IA"
          bio="Construyendo soluciones web modernas y componentes reutilizables con React y Tailwind CSS."
          onContactClick={handleContactClick}
        />
        <SkillList />
      </main>
      <Footer authorName={authorName} />
    </div>
  );
}

export default App;