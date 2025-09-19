import Card from "./Card";

export default function ProjetosPage() {
  let txt1 =
    "Integração de óculos Vuzix com sistema de visão computacional YOLO para detecção de objetos em tempo real.";
  let txt2 =
    "Dashboard interativa para monitoramento de desempenho de modelos de IA aplicados em AR.";
  let txt3 =
    "Experiência imersiva em realidade aumentada para treinamento industrial usando Vuzix.";

  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col">
      {/* MAIN */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">Projetos</h1>
        <p className="text-gray-300 mb-8">
          Aqui estão alguns projetos desenvolvidos no Gamelab com foco em
          realidade aumentada, visão computacional e inteligência artificial.
        </p>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Projeto 1" text={txt1} />
          <Card title="Projeto 2" text={txt2} />
          <Card title="Projeto 3" text={txt3} />
        </div>
      </main>
    </div>
  );
}
