import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="outline" data-card="frame" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="Hotel Gori House"
          cta={{
            text: "Reserve Room",
            href: "#contact-plum-form"
          }}
        />
      </header>
      <main className="flex-grow" data-button="outline" data-card="frame" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterPlumPhone
          brand="Hotel Gori House"
          phone="599 43 17 07"
          email="info@gorihouse.ge"
          address={[
            "3 Stalini St",
            "Gori 1400, Georgia"
          ]}
          columns={[
            {
              title: "Navigation",
              links: [
                {
                  text: "Overview",
                  href: "#hero"
                },
                {
                  text: "Rooms",
                  href: "#services"
                },
                {
                  text: "Rates",
                  href: "#pricing"
                }
              ]
            },
            {
              title: "Guest Info",
              links: [
                {
                  text: "Location & Sightseeing",
                  href: "#metrics-plus-count"
                },
                {
                  text: "Reviews",
                  href: "#testimonial"
                },
                {
                  text: "Arrival FAQ",
                  href: "#faq-plus-accordion"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "24/7 Front Desk",
                  href: "#contact-plum-form"
                },
                {
                  text: "Directions",
                  href: "#contact-plum-form"
                }
              ]
            }
          ]}
          legal="© 2026 Hotel Gori House. All rights reserved."
          toTopText="Back to top"
        />
      </footer>
    </div>
  );
}
