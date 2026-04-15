import { Amenities } from "@/components/Amenities";
import { ContactForm } from "@/components/ContactForm";
import { DexterPay } from "@/components/DexterPay";
import { GoogleMap } from "@/components/GoogleMap";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ScheduleForm } from "@/components/ScheduleForm";
import { Services } from "@/components/Services";
import { SocialFeeds } from "@/components/SocialFeeds";
import { ToarminasCrossPromo } from "@/components/ToarminasCrossPromo";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <DexterPay />
      <Amenities />
      <GoogleReviews />
      <ToarminasCrossPromo />
      <ScheduleForm />
      <ContactForm />
      <SocialFeeds />
      <GoogleMap />
    </>
  );
}
