type CardProps = {
  title: string;
  text: string;
};

export default function Card({ title, text }: CardProps) {
  return (
    <div className="bg-purple-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h2>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}
