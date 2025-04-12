import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const judges = [
    { 
      name: "Kartik Mathur", 
      image: "https://devcation-2025.vercel.app/Kartik.jpeg",
      linkedin: "https://www.linkedin.com/in/kartik-mathur/"
    },
    { 
      name: "Vani Chitkara", 
      image: "https://devcation-2025.vercel.app/vani.jpeg",
      linkedin: "https://www.linkedin.com/in/vani-chitkara/"
    },
    { 
      name: "Aarnav Jindal", 
      image: "https://devcation-2025.vercel.app/aarnav.jpg",
      linkedin: "https://www.linkedin.com/in/aarnavjindal/"
    },
  ];

const mentors = [
  {
    name: "Radhika Bansal",
    image: "https://devcation-2025.vercel.app/mentors/RadhikaBansal_Devcation.jpeg",
    linkedin: "https://www.linkedin.com/in/radhika403/"
  },
  {
    name: "Sanidhya Goel",
    image: "https://devcation-2025.vercel.app/mentors/SanidhyaGoel.jpeg",
    linkedin: "https://www.linkedin.com/in/sanidhyagoel18/"
  },
  {
    name: "Tejaswi Tyagi",
    image: "https://devcation-2025.vercel.app/mentors/TejaswiTyagi_Mentor.jpg",
    linkedin: "https://www.linkedin.com/in/tejaswi-tyagi/"
  },
  {
    name: "Akanksha Jha",
    image: "https://devcation-2025.vercel.app/mentors/AkankshaJha_Mentor.jpg",
    linkedin: "https://www.linkedin.com/in/akanksha-jha-8609a422a"
  },
  {
    name: "Vikranth Udandarao",
    image: "https://devcation-2025.vercel.app/mentors/VikranthUdandarao_Mentor.jpg",
    linkedin: "https://www.linkedin.com/in/vikranth-udandarao/"
  },
  {
    name: "Rudra Pratap Dash",
    image: "https://devcation-2025.vercel.app/mentors/RudraPratapDash.jpg",
    linkedin: "https://www.linkedin.com/in/rudra-pratap-dash-b2ab16267/"
  },
  {
    name: "Aishvi Guleria",
    image: "https://devcation-2025.vercel.app/mentors/Aishvi.png",
    linkedin: "https://www.linkedin.com/in/aishvi-guleria-09a04222b"
  },
  {
    name: "Pratham Batra",
    image: "https://devcation-2025.vercel.app/mentors/PrathamBatra_Mentor.jpeg",
    linkedin: "https://www.linkedin.com/in/pratham1908/"
  },
  {
    name: "Teeksha Harish",
    image: "https://devcation-2025.vercel.app/mentors/TeekshaHarish_Mentor.jpeg",
    linkedin: "https://www.linkedin.com/in/teeksha-harish-5895a0234/"
  },
  {
    name: "Dhruv Bakshi",
    image: "https://devcation-2025.vercel.app/mentors/DhruvBakshi_Mentor.jpg",
    linkedin: "https://www.linkedin.com/in/dhruvbakshiwork"
  },
  {
    name: "Suhani Nagpal",
    image: "https://devcation-2025.vercel.app/mentors/SuhaniNagpal_Mentor.jpeg",
    linkedin: "https://www.linkedin.com/in/suhani-nagpal072/"
  },
  {
    name: "Tanmay Arora",
    image: "https://devcation-2025.vercel.app/mentors/TanmayArora.jpg",
    linkedin: "https://www.linkedin.com/in/tanmaycode1/"
  },
  {
    name: "Aditya Girdhar",
    image: "https://devcation-2025.vercel.app/mentors/Aditya.png",
    linkedin: "https://www.linkedin.com/in/adityagirdhar"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 bg-muted/50"> {/* Reduced padding */}
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Judges Section */}
        <div className="mb-16"> {/* Reduced margin */}
          <div className="text-center mb-12"> {/* Reduced margin */}
            <h2 className="text-4xl font-bold mb-3">Judges</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto"></div>
          </div>

          {/* Removed flex centering, added max-w-max */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto max-w-max"> {/* Adjusted lg columns back, added max-w-max for centering */}
            {judges.map((judge, index) => (
              /* Removed max-w-[...] sm:max-w-none */
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full w-48"> 
                <div className="relative w-full pt-[100%]"> {/* Consistent square aspect ratio */}
                  <Image
                    src={judge.image}
                    alt={judge.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="flex flex-row items-center justify-between p-2 bg-primary/5"> {/* Adjusted padding */}
                  <CardTitle className="text-sm font-medium">{judge.name}</CardTitle> {/* Adjusted font size/weight */}
                  <a
                    href={judge.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div>
          <div className="text-center mb-12"> {/* Reduced margin */}
            <h2 className="text-4xl font-bold mb-3">Mentors</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> {/* Reduced gap, added md breakpoint */}
            {mentors.map((mentor, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative w-full pt-[100%]"> {/* Changed aspect ratio to square */}
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="flex flex-row items-center justify-between p-2 bg-primary/5"> {/* Adjusted padding */}
                  <CardTitle className="text-sm font-medium">{mentor.name}</CardTitle> {/* Reduced font size/weight */}
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}