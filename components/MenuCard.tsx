type MenuCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
};

export default function MenuCard({ title, description, price, image }: MenuCardProps) {
  return (
    <div className="bg-[#FFF5E1] rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition p-6 text-center">
      <img src={image} alt={title} className="mx-auto mb-4 rounded-lg w-40 h-40 object-cover"/>
      <h4 className="font-bold text-xl mb-2 text-[#4B2E2E]">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="font-bold">{price}</span>
    </div>
  );
}
