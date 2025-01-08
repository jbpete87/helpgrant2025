import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Home, DollarSign, GraduationCap, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-help-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The HELP You Need to Own Your First Home
              </h1>
              <p className="text-xl mb-8">
                Get up to $25,000 with the HELP Grant* to make your dream of homeownership a reality.
              </p>
              <Button className="bg-help-blue hover:bg-white hover:text-help-navy text-lg px-8 py-6">
                Apply Now
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/123c5ff6-cb24-4a6d-97b0-30f43ae7db0c.png"
                alt="HELP Grant Program"
                className="rounded-lg shadow-xl animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-help-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-help-navy">
            Program Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Up to $25,000 in Assistance",
                description: "Use towards down payment and closing costs.",
              },
              {
                icon: Home,
                title: "Simple Start",
                description: "Contribute just $500 of your own funds.",
              },
              {
                icon: Gift,
                title: "Gift Fund Flexibility",
                description: "Combine with cash gifts to lower your homebuying costs.",
              },
              {
                icon: GraduationCap,
                title: "Homebuyer Education",
                description: "Gain essential knowledge for confident homeownership.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-help-blue" />
                <h3 className="text-xl font-semibold mb-2 text-help-navy">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-help-navy">Meet Priya</h2>
            <p className="text-lg mb-8 text-gray-600">
              Single mom Priya dreamed of owning her first home. But between rent, daycare, and everyday expenses, saving enough for a down payment felt impossible—until she qualified for the HELP Grant. With $25,000 in assistance, Priya purchased a home in a great school district—giving her a place she could truly call her own and the chance to start building equity for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-help-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-help-navy">
              Take the First Step to Your First Home
            </h2>
            <p className="text-xl mb-12 text-gray-600">
              FUNDS ARE LIMITED! Contact us today to learn how the HELP Grant can help you!
            </p>
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-help-navy text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-4">
            *The Homebuyer Equity Leverage Partnership (HELP) program offers first-come, first-served forgivable grants of up to $25,000 in TX and NM, and up to $20,000 in other states where Cornerstone is registered to lend. Household income limits and a five-year home retention agreement apply. Contact loan officer for all requirements. Information as of 12/26/2024.
          </p>
          <p>© 2024 HELP Grant Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;