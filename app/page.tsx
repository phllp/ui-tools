export default function Home() {
  return (
    <div className="bg-neutral-900 flex flex-col min-h-screen">
      {/* MAIN */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Bem-vindo ao Gamelab
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mb-6">
          Explorando o futuro da realidade aumentada com VUZIX e inteligência
          artificial YOLO. Essa é apenas uma prova de conceito — mas cheia de
          possibilidades.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition cursor-pointer">
          Saiba Mais
        </button>
      </main>
    </div>
  );
}
