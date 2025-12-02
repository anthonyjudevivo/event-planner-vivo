
import "./EventPlanner.css";

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      <header>
        <h1>Plan Your Event With Confidence</h1>
      </header>

      <section className="description">
        <p>
          Organize any event smoothly — whether it's a professional gathering or
          a personal celebration. We provide the tools and support to make
          planning effortless.
        </p>
        <button className="get-started-button">Start Planning</button>
      </section>

      <section className="events_categories">
        <ul>
          <h2>Corporate Events</h2>
          <li>Annual Meetings</li>
          <li>Leadership Summits</li>
          <li>Training Sessions</li>
          <li>Company Celebrations</li>
        </ul>

        <ul>
          <h2>Private Celebrations</h2>
          <li>Anniversaries</li>
          <li>Debut Parties</li>
          <li>Family Reunions</li>
          <li>Adult Birthdays</li>
        </ul>

        <ul>
          <h2>Special Occasions</h2>
          <li>Award Ceremonies</li>
          <li>Charity Events</li>
          <li>Holiday Celebrations</li>
          <li>VIP Nights</li>
        </ul>
      </section>

      <section className="features">
        <h2>Our Services</h2>

        <ul>
          <li>Professional Event Planning & Coordination</li>
          <li>Venue Scouting and Supplier Management</li>
          <li>Creative Program Design</li>
          <li>Audio-Visual and Technical Setup</li>
          <li>On-the-Day Event Execution</li>
          <li>Full Budget and Timeline Management</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Client Feedback</h2>

        <div className="testimonial">
          <p>
            "Flawless execution! Our corporate summit ran smoothly from start to finish."
          </p>
          <p>
            <strong>- David Mendoza</strong>
          </p>
        </div>

        <div className="testimonial">
          <p>
            "Highly professional and reliable. They turned our anniversary event
            into something truly memorable."
          </p>
          <p>
            <strong>- Carla Vergara</strong>
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="How can we help you?"></textarea>
          <button className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default EventPlanner;
