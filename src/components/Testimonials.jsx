import { Star, ThumbsUp, ShieldCheck, Smile, CheckCircle, User } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="p-6 text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold flex justify-center items-center text-white">
        <Star className="mr-2 text-yellow-400" /> What Our Riders Say
      </h2>

      {/* Marquee Container */}
      <div className="relative overflow-hidden w-full mt-6">
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {/* Testimonial Cards */}
          <div className="testimonial-card">
            <Smile className="icon text-green-400" />
            <p>
              "The best rideshare experience I've ever had! The driver was on time, the car was 
              exceptionally clean, and the entire ride was smooth. I’ll definitely use this service again!"
            </p>
            <span>- Alex M.</span>
          </div>

          <div className="testimonial-card">
            <ShieldCheck className="icon text-blue-400" />
            <p>
              "Safety was my biggest concern, but this service exceeded my expectations. 
              The driver was polite, followed all traffic rules, and I felt secure the whole time."
            </p>
            <span>- Sarah T.</span>
          </div>

          <div className="testimonial-card">
            <CheckCircle className="icon text-purple-400" />
            <p>
              "Reliable and professional! My driver arrived exactly on time, 
              took the best route, and got me to my destination without any delays."
            </p>
            <span>- Michael B.</span>
          </div>

          <div className="testimonial-card">
            <ThumbsUp className="icon text-orange-400" />
            <p>
              "I use this service almost daily, and every ride has been excellent. The drivers are friendly, 
              the app is easy to use, and the payments are seamless. Highly recommended!"
            </p>
            <span>- Jessica L.</span>
          </div>

          <div className="testimonial-card">
            <User className="icon text-red-400" />
            <p>
              "Finally, a ride-sharing app that puts drivers and riders first! The rates are fair, 
              and I love that drivers get paid directly without commission cuts."
            </p>
            <span>- David R.</span>
          </div>

          <div className="testimonial-card">
            <Star className="icon text-yellow-400" />
            <p>
              "I've tried many rideshare services, but this one stands out. The rides are affordable, 
              the service is top-notch, and I always feel valued as a customer."
            </p>
            <span>- Emma C.</span>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite; /* Slower Speed */
          }
          .testimonial-card {
            min-width: 350px;
            max-width: 380px;
            height: 220px; /* Increased Height */
            background: #1f2937;
            padding: 1.5rem;
            border-radius: 14px;
            box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.3);
            text-align: left;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden; /* Prevents text overflow */
            white-space: normal; /* Ensures text wraps inside the card */
          }
          .testimonial-card p {
            font-size: 1rem;
            line-height: 1.4;
            color: #e5e7eb;
            max-height: 120px; /* Prevents overflow */
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .testimonial-card span {
            font-size: 0.85rem;
            color: #9ca3af;
            font-style: italic;
          }
          .icon {
            width: 32px;
            height: 32px;
            margin-bottom: 10px;
          }
        `}
      </style>
    </section>
  );
}
