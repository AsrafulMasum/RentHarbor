import { useState } from "react";
import Title from "../Title";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const handleFAQ = (id) => {
    setOpen(!open);
    const element = document.getElementById(id);
    if (open) {
      element.classList.remove("collapse-open");
      element.classList.add("collapse-close");
    } else {
      element.classList.remove("collapse-close");
      element.classList.add("collapse-open");
    }
  };

  return (
    <div className="bg-white pt-16">
      <section className="max-w-screen-xl mx-4 lg:mx-auto">
        <Title
          title="FAQ"
          subTitle="Got Questions? We've Got Answers"
          desc="Get informed! Explore FAQs covering rental procedures, lease agreements, and more for a seamless renting experience."
        />
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-center mt-10">
          <div className="lg:w-1/2">
            <div
              id="accordion1"
              className="collapse collapse-arrow cursor-pointer"
              onClick={() => handleFAQ("accordion1")}
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="my-accordion"
              />
              <div className="collapse-title text-xl font-medium text-secondary">
                How do I apply for a rental property?
              </div>
              <div className="collapse-content">
                <p className="text-primary ml-2">
                  To apply, simply fill out our online application form for the
                  property you&#39;re interested in. Be sure to provide all
                  required documentation, such as proof of income and
                  references.
                </p>
              </div>
            </div>
            <div
              id="accordion2"
              className="collapse collapse-arrow cursor-pointer"
              onClick={() => handleFAQ("accordion2")}
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="my-accordion"
              />
              <div className="collapse-title text-xl font-medium text-secondary">
                What are the typical lease terms?
              </div>
              <div className="collapse-content">
                <p className="text-primary ml-2">
                  Lease terms vary by property, but most leases are for a
                  duration of 6 months to 1 year. Some landlords may offer
                  shorter or longer lease options depending on their
                  preferences.
                </p>
              </div>
            </div>
            <div
              id="accordion3"
              className="collapse collapse-arrow cursor-pointer"
              onClick={() => handleFAQ("accordion3")}
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="my-accordion"
              />
              <div className="collapse-title text-xl font-medium text-secondary">
                Are utilities included in the rent?
              </div>
              <div className="collapse-content">
                <p className="text-primary ml-2">
                  It depends on the rental listing. Some properties include
                  utilities in the rent, while others require tenants to pay for
                  utilities separately. Be sure to clarify this with the
                  landlord or property manager before signing the lease.
                </p>
              </div>
            </div>
            <div
              id="accordion4"
              className="collapse collapse-arrow cursor-pointer"
              onClick={() => handleFAQ("accordion4")}
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="my-accordion"
              />
              <div className="collapse-title text-xl font-medium text-secondary">
                Is renter&#39;s insurance required?
              </div>
              <div className="collapse-content">
                <p className="text-primary ml-2">
                  Yes, renter&#39;s insurance is typically required to protect
                  your personal belongings in case of theft, fire, or other
                  unforeseen events. It&#39;s a small investment that provides
                  valuable coverage and peace of mind.
                </p>
              </div>
            </div>
            <div
              id="accordion5"
              className="collapse collapse-arrow cursor-pointer"
              onClick={() => handleFAQ("accordion5")}
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="my-accordion"
              />
              <div className="collapse-title text-xl font-medium text-secondary">
                Can I have pets in the rental property?
              </div>
              <div className="collapse-content">
                <p className="text-primary ml-2">
                  Pet policies vary by property and landlord. Some rentals allow
                  pets with an additional pet deposit or monthly fee, while
                  others have restrictions on breed, size, or number of pets
                  allowed. Be sure to inquire about the pet policy before
                  applying.
                </p>
              </div>
            </div>
            <div
              id="accordion6"
              className="collapse collapse-arrow cursor-pointer"
              onClick={() => handleFAQ("accordion6")}
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="my-accordion"
              />
              <div className="collapse-title text-xl font-medium text-secondary">
                What happens if I need maintenance or repairs in the rental
                unit?
              </div>
              <div className="collapse-content">
                <p className="text-primary ml-2">
                  We have a dedicated maintenance team to address any issues
                  that may arise during your tenancy. Simply submit a
                  maintenance request through our online portal, and we&#39;ll
                  promptly schedule a technician to assess and address the
                  problem.
                </p>
              </div>
            </div>
            <div
              id="accordion7"
              className="collapse collapse-arrow cursor-pointer"
              onClick={() => handleFAQ("accordion7")}
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="my-accordion"
              />
              <div className="collapse-title text-xl font-medium text-secondary">
                Can I sublease the rental unit if I need to move out early?
              </div>
              <div className="collapse-content">
                <p className="text-primary ml-2">
                  Subleasing policies vary by landlord and lease agreement. Some
                  landlords may allow subleasing with prior approval and a
                  sublease agreement, while others prohibit subleasing
                  altogether. Be sure to review your lease agreement and consult
                  with the landlord before subleasing.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              className="w-full"
              src="https://themeforest.wprealizer.com/html-educoda-preview/educoda/assets/images/faq-img.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
