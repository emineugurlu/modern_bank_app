import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full min-h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
          Stats
          Business
          Billing
          CardDeal
          Testimonials
          Clients
          CTA
          Footer
        </div>
      </div>
    </div>
  );
};

export default App;
