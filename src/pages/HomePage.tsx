import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import ServicesNightList from "@/components/sections/features/ServicesNightList";
import PricingFramedSlider from "@/components/sections/pricing/PricingFramedSlider";
import MetricsPlusCount from "@/components/sections/metrics/MetricsPlusCount";
import TestimonialPhotoQuote from "@/components/sections/testimonial/TestimonialPhotoQuote";
import FaqPlusAccordion from "@/components/sections/faq/FaqPlusAccordion";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents" data-scene>
        <HeroArchPoster
          title="Gori House"
          script="Georgia"
          labelLeft="3-Star Hotel"
          labelRight="Central Gori"
          marquee={[
            "Warm Welcome",
            "Stalin Street",
            "From 68 ₾",
            "24/7 Front Desk"
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/white-pillow-bed_74190-3602.jpg?_wi=1"
          imageAlt="hotel room bed"
          cta={{
            text: "Explore Rooms",
            href: "#services"
          }}
        />
      </div>

      <div id="services" data-webild-section="ServicesNightList" data-webild-section-id="ServicesNightList-1" data-section="services" data-scene>
        <ServicesNightList
          items={[
            {
              title: "Standard Room",
              description: "Cozy room with free Wi-Fi, air conditioning, and street views from 68 ₾.",
              imageSrc: "https://img.b2bpic.net/free-photo/white-pillow-bed_74190-3602.jpg?_wi=2",
              imageAlt: "hotel room bed"
            },
            {
              title: "Deluxe Double",
              description: "Spacious double room with climate control and city skyline views from 85 ₾.",
              imageSrc: "https://img.b2bpic.net/free-photo/interior-design-bedroom-with-modern-decoration_181624-46706.jpg",
              imageAlt: "modern hotel bedroom with bathroom view"
            },
            {
              title: "Family Suite",
              description: "Generous living area designed for families traveling together from 120 ₾.",
              imageSrc: "https://img.b2bpic.net/free-photo/family-sitting-bed_1157-16996.jpg",
              imageAlt: "family relaxing in hotel room"
            },
            {
              title: "24/7 Front Desk",
              description: "Round-the-clock warm hospitality and local travel assistance in Gori.",
              imageSrc: "https://img.b2bpic.net/free-photo/bellhop-offering-cup-coffee-guests_482257-92508.jpg",
              imageAlt: "couple talking in hotel lobby"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/cushion-house-bedding-home-bedroom_1203-4795.jpg"
          imageAlt="cushion house bedding home bedroom"
          cta={{
            text: "See Room Rates",
            href: "#pricing"
          }}
        />
      </div>

      <div id="pricing" data-webild-section="PricingFramedSlider" data-webild-section-id="PricingFramedSlider-1" data-section="pricing">
        <PricingFramedSlider
          title="Room rates"
          script="tariffs"
          items={[
            {
              name: "Standard Double",
              price: "68 ₾",
              period: "per night",
              description: "Cozy bedroom with a double bed, private bathroom, free Wi-Fi, and city views.",
              specs: [
                {
                  label: "Guests",
                  value: "2"
                },
                {
                  label: "Size",
                  value: "22 m2"
                },
                {
                  label: "View",
                  value: "City center"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/relax-bedroom_1150-17980.jpg",
              imageAlt: "relax bedroom",
              cta: {
                text: "Reserve room",
                href: "#contact-plum-form"
              }
            },
            {
              name: "Twin Room",
              price: "75 ₾",
              period: "per night",
              description: "Comfortable room featuring two single beds, desk space, and morning coffee set.",
              specs: [
                {
                  label: "Guests",
                  value: "2"
                },
                {
                  label: "Size",
                  value: "25 m2"
                },
                {
                  label: "View",
                  value: "Quiet street"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-cozy-bed-arrangement-with-breakfast_23-2150326150.jpg",
              imageAlt: "High angle cozy bed arrangement with breakfast",
              cta: {
                text: "Reserve room",
                href: "#contact-plum-form"
              }
            },
            {
              name: "Family Suite",
              price: "110 ₾",
              period: "per night",
              description: "Spacious option with extra seating, air conditioning, and peaceful surroundings.",
              specs: [
                {
                  label: "Guests",
                  value: "3 to 4"
                },
                {
                  label: "Size",
                  value: "38 m2"
                },
                {
                  label: "View",
                  value: "Courtyard"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/contemporary-living-room_1150-12613.jpg",
              imageAlt: "contemporary living room",
              cta: {
                text: "Reserve room",
                href: "#contact-plum-form"
              }
            }
          ]}
        />
      </div>

      <div id="metrics-plus-count" data-webild-section="MetricsPlusCount" data-webild-section-id="MetricsPlusCount-1" data-section="metrics-plus-count">
        <MetricsPlusCount
          title="Proven hospitality"
          ariaLabel="Key statistics for Hotel Gori House"
          items={[
            {
              value: 4.4,
              suffix: "/5",
              label: "Average rating"
            },
            {
              value: 52,
              suffix: "",
              label: "Verified guest reviews"
            },
            {
              value: 4.6,
              suffix: "/5",
              label: "Location rating"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPhotoQuote" data-webild-section-id="TestimonialPhotoQuote-1" data-section="testimonial" data-scene>
        <TestimonialPhotoQuote
          items={[
            {
              quote: "Fantastic central location on Stalin Street with remarkably helpful staff.",
              name: "Molly Coleman",
              role: "Solo traveler"
            },
            {
              quote: "Great value for 68 ₾. Warm Georgian hospitality from the moment we checked in.",
              name: "Hannah Fletcher",
              role: "Weekend guest"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/modern-clean-interior-design_23-2151929386.jpg"
          imageAlt="Modern and clean interior design"
        />
      </div>

      <div id="faq-plus-accordion" data-webild-section="FaqPlusAccordion" data-webild-section-id="FaqPlusAccordion-1" data-section="faq-plus-accordion">
        <FaqPlusAccordion
          title="Before You Arrive"
          script="Gori House FAQ"
          items={[
            {
              title: "WHAT ARE THE CHECK-IN AND CHECK-OUT TIMES?",
              description: "Check-in begins at 14:00, and check-out is until 12:00. Early arrival or late departure can be requested subject to room availability."
            },
            {
              title: "IS COMPLIMENTARY WI-FI INCLUDED IN ALL ROOMS?",
              description: "Yes, high-speed Wi-Fi is complimentary throughout all guest rooms and hotel common areas."
            },
            {
              title: "WHAT IS YOUR CANCELLATION POLICY?",
              description: "Free cancellation options are available up to 24 hours prior to check-in depending on your room selection."
            },
            {
              title: "WHERE IS HOTEL GORI HOUSE LOCATED?",
              description: "We are located at 3 Stalini St, Gori 1400, offering easy access to local transit and key sightseeing spots."
            },
            {
              title: "DO YOU HAVE A 24-HOUR FRONT DESK?",
              description: "Yes, our front desk operates 24/7 to welcome guests and assist with inquiries or arrival arrangements."
            }
          ]}
          cta={{
            text: "Contact Front Desk",
            href: "#contact-plum-form"
          }}
          ariaLabel="Frequently Asked Questions"
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title="Plan Your Stay"
          script="Contact"
          options={[
            "Room Reservation",
            "Group Booking",
            "General Inquiry"
          ]}
          submitText="Send Message"
          labels={{
            name: "Full Name",
            email: "Email Address",
            enquiry: "Inquiry Type",
            message: "Message",
            sending: "Sending...",
            sent: "Message Sent",
            thanks: "Thank you! We will get back to you shortly."
          }}
        />
      </div>
    </>
  );
}
