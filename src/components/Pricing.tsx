import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '99',
    features: [
      'Chatbot básico',
      'Soporte 8/5',
      'Hasta 1000 conversaciones/mes',
      'Personalización básica'
    ]
  },
  {
    name: 'Profesional',
    price: '299',
    features: [
      'Chatbot avanzado con IA',
      'Soporte 24/7',
      'Hasta 5000 conversaciones/mes',
      'Personalización completa',
      'Integración con CRM'
    ]
  },
  {
    name: 'Empresarial',
    price: '1499',
    features: [
      'Chatbot con IA avanzada',
      'Agente virtual personalizado',
      'Soporte prioritario 24/7',
      'Conversaciones ilimitadas',
      'Personalización total',
      'Integraciones premium',
      'API personalizada'
    ]
  }
];

const Pricing = () => {
  const handlePayment = async (planName: string, price: string) => {
    // Aquí se implementará la integración con Stripe
    console.log(`Processing payment for ${planName} plan: $${price}`);
  };

  return (
    <div id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Planes y Precios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-indigo-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePayment(plan.name, plan.price)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Comenzar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;