export const publicationsData = [
  {
    id: 1,
    year: '2025',
    status: 'Published',
    type: 'Conference Paper',
    title:
      'eGov-Lens: A Multi-Dimensional Machine Learning Approach to Aspect-Based Public Feedback Analysis on Bengali e-Government Platforms',
    authors:
      'Fuad, M. M., Mazid, A. A., Adnan, M. I., Das, T., Prapti, S. S., & Mahbub, N.',
    venue:
      'Proceedings of the 28th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, Dec. 19–21, 2025',
    link: 'https://doi.org/10.1109/ICCIT68739.2025.11491291',
    abstract: 'With the rapid expansion of e-services under Digital Bangladesh initiatives, citizens increasingly rely on online platforms to access government services and most often share their opinion in social media and digital forums. Existing sentiment analysis lacks of aspect-level insights in terms of egovernment related services. This paper presents eGov-Lens, a practical pipeline for aspect-based analysis of Bengali public feedback on e-government channels. We curate and annotate 34,001 comments (2020-2024) spanning twelve services and four policy-relevant aspects- sentiment, ease of find, responsiveness, and accuracy. The approach benchmarks three text representations (bag-of-words/CountVectorizer, BanglaBERT, mBERT) with logistic regression, support vector classifier, and naïve bayes. BanglaBERT with a support-vector head attains the strongest single-aspect quality on the policy-critical Accuracy task (micro-avg accuracy ≈0.93), while BanglaBERT with logistic regression offers the best accuracy-latency trade-off for deployment and a classical CountVectorizer+LR baseline trains and infers fastest. An entropy-weighted TOPSIS combines quality and cost to rank alternatives, favoring CountVectorizer+LR overall with BanglaBERT+LR a close second, and providing actionable guidance for NLP deployment on resource-constrained government infrastructure.'
  },
  {
    id: 2,
    year: '2025',
    status: 'Published',
    type: 'Conference Paper',
    title:
      'Stochastic Modeling of Throughput-Quality Dynamics in Labor-Intensive Manufacturing: A Comparative Analysis of Operator Fatigue and Process Instability',
    authors:
      'Fuad, M. M., Mazid, A. A., Adnan, M. I., & Ammar, K.',
    venue:
      'Proceedings of the 8th IEOM Bangladesh International Conference on Industrial Engineering and Operations Management, Dhaka, Bangladesh, Dec. 20–21, 2025',
    link: 'https://doi.org/10.46254/BA08.20250379',
    abstract: 'The inherent variability of manual assembly process possesses significant challenges to standardization and quality assurance within semi-automated food production sector. The study presents a quantitative and comparative analysis of stochastic nature of human fatigue that affect the productivity. By integrating high resolution time motion analysis along with statistical process control (SPC), this research has dived into two manual production line to quantify quality parameters, find relationship among product shape, operator performance behavior, efficiency and unit weight consistency. We employed regression analysis to estimate the relationship between time and worker fatigue in a controlled environment. Furthermore, process capability analysis reveals the relationship of human fatigue and process instability. Finally, using Monte Carlo algorithm, we have simulated the data to quantify the annual financial loss due to process instability.'
    },
  {
    id: 3,
    year: '2025',
    status: 'Poster',
    type: 'Poster / Research Output',
    title:
      'IoT-Based Smart Conveyor System for Integrated Quality, Inventory, and Process Control',
    authors:
      'Fuad, M. M., Mazid, A. A., Haq, M. A. U., Ibnat, M. N., Rahman, C. M., Ahmad, N.',
    venue:
      'Poster, ResearchGate, Bangladesh University of Engineering and Technology',
    link: 'https://doi.org/10.13140/RG.2.2.25476.23683',
    abstract: 'This project presents an IoT-based smart conveyor system designed for automated weight-triggered operation and real-time inventory tracking. Using a 5kg load cell with an HX711 amplifier, the system detects when an item’s weight exceeds a preset threshold (e.g., 200 grams) to start the conveyor motor controlled by an L298N driver and a 6V 600RPM DC gear motor. A mechanical arm, operated by an SG-90 micro servo motor, places items onto the conveyor belt. The HC-SR04 ultrasonic sensor detects and counts each passing item, providing immediate visual feedback through a green LED. The ESP32 microcontroller enables IoT connectivity, allowing remote monitoring and real-time data logging of weight, item count, and system status for efficient inventory management and process control. This automated setup enhances accuracy, efficiency, and quality assurance in manufacturing lines.'
  },
  {
    id: 4,
    year: '2024',
    status: 'Published',
    type: 'Conference Paper',
    title:
      'Aerodynamic Performance Analysis of NACA 4415 Airfoil Incorporating Gurney and Bionic Flap: A Steady-State Numerical Analysis',
    authors:
      'Bhuiyan, M. Z. H., Fuad, M. M., Rana, M., Hasan, A. S. M. M., & Ammar, K.',
    venue:
      '7th IEOM Bangladesh International Conference on Industrial Engineering and Operations Management, Dhaka, Bangladesh, Dec. 21–22, 2024',
    link: 'https://doi.org/10.46254/ba07.20240040',
    abstract: 'NACA 4415 is the most common and studied airfoil in aerodynamic studies. Incorporating flaps with NACA 4415 airfoil is an effective way to improve aerodynamic performance and efficiency. This study presents a comparative numerical analysis among a standard model of NACA 4415 airfoil, modified NACA 4415 incorporating gurney flap, and NACA 4415 airfoil incorporating bionic flap based on the coefficient of lift and coefficient of drag at various angles of attack (AOA) (i.e. -15°, -10°, -5°,0°,5°,10°,15°) and flap height of 2% of the chord length. The airfoil performance was evaluated under a constant upstream velocity of 20 m/s using Computational Fluid Dynamics (CFD) simulations. The performance was measured based on lift coefficient over drag coefficient ratio and it is validated using velocity and pressure contour over the surface of the airfoil. The highest lift coefficient over drag coefficient ratio was found in the NACA 4415 airfoil incorporating a gurney flap, then the standard NACA 4415 airfoil and the least value of the ratio comes with the NACA 4415 airfoil incorporating a bionic flap. For instance, the Gurney flap made a big difference, boosting the lift-to-drag ratio by 49.9% at 0° AOA compared to the standard airfoil. Conversely, the bionic flap reduced this ratio by 19.86%. However, in every case, NACA 4415 airfoil with Gurney flap outperforms than other two airfoils in this study. Moreover, the velocity and pressure contour also support the result found from lift and drag coefficient.'
  }
];
