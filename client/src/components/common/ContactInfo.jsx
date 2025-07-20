import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: Phone,
          title: "Call Support",
          detail: "+91 98765 43210",
          color: "text-orange-600",
        },
        {
          icon: Mail,
          title: "Email Us",
          detail: "support@Shramik.com",
          color: "text-blue-600",
        },
        {
          icon: MapPin,
          title: "Visit Office",
          detail: "Mumbai, Maharashtra",
          color: "text-green-600",
        },
      ].map((contact, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <contact.icon className={`h-8 w-8 mx-auto mb-4 ${contact.color}`} />
          <p className="font-bold text-base text-gray-800 mb-2">
            {contact.title}
          </p>
          <p className="text-sm text-gray-600">{contact.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
